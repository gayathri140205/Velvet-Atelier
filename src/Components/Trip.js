import "./TripStyle.css"
import TripData from "./TripData";
import Trip1 from "../Assets/tc12.jpeg";
import Trip2 from "../Assets/37.jpeg";
import Trip3 from "../Assets/tc13.jpeg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent  Orders</h1>
      <p>Check out some of our recent orders that delighted our customers</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Pastel Dream Macarons"
          text="Pastel Dream Macarons are a delicate  of sweet confections that adds a touch of whimsy in every bite."
        />
       <TripData
  image={Trip2}
  heading="Whimsical Velvet Rolls"
  text="Our Whimsical Velvet Rolls feature delightful sweets, expertly crafted to create a visually stunning experience."
/>


        <TripData
          image={Trip3}
          heading="Chocolate  Medley Treats"
          text="Our Medley Treats are a celebration of flavors, showcasing a variety of decadent choco creations. "

        />
      </div>
    </div>
  );
}

export default Trip;
