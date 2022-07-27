import "../Css/Sec8.css";
import logo from "../Css/logo.jpg";
const Sec8 = () => {
  return (
    <section className="Sec8">
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-xl-4 d-flex justify-content">
            <div className="container">
              <h3 className="opening">OPENING HOURS & CONTACT</h3>
              <div className="mon">
                <span>Mon – Fri 6 AM – 10 PM</span>
                <br />
                <span>Sat – Sun 8 AM – 7 PM</span>
              </div>
              <div className="mon">
                <span>1.800.555.6789</span>
                <br />
                <span>info@yourdomain.com</span>
              </div>
              <div className="mon">
                <span className="follow">FOLLOW US</span>
                <br />
                <span className=" icon">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-youtube"></i>
                  <i class="fa-brands fa-instagram"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="av col-xl-4 d-flex justify-content">
            <img className="image" src={logo} alt="logo" />
            <p className="mon">
              Make yours an active life. Discover new friends everyday. Get a
              life without limits. Get Active. Live Life.
            </p >
            <p className="mon copy">© Copyright 2012 - 2022 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
          </div>
          <div className="col-xl-4 d-flex justify-content">
            <div className="container">
            <h3 className="opening">AVADA SPORTS CENTER</h3>
            <img className="image" src={logo} alt="logo"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sec8;
