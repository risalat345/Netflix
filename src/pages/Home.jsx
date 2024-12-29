import React from 'react'
import Navbar from '../components/Navbar'
import banner from "../assets/hero_banner.jpg"
import hero_title from "../assets/hero_title.png"
import playIcon from "../assets/play_icon.png"
import infoIcon from "../assets/info_icon.png"
import TitleCards from '../components/TitleCards'
import Footer from "../components/Footer"
const Home = ()=>{
  return (
    <div>
      <Navbar/>
      <div className="hero">
      <div className="relative">
  <img src={banner} alt="" className="banner w-full" />
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent"></div>
</div>
        <div className="hero-caption absolute w-[100%] md:my-20 top-14 pl-[2%]">
          <img className='w-[50%] max-w-[420px] mb-5' src={hero_title} alt=""/>
          <p className='max-w-[500px] text-sm hidden md:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et deleniti odio, nemo voluptatem earum exercitationem autem consequatur eos sit? Voluptate dolorem modi commodi cumque perferendis illum, porro ut ratione!</p>
          <div className="flex gap-5 m-2">
          <button className='bg-white hover:bg-gray-200 text-black font-bold gap-1 flex justify-center items-center px-6 py-1 rounded-lg'><img width={20} src={playIcon} alt="" />Play</button>
          <button className='backdrop-blur-md bg-white/30 text-white hover:bg-white/20 font-bold gap-1 flex justify-center items-center px-6 py-1 rounded-lg'><img width={20} src={infoIcon} alt="" />Info</button>
          </div>
        </div>
        <TitleCards title="Popular On Netflix" category={"popular"}/>
        <TitleCards title="Only On Netflix" category={"now_playing"}/>
        <TitleCards title="Blockbuster Movies" category={"top_rated"}/>
        <TitleCards title="Upcoming" category={"upcoming"}/>
        
      </div>
      <Footer/>
    </div>
  )
}
export default Home