"use client"
import React, { useState } from 'react';
import { Button, Layout, Menu, Dropdown, FloatButton, Tooltip } from 'antd';
import { LogoutOutlined, UserOutlined, QuestionCircleOutlined, PoweroffOutlined } from '@ant-design/icons';


import {
  HomeOutlined,
  BarChartOutlined,
  LineChartOutlined,
  ShopOutlined,
  MenuOutlined
} from '@ant-design/icons';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './bird.css'
import axios from 'axios';
const { Header } = Layout;

const HeaderBanas = () => {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const logout = async () => {
    try {
      const response = await fetch("/api/logout");
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Assuming router is available in your context
      router.push('/login');
    } catch (error) {
      // Handle error as needed
    }
  };
  

  const handleMenuClick = (path) => {
    router.push(path);
    setMenuVisible(false);
  };
  const menu = (
    <Menu onClick={(e) => handleMenuClick(e.key)} theme="dark">
      <Menu.Item key="/">
        <HomeOutlined />
        {' '}Home
      </Menu.Item>
      <Menu.Item key="/dashboard">
        <BarChartOutlined />
        {' '}Dashboard
      </Menu.Item>
      <Menu.Item key="/year-dashboard">
        <LineChartOutlined />
        {' '}Year Data
      </Menu.Item>
      <Menu.Item key="/pivot">
        <ShopOutlined />
        {' '}Store Wise P&L
      </Menu.Item>
    </Menu>
  );



  return (
    <Header className="dashboard-header" style={{ background: 'linear-gradient(to right, #56ab2f, #a8e063)', padding: '0', minWidth: '100%', margin: '0 auto', height: '40%' }}>

      <FloatButton.Group
        trigger="hover"
        type='default'
        style={{
          right: 20,
          bottom: 30,
        }}
        icon={<UserOutlined />}
      >
        <FloatButton onClick={logout} icon={<LogoutOutlined />} />
      </FloatButton.Group>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", marginRight: '50%' }}>
          <Image src='/DeltaInfosoft.png' alt="Delta" width={120} height={60} style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', padding: '3px' }} />
          <Image src='/BanasLogo1.png' alt="Banas" width={120} height={60} style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', padding: '3px', marginLeft: '20px' }} />
        </div>
        <div style={{ position: 'relative' }}>
          <div className="bird-container bird-container-one">
            <div className="bird bird-one"></div>
          </div>
          <div className="bird-container bird-container-two">
            <div className="bird bird-two"></div>
            <div>

            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', padding: '16px', }}>
            <h2 style={{ margin: '0', color: '#fff', whiteSpace: 'nowrap', marginRight: '50%', cursor: "pointer" }} onClick={() => router.push('/')}>Umang Mall Dashboard</h2>
            <Dropdown overlay={menu} visible={menuVisible} onVisibleChange={(visible) => setMenuVisible(visible)}>
              <Button type="text" icon={<MenuOutlined />} style={{ color: 'white', fontSize: '1.2em', transition: 'color 0.3s', }}>
                Menu
              </Button>
            </Dropdown>
            <div style={{ marginRight: '50%', justifyContent: 'center', alignItems: "center", color: 'white', cursor: "pointer", marginTop: "5px" }}>
              <Tooltip title="Logout">
                <Button
                  type="text"
                  icon={<LogoutOutlined />}
                  style={{ color: 'white', fontSize: '1.2em', transition: 'color 0.3s' }}
                  onClick={logout}
                />
              </Tooltip>
            </div>
          </div>
          <div className="bird-container bird-container-three">
            <div className="bird bird-three"></div>
          </div>
          <div className="bird-container bird-container-four">
            <div className="bird bird-four"></div>
          </div>
        </div>


      </div>
    </Header>
  );
};

export default HeaderBanas;
