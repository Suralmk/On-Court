import NavBar from "./Components/NavBar"
import Homepage from "./Containers/Homepage"
import News from "./Containers/News"
import NewsDetail from "./Containers/NewsDetail"
import Teams from './Containers/Teams'
import TeamsDetail from './Containers/TeamsDetail'
import Footer from "./Components/Footer"
import React from "react"
import { Route, Link, Routes } from "react-router-dom"
function App () {
  return (
<div className="w-full bg-white relative">
    <NavBar className="" />

      <Routes>
          <Route path="/" element ={<Homepage />} />
          <Route path="/news" element ={<News />} />
          <Route path="/news/:title" element ={<NewsDetail />} />
          <Route path="/teams" element ={<Teams />} />
          {/* <Route path="/teams/::team" element ={<TeamsDetail />} /> */}
      </Routes>
      <Footer/>
</div>
   
  )
}

export default App
