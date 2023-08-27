import React from 'react';
import TaskHeader from '../../components/TaskHeader/TaskHeader';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
const CompletedTask = () => {
  const completedTask = () => {
    console.log('Completed');
  };
  return (
    <div style={{ width: '100%' }}>
      <TaskHeader
        title='Completed Task'
        icon={<AssignmentOutlinedIcon style={{ marginRight: 10 }} />}
        onClick={completedTask}
      />
    </div>
  );
};

export default CompletedTask;
