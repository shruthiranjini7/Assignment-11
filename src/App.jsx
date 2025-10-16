import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'


export default function App() {
return (
<div className="app-root">
<NavBar />
<main className="container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/users" element={<Users />} />
<Route path="/users/:id" element={<UserDetail />} />
<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</main>
</div>
)
}