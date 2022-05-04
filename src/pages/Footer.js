import React from "react";
import { Row, Col, Container} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
  return (
    <>
    <div style={{background: "#242424",
    padding: "45px 10px 20px"
    
    
    
    }}>
      <Container fluid>
          <Row md="1">
            <h2 style={{color: "gold", 
                   marginTop: "-40px", textAlign: "center"}}>Find us on Social Media!</h2>
          </Row>
        
        <Row md="4" sm="2" xs="1" style={{marginTop: "10px", textAlign: "center"}}>
          <Col>
            <h5 style={{color: "white"}}>Facebook</h5>
                <span style={{ marginLeft: "10px", }}>
                <SocialIcon url="https://www.facebook.com/Neville-Alumni-and-Friends-Association-310455590523" />
                </span>
          </Col>
          <Col>
          <h5 style={{color: "white"}}>Instagram</h5>
                <span style={{ marginLeft: "10px" }}>
                  <SocialIcon url="https://www.instagram.com/nevillehighschoolmonroe/" />
                </span>
          </Col>
          <Col>
          <h5 style={{color: "white"}}>Twitter</h5>
                <span style={{ marginLeft: "10px" }}>
                <SocialIcon url="https://twitter.com/highneville" />
                </span>
          </Col>
          <Col>
          <h5 style={{color: "white"}}>Youtube</h5>
                <span style={{ marginLeft: "10px" }}>
                  <SocialIcon url="https://www.youtube.com/channel/UC3gcyZzJzF1FHkoaCwTCs0g" />
                </span>
          </Col>
          </Row>
      </Container>
    </div>
</>


  );
}

export default Footer;