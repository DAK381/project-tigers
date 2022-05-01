import React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import {
  Box,
  Container,
  Row,
  Column,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "gold", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Find us on social media!
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Facebook</Heading>
                <span style={{ marginLeft: "20px" }}>
                <SocialIcon url="https://www.facebook.com/Neville-Alumni-and-Friends-Association-310455590523" />
                </span>
          </Column>
          <Column>
            <Heading>Instagram</Heading>
                <span style={{ marginLeft: "20px" }}>
                  <SocialIcon url="https://www.instagram.com/nevillehighschoolmonroe/" />
                </span>
          </Column>
          <Column>
            <Heading>Twitter</Heading>
                <span style={{ marginLeft: "20px" }}>
                <SocialIcon url="https://twitter.com/highneville" />
                </span>
          </Column>
          <Column>
            <Heading>Youtube</Heading>
                <span style={{ marginLeft: "20px" }}>
                  <SocialIcon url="https://www.youtube.com/channel/UC3gcyZzJzF1FHkoaCwTCs0g" />
                </span>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;