import React from "react";
import "./../Styles/home.css";
import { Container, Row, Col } from "reactstrap";
import SubTitle from "../Shared/SubTitle";
import HeroImg from "./../assets/images/Hero-image-1.jpg";
import HeroImg2 from "./../assets/images/Hero-image-2.jpg";
import HeroVideo from "./../assets/images/hero-video.mp4";
import SearchBar from "../Shared/SearchBar";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtile d-flex align-items-center">
                  <SubTitle subTitle={"Where Your Adventures Takes Flight"} />
                </div>
                <h1>
                  Where Travel Unlocks Unforgettable{" "}
                  <span className="highlight">Memories.</span>
                </h1>
                <p>
                  Discover amazing places and start new adventures with our
                  travel site. We make your adventures take flight. Our platform
                  is more than travel; it's about exploring, discovering, and
                  creating lasting memories. Find exciting spots, learn, and
                  cherish unforgettable moments. With us, your travels have no
                  limits. Get ready for incredible adventures with us!
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero-img-box">
                <img src={HeroImg} alt="USA" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero-img-box mt-4">
                <video src={HeroVideo} alt="China" controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero-img-box mt-5">
                <img src={HeroImg2} alt="Australia" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
