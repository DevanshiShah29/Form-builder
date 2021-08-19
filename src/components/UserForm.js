import { Button, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { useParams } from "react-router";

const UserForm = () => {
  let history = useHistory();
  let { id } = useParams();
  let [paragraph, setParagraph] = useState('')
  let [{ questions, doc_name, doc_desc }, {}] = useStateValue();

  const selectinput = (que, value) => {
    setParagraph(value)
  }

  const selectcheck = (e, que, option) => {
    console.log(e, que, option)
  }

  const select = (que, option) => {
    console.log(que, option)
  }

  const submit = () => {
    let newCount = 1;
    if (localStorage.getItem(`${id}`) !== null && localStorage.getItem(`${id}`) !== undefined) {
      newCount = Number(localStorage.getItem(`${id}`)) + 1;
      localStorage.setItem(`${id}`, newCount);
    } else {
      localStorage.setItem(`${id}`, newCount);
    }
    history.push(`/submitted`)
  }

  return (
    <div className="submit">
      <div className="user_form">
        <div className="user_form_section">
          <div className="user_title_section">
            <Typography className="form_name">{doc_name}</Typography>
            <Typography className="form_desc">{doc_desc}</Typography>
          </div>
          {
            questions.map((question, qindex) => (
              <div className="user_form_questions">
                <Typography className="question_text">{qindex + 1}.  {question.questionText}</Typography>
                {
                  question.options.map((ques, index) => (

                    <div key={index} className="option_text">
                      <div className="option_text_inner">
                        <div className="form-check">
                          {
                            question.questionType != "radio" ? (
                              question.questionType != 'text' ? (
                                <label>
                                  <input
                                    type={question.questionType}
                                    name={qindex}
                                    value={ques.optionText}
                                    className="form-check-input"
                                    required={question.required}
                                    onChange={(e) => { selectcheck(e.target.checked, question.questionText, ques.optionText) }}
                                  />
                                  {ques.optionText}
                                </label>) : (

                                <label>
                                  <input
                                    type={question.questionType}
                                    name={qindex}
                                    value={paragraph}
                                    className="form-check-input text"
                                    required={question.required}
                                    onChange={(e) => { selectinput(question.questionText, e.target.value) }}
                                  />
                                  {/* {ques.optionText} */}
                                </label>
                              )
                            )
                              : (
                                <label>
                                  <input
                                    type={question.questionType}
                                    name={qindex}
                                    value={ques.optionText}
                                    className="form-check-input"
                                    required={question.required}
                                    onChange={() => { select(question.questionText, ques.optionText) }}
                                  />
                                  {ques.optionText}
                                </label>
                              )
                          }
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            ))
          }

          <div className="user_form_submit">
            <Button variant="contained" color="primary" onClick={submit}>Submit</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UserForm;

