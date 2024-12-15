import React from 'react'
import Navbar from '../components/Navbar'
 import Banner from '../components/Banner'
 import OurSuccess from '../components/OurSuccess'
import JobReady from '../components/JobReady'
import Partners from '../components/Partners'
import WhyStudent from '../components/WhyStudent'
import Videos from '../components/Videos'
import PlacementPage from '../components/PlacementPage'
import Headlines from '../components/headlines'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <OurSuccess></OurSuccess>
    <JobReady></JobReady>
    <Partners></Partners>
    <WhyStudent></WhyStudent>
    <Videos></Videos>
    <PlacementPage></PlacementPage>
    <Headlines></Headlines>
    <Footer></Footer>
</>


  )
}

export default Home