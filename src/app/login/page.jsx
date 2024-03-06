"use client"

import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import axios from 'axios';

import './bird.css'; // Import the bird animation styles
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(true);
    const router = useRouter();

    const onFinish = async (values) => {
        try {
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ UserName: username, Password: password }),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
      
          if (data.success) {
            message.success("Logging in..");
            router.push('/');
          } else {
            message.error("Wrong credentials !");
          }
        } catch (error) {
          message.error(error.message);
        }
      };
      

    return (
        <div style={{ position: 'relative', minHeight: '100vh', background: '#f0f2f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Bird Containers */}
            <div className="bird-container bird-container-one">
                <div className="bird bird-one"></div>
            </div>
            <div className="bird-container bird-container-two">
                <div className="bird bird-two"></div>
            </div>
            <div className="bird-container bird-container-three">
                <div className="bird bird-three"></div>
            </div>
            <div className="bird-container bird-container-four">
                <div className="bird bird-four"></div>
            </div>

            <Form
                name="login-form"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                style={{ width: 400, padding: 20, borderRadius: 8, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#fff', position: 'relative', zIndex: 0 }}
            >
                <h1 style={{ textAlign: 'center', marginBottom: 20, color: '#56ab2f', fontSize: '2em' }}>Login</h1>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        size="large"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ borderRadius: 4 }}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input
                        prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type={showPass ? "password" : "text"}
                        placeholder="Password"
                        size="large"
                        color="#56ab2f"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ borderRadius: 4 }}
                        suffix={
                            <div
                                style={{ color: '#8c8c8c', cursor: 'pointer' }}
                                onClick={() => setShowPass(!showPass)}
                            >
                                {!showPass ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                            </div>
                        }
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: '#56ab2f', borderRadius: 4 }}>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;
