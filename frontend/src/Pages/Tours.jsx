import React from 'react'
import CommonSection from '../Shared/CommonSection'
import '../Styles/tour.css'
import tourData from '../assets/data/tours'
import TourCard from '../Shared/TourCard'
import SearchBar from '../Shared/SearchBar'
import NewsLetter from '../Shared/Newslatter'
import { Container, Row } from 'reactstrap'

const Tours = () => {
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
    </>
  )
}

export default Tours
