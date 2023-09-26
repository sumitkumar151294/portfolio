import React, { useEffect, useState } from 'react'
import image from '../assets/WhatsApp Image 2023-09-17 at 12.07.30.jpg'
import MyProject from './MyProject'
import Contact from './Contact';
import Third from './Third';
import '../App.css';
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

  const handleHome = () => {
    setHome(false);
    setShow(false)
    setShowContact(false);
    setShowClients(false);
    setShowTestimonials(false);
  }
  const

    handleResume
      = (
      ) => {

        // Assuming pdfUrl is the URL of your PDF file


        const
          pdfUrl =
            'path_to_your_pdf_file.pdf'
          ;


        const
          link =
            document.createElement
              ('a');
        link.href = pdfUrl;
        link.target = '_blank';
        link.download = 'resume.pdf';

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
      };

  useEffect(() => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",

    })

  });
  return (
    <>
    
      <div style={{ width: "100%", height: 800, position: 'relative', background: '#0E0C0C' }}>
        <div style={{ left: 119, top: 234, position: 'absolute', justifyContent: 'center', alignItems: 'flex-start', gap: 18, display: 'inline-flex' }}>

          <div style={{ height: 453, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            <div className="skills-container" style={{
              color: 'white', fontSize: 50, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', opacity: 0, /* Set initial opacity to 0 for animation */
              transform: 'translateY(-20px)'
            }}>Hello,</div>
            <div className="skills-container" style={{
              color: '#FCF8F8', fontSize: 70, fontFamily: 'Poppins', fontWeight: '800', wordWrap: 'break-word', opacity: 0, /* Set initial opacity to 0 for animation */
              transform: 'translateY(-20px)'
            }}>I am Ankit Pal.</div>
            <div className="skills-container" style={{
              color: '#BC93CF', fontSize: 40, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', opacity: 0, /* Set initial opacity to 0 for animation */
              transform: 'translateY(-20px)'
            }}>Front-End-Developer</div>
            <div className="skills-container" style={{
              color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', marginTop: 40, opacity: 0, /* Set initial opacity to 0 for animation */
              transform: 'translateY(-20px)'
            }}>A front-end developer in React JS with having 2 years of experience specializes  <br />in creating user  interfaces using the React JavaScript library,ensuring seamless,<br />  interactive, and responsive web applications for optimal user experience. </div>
          </div>
          <div style={{ background: 'white' }} />
        </div>
        <div className="Navbar" style={{ left: 180, top: 28, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 150, display: 'inline-flex' }}>
          <div className="Wanazlin" style={{ color: '#BC93CF', fontSize: 30, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>AP</div>
          <div className="MenuItems" style={{ justifyContent: 'center', alignItems: 'center', gap: 40, display: 'flex' }}>
            <div className="Home" style={{ color: '#FDF7F7', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', cursor: 'pointer' }} onClick={() => handleHome()}>Home</div>
            <div className="Projects" style={{ color: '#FFF9F9', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', cursor: 'pointer' }} onClick={() => handleProject()}> My Project</div>
            <div className="Projects" style={{ color: '#FFF9F9', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', cursor: 'pointer' }} onClick={() => handleClients()}>Skills</div>
            <div className="About" style={{ color: '#FCF8F8', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', cursor: 'pointer' }} onClick={() => handleAbout()}> Contact us</div>


          </div>
          <div className="OutlinedButton" style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 20, border: '1px #BC93CF solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
            <div className="Resume" style={{ color: '#FEFAFA', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }} onClick={() => handleResume()}>Resume</div>
          </div>
        </div>
        <div style={{ height: 148, left: 81, top: 228, position: 'absolute', background: 'white', boxShadow: '200px 200px 200px ', borderRadius: 9999, filter: 'blur(200px)' }} />
        <div style={{ height: 543, left: 874, top: 300.50, position: 'absolute' }}></div>
        <>
          {/* <img style={{ width: 487.96, height: 790.18, left: 880, top: 66, position: 'absolute' }} src={image}/> */}
        </></div>
      {show && <MyProject />}
      {showContact && <Contact />}
      {showClients && <Third />}
      {showHome && <First />}
    </>

  )
}

export default First
