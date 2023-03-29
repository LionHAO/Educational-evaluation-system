import React from 'react'
import { useMount } from './hook/useMount'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import cache from 'util/cache'
import { TOKEN_NAME } from 'global/varible'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  useMount(() => {
    // !cache.getCache(TOKEN_NAME)
    //   ? navigate('/login')
    //   : location.pathname === '/'
    //     ? navigate('/home/teach')
    //     : navigate(location.pathname)
    navigate('/home')
  })

  return (
    <div className="App">
    </div>
  )
}

export default App
