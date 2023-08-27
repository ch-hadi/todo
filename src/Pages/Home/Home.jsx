import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Alltasks from './Alltasks';
import PendingTask from './PendingTask';
import CompletedTask from './CompletedTask';

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTab = (index) => {
    setActiveTab(index);
  };

  const sidebarWidth = 270; // Width of the sidebar in pixels
  const contentWidth = `calc(100% - ${sidebarWidth}px)`; // Calculate content width
  // console.log(contentWidth);
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onClick={handleTab}
        style={{ width: '88%', background: 'blue' }}
      />
      {activeTab === 1 ? (
        <div style={{ width: '88%', marginTop: '70px' }}>
          <Alltasks />
        </div>
      ) : activeTab === 2 ? (
        <div style={{ width: '88%', marginTop: '70px' }}>
          <PendingTask />
        </div>
      ) : activeTab === 3 ? (
        <div style={{ width: '88%', marginTop: '70px' }}>
          <CompletedTask />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;
