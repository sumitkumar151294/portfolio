import React, { useEffect, useState } from 'react'
import image from '../assets/philip-martin-5aGUyCW_PJw-unsplash.png'
import MyProject from './MyProject'
import Contact from './Contact';
import Third from './Third';
import Testimonial from './Testimonial';
const First = () => {
  const [show, setShow] = useState(false);
  const [showHome, setHome] = useState(false);

  const [showContact, setShowContact] = useState(false);
  const [showClients, setShowClients] = useState(false)
  const [showTestimonials, setShowTestimonials] = useState(false)


  const handleProject = () => {
    setShow(true)
    setShowContact(false);
    setShowClients(false)
    setShowTestimonials(false);
    setHome(false);

  }
  const handleAbout = () => {
    setShow(false)
    setShowClients(false)
    setShowContact(true);
    setShowTestimonials(false);
    setHome(false)


  }
  const handleClients = () => {
    setShow(false)
    setShowContact(false);
    setShowClients(true);
    setShowTestimonials(false);
    setHome(false)


  }
  const handleTestimonials = () => {
    setShow(false)
    setShowContact(false);
    setShowClients(false);
    setShowTestimonials(true);
    setHome(false)


  }
  const handleHome = () => {
    setHome(false);
    setShow(false)
    setShowContact(false);
    setShowClients(false);
    setShowTestimonials(false);
  }

  useEffect(() => {
    window.scrollTo({
      top: 1000
      ,
      behavior: "smooth",
    })
  });
  return (
    <>
      <div style={{ width: "100%", height: 844, position: 'relative', background: '#0E0C0C' }}>
        <div style={{ width: 1645, left: 119, top: 234, position: 'absolute', justifyContent: 'center', alignItems: 'flex-start', gap: 18, display: 'inline-flex' }}>
          <div style={{ width: 611, height: 453, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            <div style={{ color: 'white', fontSize: 50, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Hello,</div>
            <div style={{ color: '#FCF8F8', fontSize: 70, fontFamily: 'Poppins', fontWeight: '800', wordWrap: 'break-word' }}>I am Kayne.</div>
            <div style={{ color: '#BC93CF', fontSize: 40, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>UI/UX Designer</div>
            <div style={{ width: 608, color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>What I like about photography is that it captures a moment<br />that is gone forever, that cannot  be reproduced. Anything<br />happens, I always carry camera with me. </div>
            <div style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 10, paddingBottom: 10, background: '#BC93CF', boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.25)', borderRadius: 20, border: '3px #FFFDFD solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div style={{ color: 'white', fontSize: 30, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Hire Me</div>
            </div>
          </div>
          <div style={{ width: 1016, height: 1016, background: 'white', borderRadius: 9999 }} />
        </div>
        <div className="Navbar" style={{ left: 119, top: 28, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 150, display: 'inline-flex' }}>
          <div className="Wanazlin" style={{ color: '#BC93CF', fontSize: 30, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>Kayne</div>
          <div className="MenuItems" style={{ justifyContent: 'center', alignItems: 'center', gap: 40, display: 'flex' }}>
            <div className="Home" style={{ color: '#FDF7F7', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', cursor: 'pointer' }} onClick={() => handleHome()}>Home</div>
            <div className="About" style={{ color: '#FCF8F8', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', cursor: 'pointer' }} onClick={() => handleAbout()}>About</div>
            <div className="Projects" style={{ color: '#FFF9F9', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', cursor: 'pointer' }} onClick={() => handleProject()}>Projects</div>
            <div className="Projects" style={{ color: '#FFF9F9', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', cursor: 'pointer' }} onClick={() => handleClients()}>My Clients</div>

            <div className="Projects" style={{ color: '#FFF9F9', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', cursor: 'pointer' }} onClick={() => handleTestimonials()}>Testimonials</div>

          </div>
          <div className="OutlinedButton" style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 20, border: '1px #BC93CF solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
            <div className="Resume" style={{ color: '#FEFAFA', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Resume</div>
          </div>
        </div>
        <div style={{ width: 147, height: 148, left: 81, top: 228, position: 'absolute', background: 'white', boxShadow: '200px 200px 200px ', borderRadius: 9999, filter: 'blur(200px)' }} />
        <div style={{ width: 508, height: 543, left: 874, top: 300.50, position: 'absolute' }}></div>
        <img style={{ width: 487.96, height: 790.18, left: 880, top: 66, position: 'absolute' }} src={image} />
      </div>
      {show && <MyProject />}
      {showContact && <Contact />}
      {showClients && <Third />}
      {showTestimonials && <Testimonial />}
      {showHome && <First />}
    </>

  )
}

export default First
