//  PendingTask;
import React from 'react';
import TaskHeader from '../../components/TaskHeader/TaskHeader';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
const PendingTask = () => {
  const handleTask = () => {
    console.log('Completed');
  };
  return (
    <div style={{ width: '100%' }}>
      <TaskHeader
        title='Pending Task'
        icon={<AssignmentOutlinedIcon style={{ marginRight: 10 }} />}
        onClick={handleTask}
      />
    </div>
  );
};

export default PendingTask;
