import React from 'react';
import './Sidebar.css'; // Make sure to create this CSS file

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>Task Managment</div>
      <ul className='sidebar-menu'>
        <li className='sidebar-item'>
          <span className='sidebar-link' onClick={() => props.onClick(1)}>
            All Tasks
          </span>
        </li>
        <li className='sidebar-item'>
          <span className='sidebar-link' onClick={() => props.onClick(2)}>
            Pending Tasks
          </span>
        </li>
        <li className='sidebar-item' onClick={() => props.onClick(3)}>
          <span className='sidebar-link'>Completed Tasks</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
