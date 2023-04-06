import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import en_GB from 'antd/locale/en_GB';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import Login from './pages/LoginPages/Login'
import ConfigProvider from 'antd/es/config-provider'
import Login from '@/pages/LoginPages/Login'




const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()

root.render(
    <Router>
        <ConfigProvider
            locale={en_GB} //英文包
            theme={{ //主题
                token: {
                    colorPrimary: '#0003b9',
                },
            }}>
            <QueryClientProvider client={queryClient} >
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="login" element={<Login />} ></Route>
                </Routes>
            </QueryClientProvider>
        </ConfigProvider>
    </Router>
)

