import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import QuestionForm from './QuestionForm';
import { useParams } from "react-router";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>{children}</div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CenteredTabs = () => {
  const [value, setValue] = useState(0);
  const [responses, setResponses] = useState(0);
  let { id } = useParams();


  useEffect(() => {
    if (localStorage.getItem(`${id}`) !== null && localStorage.getItem(`${id}`) !== undefined) {
      setResponses(Number(localStorage.getItem(`${id}`)))
    }
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Paper className="tabs_wrapper">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        className="tabs"
      >
        <Tab label="Questions" className="tab" {...a11yProps(0)} />
        <Tab label="Responses" className="tab" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <QuestionForm />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div className="submit">
          <div className="user_form" >
            <div className="user_form_section">
              <div className="user_form_questions">
                <div className="user_form_inner">
                  <Typography className="responses">{responses ? responses : "No"} Responses</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </Paper>
  );
}
export default CenteredTabs;