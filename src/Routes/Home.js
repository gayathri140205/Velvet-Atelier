import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Homeimg from "../Assets/b7.jpeg";
import Navbar from "../Components/Navbar";
import Tcard from "../Components/Trip";
import FrontPage from "../Components/FrontPage";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
      cName="hero"
      heroImg={Homeimg}
      title="Discover Delight in Every Bite."
      text="Pick Your Perfect Dessert"      
      button="Order Now"
      url="/"
      btnClass="show"/>
      <Destination/>
      <FrontPage/>
      <Tcard/>
      <Footer/>
    </>
  );
}

export default Home;