import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import c1 from './img/carousel-1.jpg';
import c2 from './img/carousel-2.jpg';
import i1 from './img/icon-apartment.png';
import i2 from './img/icon-building.png';
import i3 from './img/icon-condominium.png';
import i4 from './img/icon-deal.png';
import i5 from './img/icon-house.png';
import i6 from './img/icon-housing.png';
import i7 from './img/icon-luxury.png';
import i8 from './img/icon-neighborhood.png';
import i9 from './img/icon-search.png';
import i10 from './img/icon-villa.png';
import about from './img/about.jpg';
import p1 from './img/property-1.jpg';
import p2 from './img/property-2.jpg';
import p3 from './img/property-3.jpg';
import p4 from './img/property-4.jpg';
import p5 from './img/property-5.jpg';
import p6 from './img/property-6.jpg';
import team1 from './img/team-1.jpg';
import team2 from './img/team-2.jpg';
import team3 from './img/team-3.jpg';
import team4 from './img/team-4.jpg';
import contact from './img/call-to-action.jpg'
import test1 from './img/testimonial-1.jpg';
import test2 from './img/testimonial-2.jpg';
import test3 from './img/testimonial-3.jpg';
import test4 from './img/testimonial-4.jpg';
const Home = () => {
  return (
    <>
      <div className="total-home">
        <div className="head-cont">
          <h1>Find A <span>Perfect Home</span> To Live With Your Family</h1>
          <p>lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button type="button" class="btn btn-success">Get Started</button>
        </div>

        <div className="head-img">
          <img src={c1} alt="headerimage" style={{ width: '600px' }} />
          <img src={c2} alt="headerimage" style={{ width: '600px' }} />
        </div>
      </div>

      {/* Search bar */}

      <div className="search-bar" style={{ padding: '20px' }}>
        <nav className="navbar navbar-light bg-success" style={{ padding: '20px' }}>
          <div className="container-fluid">
            <form
              className="search-form d-flex align-items-center justify-content-evenly w-100"
              role="search"
            >

              <input
                className="form-control"
                style={{ maxWidth: "250px", padding: '10px' }}
                type="search"
                placeholder="Search keyword"
              />

              <div className="dropdown">
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" style={{ padding: '10px' }}>
                  Property Type
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item">Luxury Resort</button></li>
                  <li><button className="dropdown-item">Premium Resort</button></li>
                </ul>
              </div>

              <div className="dropdown" >
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" style={{ padding: '10px' }}>
                  Location
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item">Mumbai</button></li>
                  <li><button className="dropdown-item">Goa</button></li>
                </ul>
              </div>

              <button className="btn btn-outline-light" type="submit" style={{ padding: '10px' }}>
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>

      {/* property types */}

      <div className="property-types" id='p-type'>

        <div className='pro-cont'>
          <h1 style={{ color: 'darkblue' }}>Property Types</h1>
          <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>

        <div className='property'>

          <div className='property-box'>
            <img src={i1}></img>
            <h5>Apartment</h5>
            <p>132 Property</p>
          </div>

          <div className='property-box'>
            <img src={i2}></img>
            <h5>Building</h5>
            <p>132 Property</p>
          </div>

          <div className='property-box'>
            <img src={i3}></img>
            <h5>Townhouse</h5>
            <p>132 Property</p>
          </div>

          <div className='property-box'>
            <img src={i9}></img>
            <h5>Home</h5>
            <p>132 Property</p>
          </div>

          <div className='property-box'>
            <img src={i5}></img>
            <h5>Shop</h5>
            <p>132 Property</p>
          </div>

          <div className='property-box'>
            <img src={i8}></img>
            <h5>Garage</h5>
            <p>132 Property</p>
          </div>

          <div className='property-box'>
            <img src={i6}></img>
            <h5>Office</h5>
            <p>132 Property</p>
          </div>

          <div className='property-box'>
            <img src={i7}></img>
            <h5>Villa</h5>
            <p>132 Property</p>
          </div>

        </div>

      </div>

      {/* PLACE TO FIND */}

      <div className='about' >

        <div className='image-frame'>
          <img src={about}></img>
        </div>
        <div className='text-frame'>
          <h1>#1 Place To Find The Perfect Property</h1>

          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

          <ul>
            <li>Tempor erat elitr rebum at clita</li>
            <li>Aliqu diam amet diam et eos</li>
            <li>Clita duo justo magna dolore erat amet</li>
          </ul>

          <button type="button" class="btn btn-success">Read more</button>
        </div>

      </div>

      {/* Property listing */}

      <div className='Property listing' style={{ paddingBottom: '50px' }} id='p-list'>

        <div className='property-list-head'>

          <div className='pro-list-cont'>
            <h1 style={{ color: 'darkblue', marginBottom: '5px', fontWeight: 'bold', fontSize: '46px' }}>Property listing</h1>
            <p style={{ textWrap: 'wrap' }}>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
          </div>

          <div className='pro-list-btns'>
            <button className='pro-btn-active'>Featured</button>
            <br></br>

            <button className='pro-btn'>For Sale</button>
            <br></br>

            <button className='pro-btn'>For Rent</button>
          </div>

        </div>

        <div className="property-list-body bg-light">

          <div className="container mt-5">
            <div className="row g-4">

              {/* CARD 1 */}
              <div className="col-md-4">
                <div className="card property-card">
                  <div className="property-img">
                    <img src={p1} className="img-fluid" alt="House" />
                    <span className="badge-sell">For Sell</span>
                    <span className="badge-type">Apartment</span>
                  </div>

                  <div className="card-body mt-3">
                    <div className="price">$12,345</div>
                    <h5 className="fw-bold mt-2">Golden Urban House For Sell</h5>
                    <p className="text-muted mb-3">
                      <i className="bi bi-geo-alt-fill text-success"></i>
                      123 Street, New York, USA
                    </p>

                    <hr />

                    <div className="row text-center features">
                      <div className="col-4">
                        <i className="bi bi-arrows-fullscreen"></i><br />
                        1000 Sqft
                      </div>
                      <div className="col-4">
                        <i className="fa-solid fa-bed"></i><br />
                        3 Bed
                      </div>
                      <div className="col-4">
                        <i className="bi bi-droplet-fill"></i><br />
                        2 Bath
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-md-4">
                <div className="card property-card">
                  <div className="property-img">
                    <img src={p2} className="img-fluid" alt="Villa" />
                    <span className="badge-sell">For Rent</span>
                    <span className="badge-type">Villa</span>
                  </div>

                  <div className="card-body mt-3">
                    <div className="price">$12,345</div>
                    <h5 className="fw-bold mt-2">Golden Urban House For Rent</h5>
                    <p className="text-muted mb-3">
                      <i className="bi bi-geo-alt-fill text-success"></i>
                      123 Street, New York, USA
                    </p>

                    <hr />

                    <div className="row text-center features">
                      <div className="col-4">
                        <i className="bi bi-arrows-fullscreen"></i><br />
                        1000 Sqft
                      </div>
                      <div className="col-4">
                        <i className="fa-solid fa-bed"></i><br />
                        3 Bed
                      </div>
                      <div className="col-4">
                        <i className="bi bi-droplet-fill"></i><br />
                        2 Bath
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="col-md-4">
                <div className="card property-card">
                  <div className="property-img">
                    <img src={p3} className="img-fluid" alt="Office" />
                    <span className="badge-sell">For Sell</span>
                    <span className="badge-type">Office</span>
                  </div>

                  <div className="card-body mt-3">
                    <div className="price">$12,345</div>
                    <h5 className="fw-bold mt-2">Golden Urban Office</h5>
                    <p className="text-muted mb-3">
                      <i className="bi bi-geo-alt-fill text-success"></i>
                      123 Street, New York, USA
                    </p>

                    <hr />

                    <div className="row text-center features">
                      <div className="col-4">
                        <i className="bi bi-arrows-fullscreen"></i><br />
                        1000 Sqft
                      </div>
                      <div className="col-4">
                        <i className="fa-solid fa-bed"></i><br />
                        3 Bed
                      </div>
                      <div className="col-4">
                        <i className="bi bi-droplet-fill"></i><br />
                        2 Bath
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="col-md-4">
                <div className="card property-card">
                  <div className="property-img">
                    <img src={p4} className="img-fluid" alt="Building" />
                    <span className="badge-sell">For Sell</span>
                    <span className="badge-type">Building</span>
                  </div>

                  <div className="card-body mt-3">
                    <div className="price">$12,345</div>
                    <h5 className="fw-bold mt-2">Commercial Building</h5>
                    <p className="text-muted mb-3">
                      <i className="bi bi-geo-alt-fill text-success"></i>
                      123 Street, New York, USA
                    </p>

                    <hr />

                    <div className="row text-center features">
                      <div className="col-4">
                        <i className="bi bi-arrows-fullscreen"></i><br />
                        1000 Sqft
                      </div>
                      <div className="col-4">
                        <i className="fa-solid fa-bed"></i><br />
                        3 Bed
                      </div>
                      <div className="col-4">
                        <i className="bi bi-droplet-fill"></i><br />
                        2 Bath
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 5 */}
              <div className="col-md-4">
                <div className="card property-card">
                  <div className="property-img">
                    <img src={p5} className="img-fluid" alt="Office" />
                    <span className="badge-sell">For Sell</span>
                    <span className="badge-type">Office</span>
                  </div>

                  <div className="card-body mt-3">
                    <div className="price">$12,345</div>
                    <h5 className="fw-bold mt-2">Office Space</h5>
                    <p className="text-muted mb-3">
                      <i className="bi bi-geo-alt-fill text-success"></i>
                      123 Street, New York, USA
                    </p>

                    <hr />
                    <div className="row text-center features">
                      <div className="col-4">
                        <i className="bi bi-arrows-fullscreen"></i><br />
                        1000 Sqft
                      </div>
                      <div className="col-4">
                        <i className="fa-solid fa-bed"></i><br />
                        3 Bed
                      </div>
                      <div className="col-4">
                        <i className="bi bi-droplet-fill"></i><br />
                        2 Bath
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 6 */}
              <div className="col-md-4">
                <div className="card property-card">
                  <div className="property-img">
                    <img src={p6} className="img-fluid" alt="House" />
                    <span className="badge-sell">For Sell</span>
                    <span className="badge-type">House</span>
                  </div>

                  <div className="card-body mt-3">
                    <div className="price">$12,345</div>
                    <h5 className="fw-bold mt-2">Family House</h5>
                    <p className="text-muted mb-3">
                      <i className="bi bi-geo-alt-fill text-success"></i>
                      123 Street, New York, USA
                    </p>

                    <hr />

                    <div className="row text-center features">
                      <div className="col-4">
                        <i className="bi bi-arrows-fullscreen"></i><br />
                        1000 Sqft
                      </div>
                      <div className="col-4">
                        <i className="fa-solid fa-bed"></i><br />
                        3 Bed
                      </div>
                      <div className="col-4">
                        <i className="bi bi-droplet-fill"></i><br />
                        2 Bath
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <br></br>
        <div className="text-center">
          <button type="button" class="btn btn-success" style={{ padding: '10px' }}>
            Browse the Property
          </button>
        </div>

      </div>{/* Property listing */}

      {/* CONTACT PAGE */}

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

      {/* PROPERTY AGENTS */}

      <div className='property-agents' id='p-agent'>

        <div className='proage-cont'>
          <h1>Property Agents</h1>
          <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center g-4">

            {/* Card 1 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card profile-card text-center">
                <div className="profile-img">
                  <img src={team1} style={{ height: "390px", width: "100%", objectFit: "cover" }} />
                </div>

                <div className="social-icons">
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                </div>

                <div className="card-body">
                  <h5 className="card-title mb-1">Full Name</h5>
                  <p className="text-muted">Designation</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card profile-card text-center">
                <div className="profile-img">
                  <img src={team2} style={{ height: "390px", width: "100%", objectFit: "cover" }} />
                </div>
                <div className="social-icons">
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-1">Full Name</h5>
                  <p className="text-muted">Designation</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card profile-card text-center">
                <div className="profile-img">
                  <img src={team3} style={{ height: "390px", width: "100%", objectFit: "cover" }} />
                </div>
                <div className="social-icons">
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-1">Full Name</h5>
                  <p className="text-muted">Designation</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card profile-card text-center">
                <div className="profile-img">
                  <img src={team4} style={{ height: "390px", width: "100%", objectFit: "cover" }} />
                </div>
                <div className="social-icons">
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-1">Full Name</h5>
                  <p className="text-muted">Designation</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>{/* PROPERTY AGENTS */}

      {/* TESTIMONIAL */}


      <div className='testimonial' id='test'>

        <div className='test-cont'>
          <h1>Our Clients Say</h1>
          <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>

        <div className='test-box'>

          <div className='test-card'>
            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>

            <div className='test-client'>
              <div>
                <img src={test1} style={{ width: '70px' }} />
              </div>
              <div>
                <h5>Client Name</h5>
                <p>Profession</p>
              </div>

            </div>

          </div>

          {/* card 2 */}

          <div className='test-card'>
            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>

            <div className='test-client'>
              <div>
                <img src={test2} style={{ width: '70px' }} />
              </div>
              <div>
                <h5>Client Name</h5>
                <p>Profession</p>
              </div>

            </div>

          </div>

          {/* card 3 */}

          <div className='test-card'>
            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>

            <div className='test-client'>
              <div>
                <img src={test3} style={{ width: '70px' }} />
              </div>
              <div>
                <h5>Client Name</h5>
                <p>Profession</p>
              </div>

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

                export default Home;
