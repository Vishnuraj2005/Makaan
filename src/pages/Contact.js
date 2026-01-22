import p1 from './img/property-1.jpg';
import p2 from './img/property-2.jpg';
import p3 from './img/property-3.jpg';
import p4 from './img/property-4.jpg';
import p5 from './img/property-5.jpg';
import p6 from './img/property-6.jpg';
import contact from './img/call-to-action.jpg';

const Contact = () => {
  return(
    <>
    <div className="contact-page">

        <div className="contact-container">

          <div className="contact-img">
            <img src={contact} style={{ width: "550px" }} alt="contact" />
          </div>

          <div className="contact-text">
            <h1>Contact With Our Expert Team</h1>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
              sed stet lorem sit clita duo justo magna dolore erat amet
            </p>

            {/* BUTTONS BELOW TEXT */}
            <div className="contact-btn">
              <button type="button" className="btn btn-success me-3">
                <i className="fa-solid fa-phone me-2"></i>Make A Call
              </button>
              <button type="button" className="btn btn-primary">
                <i className="fa-solid fa-calendar me-2"></i>Get Appointment
              </button>
            </div>
          </div>

        </div>
      </div>

       {/* FOOTER */}

      <div className="footer">
        <div className="footer-container">

          {/* <!-- Get In Touch --> */}
          <div className="footer-box">
            <h3>Get In Touch</h3>
            <p><i className="fa fa-map-marker-alt"></i> 123 Street, New York, USA</p>
            <p><i className="fa fa-phone"></i> +012 345 67890</p>
            <p><i className="fa fa-envelope"></i> info@example.com</p>

            <div className="footer-social-icons">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>

          {/* <!-- Quick Links --> */}
          <div className="footer-box">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Condition</a></li>
            </ul>
          </div>

          {/* <!-- Photo Gallery --> */}

          <div className="footer-box">
            <h3>Photo Gallery</h3>
            <div className="gallery">
              <img src={p1}/>
                <img src={p2}/>
                  <img src={p3}/>
                    <img src={p4}/>
                      <img src={p5}/>
                        <img src={p6}/>
                        </div>
                      </div>

                      {/* <!-- Newsletter --> */}
                      <div className="footer-box">
                        <h3>Newsletter</h3>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>

                        <div className="newsletter">
                          <input type="email" placeholder="Your email" />
                          <button>SignUp</button>
                        </div>
                      </div>

                    </div>

                    {/* <!-- Bottom Footer --> */}
                    <div className="footer-bottom">
                      <p>© Your Site Name, All Right Reserved. Designed By <span>HTML Codex</span></p>

                      <div className="footer-links">
                        <a href="#">Home</a>
                        <a href="#">Cookies</a>
                        <a href="#">Help</a>
                        <a href="#">FAQs</a>
                      </div>
                    </div>
                  </div>
    </>
  )
};

export default Contact;
