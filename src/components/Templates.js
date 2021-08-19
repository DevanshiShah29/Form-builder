import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import uuid from "react-uuid";
import axios from "axios";

const Templates = () => {
  const history = useHistory();
  let today = new Date();
  const [date, setDate] = useState(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes());

  const createform = () => {
    var create_form_id = uuid();
    history.push("/form/" + create_form_id);
    var questions_list = [
      {
        questionText: "Question",
        questionType: "radio",
        options: [{ optionText: "Option 1" }],
        open: true,
        required: false,
      },
    ];

    axios.post(`http://localhost:9000/add_questions/${create_form_id}`, {
      date: date,
      document_name: "Untitled form",
      doc_desc: "Add Description",
      questions: questions_list,

    });
  }
  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <p>Start a new form</p>
        </div>
        <div className="template_right">
          <div className="card" onClick={createform}>
            <p className="title">Blank Form</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Templates;
