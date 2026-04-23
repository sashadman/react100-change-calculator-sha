import falafelLogo from "../assets/falafel-galaxy.jpg";
function Hero() {
  return (
    <div className="text-center mb-5 app-hero">
      <img
        src={falafelLogo}
        alt="Falafel Galaxy Logo"
        className="mb-4 hero-logo"
      />  
      <p className="hero-badge mb-3">Falafel Galaxy Change Calculator</p>
      <h1 className="display-4 font-weight-bold mb-3">Change Calculator</h1>
      <p className="lead hero-text mx-auto">
        Enter the amount due and amount received to instantly calculate the
        exact change in bills and coins.
      </p>
    </div>
  );
}

export default Hero;