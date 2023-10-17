import React from 'react'
import LeftMenu from './DashboardComponents/LeftMenu';
import RightBar from "./DashboardComponents/Rightbar";

const Dashboard = () => {
  return (
    <div className="flex">
        <LeftMenu />
        <RightBar />
    </div>
  )
}

export default Dashboard
