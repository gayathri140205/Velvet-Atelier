import Cake1 from "../Assets/c1.jpg"; 
import Cake2 from "../Assets/c2.jpg"; 
import Cake4 from "../Assets/c4.jpg"; 
import Cake5 from "../Assets/c5.jpg"; 
import Cake6 from "../Assets/c6.jpg"; 
import Cake7 from "../Assets/c7.jpg"; 
import Cake8 from "../Assets/c8.jpg"; 
import Cake9 from "../Assets/c9.jpg"; 
import Cake11 from "../Assets/c11.jpg"; 
import Cake12 from "../Assets/c12.jpg"; 
import Cake13 from "../Assets/c13.jpg"; 
import Cake14 from "../Assets/c14.jpg"; 
import "./FrontPageStyles.css";
import FrontPageData from "./FrontPageData.js";

const FrontPage = () => {
  const cakeData = [
    { img: Cake1, name: "Crunchy Whirl Dream Pastry Croissants" },
    { img: Cake2, name: "Whispering Emerald  Bliss Macaron" },
    { img: Cake4, name: "Berry Paradise Velvet  Macaron Cake" },
    { img: Cake5, name: "Golden Whirl Meringue Cookie Tart" },
    { img: Cake6, name: " Salt Indulgent Caramel Macaron Treat" },
    { img: Cake7, name: "Tsar’s Majestic Rose Gold Macaron" },
    { img: Cake8, name: "Golden Nectar Delightful Mini Cakes" },
    { img: Cake9, name: "Elegant Pistachio Cheesecake Popsicles" },
    { img: Cake11, name: "Delicate Madeleines of French Bliss" },
    { img: Cake12, name: "Celestial Bliss  Sweet Moonlight Cake" },
    { img: Cake13, name: " Hazelnut Gourmet Chocolate Popsicles" },
    { img: Cake14, name: "Golden  Delight Walnut Carrot  Cake" },

  ];

  return (
    <div className="FrontPage">
      <h1>Exquisite Dessert Collection</h1>
      <p>Discover our handcrafted delights </p>
      <div className="cake-grid">
        {cakeData.map((cake, index) => (
          <FrontPageData key={index} img={cake.img} cakeName={cake.name} />
        ))}
      </div>
    </div>
  );
};

export default FrontPage;
