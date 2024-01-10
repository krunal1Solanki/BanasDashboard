import React from 'react'
import { HomeOutlined, CalendarOutlined } from '@ant-design/icons';
import {  Button,Layout } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Delta from '../Images/DeltaInfosoft.png'
import Banas from '../Images/Banas_Logo1.png'
const { Header, Content } = Layout;



const HeaderBanas = () => {
    const router = useRouter()
  return (
    <Header className="dashboard-header" style={{ background: 'linear-gradient(to right, #56ab2f, #a8e063)', padding: '0', width: '100%', margin: '0 auto', height: "40%" }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px' }}>
      <Image src={Delta} alt="Delta" width={120} height={50} style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', padding: '3px' }} />
      <Image src={Banas} alt="Banas" width={120} height={50} style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', padding: '3px', marginLeft: '20px' }} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%' }}>
        <h1 style={{ margin: '0', color: '#fff', marginLeft: '16px' }}>Umang Mall Dashboard</h1>

        {/* Cool hover effect on "Home" button */}
        <Button type="text" icon={<HomeOutlined />} onClick={()=> router.push('/')} style={{ marginLeft: '14%', fontSize: '1.2em', color: 'white', transition: 'color 0.3s' }}>
          Home
        </Button>

        {/* Cool hover effect on "Year Data" button */}
        <Button type="text" icon={<CalendarOutlined />} onClick={()=> router.push('/year-dashboard')} style={{ color: 'white', fontSize: '1.2em', transition: 'color 0.3s' }}>
          Year Data
        </Button>
      </div>
    </div>
  </Header>

  )
}

export default HeaderBanas