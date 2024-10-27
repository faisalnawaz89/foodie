import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/Header/ExploreMenu/ExploreMenu'
import DisplayItem from '../../Components/DisplayItem/DisplayItem'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {

  const [category, setCategory] = useState('All')

  return (
    <>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <DisplayItem category={category} />
        <AppDownload/>
    </>
  )
}

export default Home