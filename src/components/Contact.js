import React from 'react'

const Contact = () => {

  return (
    <div style={{ width: '100%', height: 844, position: 'relative', background: '#0E0C0C' }}>
      <div style={{ color: 'white', fontSize: 40, fontFamily: 'Poppins', fontWeight: '800', }}>Contact Us</div>
      <div style={{ marginTop: 90, display: "flex", flexDirection: "row", justifyContent: "space-around" }}>


        <div className="skills-container" style={{
          color: 'white', textAlign: "center",
          width: '20%',
          border: "1px solid chartreuse",
          marginTop: "15px",
          opacity: 0,
          padding:"20px",
          transform: 'translateY(-20px)',
          fontSize: 20, fontFamily: 'Poppins', fontWeight: '800',
        }}>@Instagram</div>
        <div className="skills-container" style={{
          color: 'white', textAlign: "center",
          width: '20%',
          border: "1px solid chartreuse",
          marginTop: "15px",
          opacity: 0,
          padding:"20px",

          transform: 'translateY(-20px)',
          fontSize: 20, fontFamily: 'Poppins', fontWeight: '800',
        }}>Contact Number</div>
        <div className="skills-container" style={{
          color: 'white', textAlign: "center",
          width: '20%',
          border: "1px solid chartreuse",
          marginTop: "15px",
          opacity: 0,
          padding:"20px",

          transform: 'translateY(-20px)',
          fontSize: 20, fontFamily: 'Poppins', fontWeight: '800',
        }}>Gmail</div>

      </div>
      <div  style={{ marginTop: 90, display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
        <div  className="skills-container" style={{
          color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '800', 
          textAlign: "center",
          width: '20%',
          border: "1px solid cyan",
          marginTop: "15px",
          opacity: 0,
          padding:"20px",
          transform: 'translateY(-20px)',

        }}>Ankit2pal</div>
        <div className="skills-container" style={{
          textAlign: "center",
          width: '20%',
          border: "1px solid cyan",
          opacity: 0,
          transform: 'translateY(-20px)',
          padding:"20px",

          marginTop: "15px", color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '800',
        }}>8218016313</div>
        <div className="skills-container" style={{
          textAlign: "center",
          width: '20%',
          border: "1px solid cyan",
          opacity: 0,
          transform: 'translateY(-20px)',
          padding:"20px",

          marginTop: "15px", color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '800',
        }}>apal3241@gmail.com</div>



      </div>

    </div>
  )
}

export default Contact
