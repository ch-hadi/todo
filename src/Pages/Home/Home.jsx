import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => {
  const [activeTab,setActiveTab]=useState(1);
  const handleTab=(index)=>{
    setActiveTab(index)
  }
 console.log(activeTab)
  return (
    <div style={{display:'flex'}}>
       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab} />
       {activeTab==1?<p>HammadAhmad</p>:activeTab==2?<p>Ammar Ahmad</p>:''}
    </div>
  )
}

export default Home