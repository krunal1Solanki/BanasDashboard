import React, { useState } from 'react';
import { HomeOutlined, CalendarOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, Dropdown } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Delta from '../../../public/BanasLogo1.png';
import Banas from '../../../public/DeltaInfoSoft.png';
const { Header } = Layout;

const HeaderBanas = () => {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = (path) => {
    router.push(path);
    setMenuVisible(false);
  };

  const menu = (
    <Menu onClick={(e) => handleMenuClick(e.key)} theme="dark">
      <Menu.Item key="/">Home</Menu.Item>
      <Menu.Item key="/year-dashboard">Year Data</Menu.Item>
      <Menu.Item key="/pivot">Pivoted Data</Menu.Item>
    </Menu>
  );

  return (
    <Header className="dashboard-header" style={{ background: 'linear-gradient(to right, #56ab2f, #a8e063)', padding: '0', width: '100%', margin: '0 auto', height: '40%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px' }}>
        <Image src={Delta} alt="Delta" width={120} height={50} style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', padding: '3px' }} />
        <Image src={Banas} alt="Banas" width={120} height={50} style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', padding: '3px', marginLeft: '20px' }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%' }}>
          <h2 style={{ margin: '0', color: '#fff', marginLeft: '16px', whiteSpace: 'nowrap' }}>Umang Mall Dashboard</h2>

          {/* Burger button with dropdown menu */}
          <Dropdown overlay={menu} visible={menuVisible} onVisibleChange={(visible) => setMenuVisible(visible)}>
            <Button type="text" icon={<MenuOutlined />} style={{ color: 'white', fontSize: '1.2em', transition: 'color 0.3s' }}>
              Menu
            </Button>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default HeaderBanas;
