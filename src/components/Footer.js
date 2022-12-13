import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/whatsapp.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/anumol-k-mani-57620381/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/anukm32">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://wa.me/971563215216" target="blank">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
