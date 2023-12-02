import React from "react";
import "./Newsletter.css";
import { Container, Row, Col } from "reactstrap";
import Newsimg from "./../assets/images/newsletter.png";

const Newslatter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get the usefull travel information.</h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Enter your Email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Unlock your next adventure with exclusive deals and seamless
                booking experiences - subscribe now for our newsletter and start
                planning stress-free travels today!
              </p>
            </div>
          </Col>

          <Col lg="3">
            <div className="newsletter__img">
              <img src={Newsimg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newslatter;
