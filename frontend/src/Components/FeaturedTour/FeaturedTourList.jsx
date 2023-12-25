import React,{useState,useEffect} from "react";
import TourCard from "../../Shared/TourCard";
// import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";

const FeaturedTourList = () => {
  const [user,setUser] = useState(() => {
    const localuser = localStorage.getItem('user');
    return localuser ? JSON.parse(localuser) : null 
  });
  // console.log(user)

  const [tourData, setTourData] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/api/tour", {
      method: "GET",
     
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data);
        setTourData(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  
  // console.log(user)
  return (
    <>
      {tourData ?.map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard tour={tour} user={user} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;
