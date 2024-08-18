import NavBar from './Components/NavBar'
import Homepage from './Containers/Homepage'
import News from './Containers/News'
import NewsDetail from './Containers/NewsDetail'
import Teams from './Containers/Teams'
import PageNotFound from './Containers/PageNotFound'
import Donation from './Containers/Donation'
import Footer from './Components/Footer'
import React, { useState, useEffect } from 'react'
import { Route, Link, Routes } from 'react-router-dom'
import SearchComponent from './Components/SearchComponent'
import Plays from './Containers/Plays'
import SearchResults from './Containers/SearchResults'
import DonationSuccess from './Containers/DonationSuccess'
import ReactGA from 'react-ga'
import ScrollToTop from './Components/ScrollToTop'
import { AnimatePresence } from 'framer-motion'
const TRACKING_ID = 'G-KB6YRJSC6G'
function App () {
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID, { debug: false })
    ReactGA.pageview(window.location.pathname + window.location.search)
    console.log('ReactGA initialized and pageview sent')
  }, [])
  return (
    <div className='w-full bg-white relative'>
      <ScrollToTop />

      <SearchComponent showSearch={showSearch} setShowSearch={setShowSearch} />

      <NavBar
        className=''
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />

      <Routes>
        <Route
          path='/'
          element={
            <Homepage showSearch={showSearch} setShowSearch={setShowSearch} />
          }
        />
        <Route path='/news' element={<News />} />
        <Route path='/news/:news_id' element={<NewsDetail />} />
        <Route path='/our-team' element={<Teams />} />
        <Route path='/support-us' element={<Donation />} />
        <Route path='/plays' element={<Plays />} />
        <Route path='/search/:searched' element={<SearchResults />} />
        <Route path='/donation-success' element={<DonationSuccess />} />
        <Route path='/*' element={<PageNotFound />} />
        {/* <Route path="/teams/::team" element ={<TeamsDetail />} /> */}
      </Routes>

      <Footer />
    </div>
  )
}

export default App
