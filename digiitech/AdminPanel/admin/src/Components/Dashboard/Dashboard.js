import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import Sidebar from '../SideBar/Sidebar';
import TopBarWelcome from '../TopBar&Welcome/TopBarWelcome';
import PieGraphsContent from "../PieGraphsContent/PieGraphsContent";
import Demographic from '../Demographics/Demographic';

const Dashboard = () => {
  const name = 'Pranav Bhargava';
  const position = 'Marketing Administrator';
  const [activePage, setActivePage] = useState('Dashboard'); 
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar setActivePage={setActivePage} />
      <div className={styles.rightContainer}>
        <TopBarWelcome name={name} position={position} />
        {/* PieGraphs */}
        {activePage === 'Dashboard' && <PieGraphsContent />}

        {/*Demographic*/}
        {activePage === 'Demographic' && <Demographic />}


      </div>
    </div>
  );
};

export default Dashboard;