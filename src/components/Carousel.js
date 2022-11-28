import React from 'react'

import Card from 'react-bootstrap/Card';

function ImgOverlayExample() {
  return (
    <Card className=" text-white text-center  " style={{ border: 'none' }}>
      <Card.Img src="https://media.istockphoto.com/id/1249041775/photo/photo-depicting-the-person-who-focuses-on-the-target.jpg?b=1&s=170667a&w=0&k=20&c=dtvm2BKp5T1-GR0qEO1ke21SnJ8eLkPPLfId5-rzrHs=" height={600} style={{objectFit:'cover'}} alt="Card image" />
      <Card.ImgOverlay>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
    <Card.Title ><h1>UI/UX and Frontend Developer</h1></Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <button className='btn btn-primary'> About Me</button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;





