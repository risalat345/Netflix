import React from 'react'
import facebook_icon from "../assets/facebook_icon.png"
import instagram_icon from "../assets/instagram_icon.png"
import twitter_icon from "../assets/twitter_icon.png"
import youtube_icon from "../assets/youtube_icon.png"
const Footer = () => {
  return (
    <div className=' flex flex-col justify-center p-10 gap-3'>
        <div className='flex gap-2'>
        <img width={40} src={facebook_icon} alt="" />
        <img width={40} src={instagram_icon} alt="" />
        <img width={40} src={twitter_icon} alt="" />
        <img width={40} src={youtube_icon} alt="" />
        </div>
        <ul className='flex flex-wrap text-sm sm:text-base p-3'>
  <li className='w-1/2 sm:w-3/12 break-words'>FAQ</li>
  <li className='w-1/2 sm:w-3/12 break-words'>Investor Relations</li>
  <li className='w-1/2 sm:w-3/12 break-words'>Privacy</li>
  <li className='w-1/2 sm:w-3/12 break-words'>Speed Test</li>
  <li className='w-1/2 sm:w-3/12 break-words'>Help Center</li>
  <li className='w-1/2 sm:w-3/12 break-words'>Jobs</li>
  <li className='w-1/2 sm:w-3/12 break-words'>Cookie Preferences</li>
  <li className='w-1/2 sm:w-3/12 break-words'>Legal Notices</li>
  <li className='w-1/2 sm:w-3/12 break-words'>Account</li>
  <li className='w-1/2 sm:w-3/12 break-words'>Ways to Watch</li>
  <li className='w-1/2 sm:w-3/12 break-words'>Corporate Information</li>
  <li className='w-1/2 sm:w-3/12 break-words'>Netflix Originals</li>
</ul>
<h1 className='text-center w-full bg-black text-red-600 font-mono'>Made By Ashraf Uddin</h1>
    </div>
  )
}

export default Footer
