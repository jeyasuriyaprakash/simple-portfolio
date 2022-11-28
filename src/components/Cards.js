import React from 'react'
import {Card,Button,ProgressBar} from 'react-bootstrap';
function Cards() {
  return (
    <div>
    <h1 className='text-center mt-5 mb-5' style={{ color: 'darkblue', fontSize:'bold'  }}>Skills</h1> 
    <div className='container col-12 '  style={{ display:'flex',justifyContent:'space-between'  }}>
       

       <Card className='col-sm-6 col-md-4' style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title><h3>Figma</h3></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <ProgressBar striped variant="success" animated now={85} style={{ height:'10px'}} />
        <br></br>
       
        <Button variant="primary">Projects Links</Button>
      </Card.Body>
      
    </Card>

    <Card className='col-sm-6 col-md-4' style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title><h3>React,Native</h3></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <ProgressBar striped variant="danger" animated now={45} style={{ height:'10px'}} />
        <br></br>

        <Button variant="primary">Projects Links</Button>
      </Card.Body>
    </Card>

    <Card className='col-sm-6 col-md-4' style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title><h3>Adobe Cloud suite</h3></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <ProgressBar striped variant="warning" animated now={70} style={{ height:'10px'}} />
        <br></br>

        <Button variant="primary">Projects Links</Button>
      </Card.Body>
    </Card>

    </div>

    {/* ------------------------------------- 2 row cards --------------------------- */}

    <br></br>


    <div className='container col-12'  style={{ display:'flex',justifyContent:'space-between'  }}>
       

       <Card className='col-sm-6 col-md-4' style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title><h3>Wordpress Design</h3></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <ProgressBar striped variant="success" animated now={85} style={{ height:'10px'}} />
        <br></br>
       
        <Button variant="primary">Projects Links</Button>
      </Card.Body>
      
    </Card>

    <Card className='col-sm-6 col-md-4' style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title><h3>DB Design</h3></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <ProgressBar striped variant="warning" animated now={65} style={{ height:'10px'}} />
        <br></br>

        <Button variant="primary">Projects Links</Button>
      </Card.Body>
    </Card>

    <Card className='col-sm-6 col-md-4' style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title><h3>AWS</h3></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <ProgressBar striped variant="danger" animated now={30} style={{ height:'10px'}} />
        <br></br>

        <Button variant="primary">Projects Links</Button>
      </Card.Body>
    </Card>

    </div>
    </div>
  )
}

export default Cards
