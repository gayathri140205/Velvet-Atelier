import cake1 from "../Assets/1.jpg"
import cake2 from "../Assets/2.jpg"
import cake3 from "../Assets/7.webp"
import cake4 from "../Assets/6.jpg"
import cake5 from "../Assets/tc9.jpg" 
import cake6 from "../Assets/tc6.jpg"
import "./DestinationStyles.css"
import DestinationData from "./DestinationData"

const Destination =() =>{
    return(
     <div  className="destination">
     <h1>Our Signature Confections</h1>
     <p>With perfected recipes and irresistible flavors</p>
     <DestinationData
  className="first-des"
  heading=" Red Velvet  Indulgence"
  text="Our Red Velvet Cupcakes and Birthday Cakes are crowd-pleasers, loved for their rich, velvety texture and vibrant color. Customers can't get enough of the smooth cream cheese frosting that perfectly complements these indulgent treats."
  img1={cake1}
  img2={cake2}
/>
<DestinationData
  className="first-des-reverse"
  heading="Lotus Biscoff Macaron Bliss "
  text="Our Lotus Biscoff Macarons are a unique blend of crunchy Biscoff biscuits and soft, chewy macaron shells. The delightful caramelized flavor of the Biscoff filling makes these macarons irresistible to anyone with a sweet tooth."
  img1={cake5}
  img2={cake6}
/>
<DestinationData
  className="first-des"
  heading="Nutty Walnut Enchantment"
  text="Our Walnut Cupcakes and Birthday Cakes stand out for their unique flavor profile. The perfect blend of crunchy walnuts and moist cake makes these desserts a top choice among those seeking a deliciously nutty treat."
  img1={cake3}
  img2={cake4}
/>


     </div>
    )
}
export default Destination;