import React from "react";
import "./../Styles/home.css";
import { Container, Row, Col } from "reactstrap";
import SubTitle from "../Shared/SubTitle";
import HeroImg from "./../assets/images/Hero-image-1.jpg";
import HeroImg2 from "./../assets/images/Hero-image-2.jpg";
import HeroVideo from "./../assets/images/hero-video.mp4";
import ExperienceImg from "./../assets/images/experience.png" 
import SearchBar from "../Shared/SearchBar";
import ServiceList from "../Services/ServiceList";
import FeaturedTourList from "../Components/FeaturedTour/FeaturedTourList";
import MasonryImagesGallery from "../Components/ImagesGallery/MasonryImagesgallery";
import Testimonials from "../Components/Testimonial/Testimonials";
import Newslatter from "../Shared/Newslatter";

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

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">Our Service</h5>
              <h2 className="services__title">We Offer the Best Service</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <SubTitle subTitle={"Explore"} />
              <h2 className="feature__tour-title">Our Feature Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <SubTitle subTitle={"Experience"} />

                <h2>
                  With our expertise, expect nothing
                  <br /> but the best from us
                </h2>
                <p>
                  we're committed to delivering excellence in every aspect of
                  your journey.
                  <br /> Trust us to make your travel dreams a reality.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>150+</span>
                  <h6>Successful trips</h6>
                </div>
                <div className="counter__box">
                  <span>10+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>3</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={ExperienceImg} alt="Experience Image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <SubTitle subTitle={"Gallery"} />
              <h2 className="gallery__title">Visit our customer tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <SubTitle subTitle={'Testimonials'}  />
              <h2 className="testimonial__title">Customer reviews about us</h2>
            </Col>

            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      <Newslatter />
    </>
  );
};

export default Home;
