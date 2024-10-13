 import  "./HeroStyles.css";


function Hero(props) {

  return (
    <>
      <div className={props.cName}>
      <img alt="heroImg" src={props.heroImg} />
        <div className="hero-text">
            <h2>{props.title}</h2>
           <h3>{props.text}</h3> 
            <a href={props.url}className={props.btnClass}>
              {props.button}
            </a>
        </div>
      </div>
    </> 
  );
}

export default Hero;
