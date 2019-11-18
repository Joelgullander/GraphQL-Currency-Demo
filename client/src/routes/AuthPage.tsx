import React, { useState } from 'react';
import {
  Redirect
} from "react-router-dom";
import { Button } from 'antd';
import AuthService from '../services/AuthService';

const AuthPage = () => {
  const [ loading, setLoading ] = useState(false);
  const [ success, setSuccess ] = useState(false);

  const login = () => {
    setLoading(true);
    AuthService.login().then(success => {
      if(success) {
        // Set timeout for debug purpose
        setTimeout(() => {
          setLoading(false)
          setSuccess(true)
        }, 2000)
      } else {
        setLoading(false)
      }
    })
  }

  if(success) {
    return <Redirect to='/' />
  }

  return (
    <div style={{ background: '#000', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Button type="danger" shape="round" loading={loading} onClick={login}>
        Authenticate
      </Button>
    </div>
  )
}

export default AuthPage;
