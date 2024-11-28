import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import OverPolicy from '../Components/OverPolicy'
import NewLetterBox from '../Components/NewLetterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OverPolicy/>
      <NewLetterBox/>
    </div>
  )
}

export default Home
