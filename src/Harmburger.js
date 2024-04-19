import React from 'react'
import { useRef, useState } from 'react'

export default function Harmburger() {
    const handleblock = useRef()
    const [statehamber,setStatehamber] = useState(false)

    const actionhamber = ()=>{
        handleblock.current.style.transform = "translateX(-2%)";
        setStatehamber(true)
    }

    
    const closeHamber = ()=>{
        handleblock.current.style.transform = "translateX(-103%)";
        setStatehamber(false)
    }

  return (
    <>
    <div className="hero-navigation">
        <img srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&" className="img" alt="Description of the image" />
        <div className="hero-nav">
            <a href='/#home' className="home-link">Home</a>
            <a href='/#about' className="nav-link">About Us</a>
            <a href='/#services' className="nav-link">Services</a>
            <a href='/#portfolio' className="nav-link">Portfolio</a>
            <a href='/#team' className="nav-link">Team</a>
            <a href='/#contact' className="hero-contact">Contact Us</a>
        </div>

        <div className='hamburger'>
        {statehamber ? 
            <svg xmlns="http://www.w3.org/2000/svg" onClick={closeHamber} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hambericon">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        
            : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  onClick={actionhamber} className="hambericon">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
        }
        </div>
    </div>
    <div className='menuhamber' ref={handleblock}>
        <div className='closesection'>
            <img srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dc05f738d32039ecb198c34d7f0957180c42c4bfec693355f779aa8f1317a28?apiKey=5df38762550747f195b486091ee5df26&" className="img" alt="Description of the image" />
            <div className="centerclose"> 
                <svg xmlns="http://www.w3.org/2000/svg" onClick={closeHamber} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="iconhamberclose">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
     
        <ul className='listlinkhamburger'>
            <li><a href='/#home' >Home</a> </li>  
            <li><a href='/#about' >About Us</a> </li>     
            <li><a href='/#services' >Services</a>  </li>   
            <li><a href='/#portfolio' >Portfolio</a> </li>
            <li><a href='/#team' >Team</a> </li>
            <li><a href='/#contact'>Contact Us</a> </li>
        </ul>
 
    </div>
</>
    
  )
}
