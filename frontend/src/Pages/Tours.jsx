import React from "react";
import CommonSection from "../Shared/CommonSection";
import "../Styles/tour.css";
import tourData from "../assets/data/tours";
import TourCard from "../Shared/TourCard";
import SearchBar from "../Shared/SearchBar";
import NewsLetter from "../Shared/Newslatter";
import { Col, Container, Row } from "reactstrap";
import { useEffect, useState } from "react";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const [user,setUser] = useState(() => {
    const localuser = localStorage.getItem('user');
   return localuser ? JSON.parse(localuser) : null 
  });
  // console.log(user)

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);

  return (
    <>
      <CommonSection title={'"Discover Your Adventure: All Tours"'} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {tourData?.map(tour => (
              <Col lg="3" className="mb-4" key={tour.id}>
                <TourCard tour={tour} user={user} />
              </Col>
            ))}

            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4  gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active__page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default Tours;
