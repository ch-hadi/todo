import React from 'react';
import CButton from '../CButton/CButton';

const TaskHeader = (props) => {
  return (
    <div
      style={{
        //   background: 'pink',
        padding: '20px',
        margin: '40px',
        borderRadius: '10px',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <div
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
        }}>
        {props.icon}
        {props.title}
      </div>
      <div style={{}}>
        <CButton
          title={props.title}
          onClick={() => props.onClick()}
          varient='outlined'
        />
      </div>
    </div>
  );
};

export default TaskHeader;
