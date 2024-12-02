import { useState } from 'react'

import './App.css'

import CategoryList from './components/categories/CategoryList'

import PostList from './components/post/PostList'

import Header from './components/generics/Header'

import Hero from './components/generics/Hero'

import Footer from './components/generics/Footer'

import Subscription from './components/generics/Subscription'

import Users from './Users' 

import EventList from './components/events/EventList'
function App() {
  return (
    <div className='bg-main text-slate-200'>

      <Header/>
      <Hero/>
      {/* <CategoryList/> */}
      {/* <Users /> */}
      <EventList/>
      {/* <PostList /> */}
      {/* <Subscription/> */}
      <Footer/>
    </div>
  )
}

export default App
