import { Button } from '@mui/material';
import React from 'react';
import CButton from '../../components/CButton/CButton';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import TaskHeader from '../../components/TaskHeader/TaskHeader';
const Alltasks = () => {
  const AddTask = () => {
    console.log('clicked');
  };
  return (
    <div style={{ width: '100%' }}>
      <TaskHeader
        title='Add Task'
        icon={<AssignmentOutlinedIcon style={{ marginRight: 10 }} />}
        onClick={AddTask}
      />
    </div>
  );
};

export default Alltasks;
