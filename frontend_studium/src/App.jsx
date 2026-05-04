import { useState, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Profile from './pages/Profile.jsx'
import Tasks from './pages/Tasks.jsx'
import Task from './pages/Task.jsx'
import Chats from './pages/Chats.jsx'
import Responses from './pages/Responses.jsx'
import CreateNewTask from './pages/CreateNewTask.jsx'
import Shop from './pages/Shop.jsx'
import './App.css'

import Card from './components/Card.jsx'

import { UserProvider } from './userContext.jsx'


function App() {

  return (
    <>
    <UserProvider>
      <Header />
      <Routes>
        <Route path='/'/>
        <Route path='/profile' element={ <Profile /> }/>
        <Route path='/tasks' element={ <Tasks /> }/>
        <Route path='/tasks/:taskId' element={ <Task /> }/>
        <Route path='/tasks/:taskId/responses' element={ <Responses /> }/>
        <Route path='/chats' element={ <Chats /> }/>
        <Route path='/chats/:chatId'/>
        <Route path='/create-new-task' element={ <CreateNewTask type='create' /> }/>
        <Route path='/moderate-task/:taskId' element={ <CreateNewTask type='moderation' /> }/>
        <Route path='/tasks/:taskId/edit' element={ <CreateNewTask type='edit' /> }/>
        <Route path='/studium-store' element={ <Shop /> }/>
        <Route path='/users' element={ <Card /> }/>
      </Routes>
      <Footer />
    </UserProvider>
      
    </>
  )
}

export default App
