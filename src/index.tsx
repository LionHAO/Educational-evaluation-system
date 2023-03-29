import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Home from 'pages/Home'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()

root.render(
    <Router>
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<App />}>
                    {/* <Route path="home" element={<Home />}></Route> */}
                </Route>
            </Routes>
        </QueryClientProvider>
    </Router>
)

