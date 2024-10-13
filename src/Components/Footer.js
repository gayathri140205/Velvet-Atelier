/* eslint-disable react/jsx-no-target-blank */
import "./FooterStyle.css";


const Footer = () =>{
 
    return (
      <div className="Footer">
      <div className="top">
        <div>
            <h1>Velvet Atelier</h1>
            <p>Indulge in our delicious delights</p>
        </div>
        <div>
          <a href="https://www.facebook.com" target="_blank">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.whatsapp.com" target="_blank">
            <i className="fab fa-whatsapp-square"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <i className="fab fa-instagram-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Our Offerings</h4>
          <ol>
            <li>Macarons</li>
            <li>Cakes</li>
            <li>Pastries</li>
            <li>Custom Orders</li>
          </ol>
        </div>
        <div>
          <h4>About Us</h4>
          <ol>
            <li>Our Story</li>
            <li>Meet the Team</li>
            <li>Testimonials</li>
            <li>Blog</li>
          </ol>
        </div>
        <div>
          <h4>Policies</h4>
          <ol>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>FAQs</li>
          </ol>
        </div>
        <div>
          <h4>Connect With Us</h4>
          <ol>
            <li>Join Our Community</li>
            <li>Social Media</li>
            <li>Newsletter Signup</li>
            <li>Events & Workshops</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Footer;