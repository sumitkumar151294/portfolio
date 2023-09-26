import React from 'react'
import image1 from '../assets/Screenshot 2023-09-20 121236.png'
import image2 from '../assets/WhatsApp Image 2023-08-09 at 15.25.48.jpg'
import image3 from '../assets/Screenshot 2023-09-20 124649.png'
import image4 from '../assets/Screenshot 2023-09-20 125404.png'




const MyProject = () => {
  return (

    <div style={{ width: "100%", height: 3792, background: '#0E0C0C' }}>
      <div style={{ height: 67, left: 500, top: 89, color: 'white', fontSize: 40, fontFamily: 'Poppins', fontWeight: '800' }}>My Projects</div>
      <div style={{ height: 67, color: '#BC93CF', fontSize: 30, fontFamily: 'Poppins', fontWeight: '500', }}>jodiBanav Matrimony </div>

      <img style={{ height: 400, justifyItems: 'center' }} src={image1} />
      <div style={{ marginTop: "4%" }}>
        <div style={{
          height: 67, color: '#BC93CF',
          fontSize: 30, fontFamily: 'Poppins', fontWeight: '500',
        }}>Habit yoga </div>

        <img style={{ height: "20%" }} src={image2} />
      </div>
      <div style={{ marginTop: "4%" }}>
        <div style={{
          height: 67, color: '#BC93CF',
          fontSize: 30, fontFamily: 'Poppins', fontWeight: '500',
        }}>Agarwal services(Property buy and sell) </div>

        <img style={{ height: 400, justifyItems: 'center' }} src={image3} />
      </div>
      <div style={{ marginTop: "4%" }}>
        <div style={{
          height: 67, color: '#BC93CF',
          fontSize: 30, fontFamily: 'Poppins', fontWeight: '500',
        }}>Neo Billing </div>

        <img style={{ height: 400, justifyItems: 'center' }} src={image4} />
      </div>
    </div>
  )
}

export default MyProject
