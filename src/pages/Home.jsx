import React from 'react'
import Navbar from '../components/Navbar'
 import Banner from '../components/Banner'
 import OurSuccess from '../components/OurSuccess'
import JobReady from '../components/JobReady'
// import AboutUs from '../components/AboutUs'
import SE from '../components/SE'
import Partners from '../components/Partners'
import WhyStudent from '../components/WhyStudent'
import Videos from '../components/Videos'
import PlacementPage from '../components/PlacementPage'
import Headlines from '../components/headlines'
import Footer from '../components/Footer'
import Team from '../components/Team'
import Gallery from '../components/Gallery'
import Alumni from '../components/Alumni'
//import VectorAnimation from '../components/VectorAnimation'

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <OurSuccess></OurSuccess>
    <JobReady></JobReady>
    <Team></Team>
    <Alumni></Alumni>
    {/* <AboutUs></AboutUs> */}
    <SE></SE>
    <Partners></Partners>
    {/* <VectorAnimation></VectorAnimation> */}
    <WhyStudent></WhyStudent>
    <Videos></Videos>
    <PlacementPage></PlacementPage>
    <Gallery></Gallery>
    <Headlines></Headlines>
    <Footer></Footer>
</>


  )
}

export default Home