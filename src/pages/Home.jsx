import React from 'react'
import Navbar from '../components/Navbar'
 import Banner from '../components/Banner'
 import OurSuccess from '../components/OurSuccess'
import JobReady from '../components/JobReady'
import Partners from '../components/Partners'

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <OurSuccess></OurSuccess>
    <JobReady></JobReady>
    <Partners></Partners>
</>


  )
}

export default Home