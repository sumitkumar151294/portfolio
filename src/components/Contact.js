import React from 'react'

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [budget, setBudget] = React.useState('');

  const handleSubmit = () => {
    const data = {
      name, email, phoneNumber, message, budget
    }
    console.log(data)
  }
  return (
    <div style={{ width: 1495, height: 844, position: 'relative', background: '#0E0C0C' }}>
      <div style={{ width: 236, height: 67, left: 92, top: 132, position: 'absolute', color: 'white', fontSize: 40, fontFamily: 'Poppins', fontWeight: '800', wordWrap: 'break-word' }}>Contact Us</div>
      <div style={{ width: 236, height: 67, left: 660, top: 132, position: 'absolute', color: 'white', fontSize: 40, fontFamily: 'Poppins', fontWeight: '800', wordWrap: 'break-word' }}>Drop A Line</div>
      <div style={{ width: 436, left: 92, top: 218, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </div>
      <div style={{ width: 18.01, height: 18.04, left: 92, top: 349, position: 'absolute', background: 'white' }}></div>
      <div style={{ width: 19.95, height: 19.46, left: 90, top: 412, position: 'absolute', background: 'white' }}></div>
      <div style={{ width: 24, height: 24, paddingTop: 4.01, paddingBottom: 3, paddingLeft: 1.54, paddingRight: 1.54, left: 90, top: 476, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
        <div style={{ width: 20.92, height: 16.99, background: 'white' }}></div>
      </div>
      <div style={{ width: 186, left: 110, top: 343, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>lorem_ipsum</div>
      <div style={{ width: 186, left: 110, top: 412, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>lorem_ipsum</div>
      <div style={{ width: 186, left: 110, top: 473, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>@Lorem ipsum</div>
      <div style={{ width: 348, height: 107, left: 660, top: 242, position: 'absolute', background: 'rgba(217, 217, 217, 0.24)', borderRadius: 20, border: '1px white solid' }} />
      <div style={{ width: 348, height: 107, left: 1057, top: 240, position: 'absolute', background: 'rgba(217, 217, 217, 0.24)', borderRadius: 20, border: '1px white solid' }} />
      <div style={{ width: 348, height: 107, left: 660, top: 390, position: 'absolute', background: 'rgba(255, 255, 255, 0.24)', borderRadius: 20, border: '1px #FFF8F8 solid' }} />
      <div style={{ width: 745, height: 157, left: 660, top: 540, position: 'absolute', background: 'rgba(217, 217, 217, 0.24)', borderRadius: 20, border: '1px white solid' }} />
      <div style={{ width: 348, height: 107, left: 1057, top: 396, position: 'absolute', background: 'rgba(217, 217, 217, 0.24)', borderRadius: 20, border: '1px white solid' }} />
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' style={{ width: 186, left: 730, top: 278, position: 'absolute', textAlign: 'center', color: 'white', background: 'rgba(217, 217, 217, 0.24)', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' style={{ width: 186, left: 1100, top: 278, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', background: 'rgba(217, 217, 217, 0.24)' }} />
      <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' style={{ width: 186, left: 730, top: 427, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', background: 'rgba(217, 217, 217, 0.24)' }} />
      <input value={budget} onChange={(e) => setBudget(e.target.value)} placeholder='Budget' style={{ width: 186, left: 1100, top: 435, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', background: 'rgba(217, 217, 217, 0.24)' }} />
      <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' style={{ width: 186, left: 730, top: 576, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', background: 'rgba(217, 217, 217, 0.24)' }} />
      <div style={{ width: 226, height: 70, left: 675, top: 738, position: 'absolute', background: '#E91A1A' }} />
      <div className="Submit" style={{ width: 186, left: 695, top: 740, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 36, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }} onClick={() => handleSubmit()}>Submit</div>
    </div>
  )
}

export default Contact
