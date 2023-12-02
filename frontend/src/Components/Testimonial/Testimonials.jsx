import React from "react";
import Slider from "react-slick";
import ava01 from "./../../assets/images/ava-1.jpg";
import ava02 from "./../../assets/images/ava-2.jpg";
import ava03 from "./../../assets/images/ava-3.jpg";
import ava04 from "./../../assets/images/ava-4.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 556,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          This travel platform made planning a breeze! With an intuitive
          interface, finding great deals on flights and accommodations was
          effortless. Responsive customer support ensured a smooth booking
          experience.{" "}
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Sophia Johnson</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Booking here was stress-free! Everything from flights to stays was
          seamlessly managed. Diverse options let me tailor my trip perfectly.
          Competitive prices and reliable service—my go-to for future travels.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Jesnnifer Mclntosh</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Effortless planning, thanks to this service! Simple interface, great
          deals on flights and hotels. Attentive updates made for a worry-free
          journey. Highly endorse for efficiency and customer care!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Emily Clark</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Effortless planning, thanks to this service! Simple interface, great
          deals on flights and hotels. Attentive updates made for a worry-free
          journey. Highly endorse for efficiency and customer care!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">David Martinez</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
