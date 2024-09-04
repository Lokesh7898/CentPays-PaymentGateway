document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("Payment-html");
  container.className = " p-0 text-light";

  // Navbar
  const navbar = document.createElement("nav");
  navbar.className =
    "navbar navbar-expand-lg  navbar-dark position-fixednavMain animate__animated animate__fadeInUp";
  navbar.id = "navBar";
  navbar.innerHTML = `
      <div class="container navContainer">
        <a class="navbar-brand " href="#">
          <img src="/Images/centpay-logo.png" alt="logo" class="d-inline-block logo align-top" >
        </a>
        <button class="navbar-toggler navToggle" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <nav>
          <ul class="navbar-nav mr-auto nav1">
            <li class="nav-item"><a class="nav-link text-light" href="#home"><b>Home</b></a></li>
            <li class="nav-item"><a class="nav-link text-light" href="#about"><b>About</b></a></li>
            <li class="nav-item"><a class="nav-link text-light" href="#services"><b>Services</b></a></li>
            <li class="nav-item"><a class="nav-link text-light" href="#blog"><b>Blog</b></a></li>
            <li class="nav-item"><a class="nav-link text-light" href="#contact"><b>Contact</b></a></li>
          </ul>
          <div class="nav-separator"></div>
          <ul class="navbar-nav seprate-nav">
            <li class="nav-item"><a class="nav-link text-light" href="#signin"><b>Sign&nbsp;In</b></a></li>
            <li class="nav-item"><a class="nav-link text-light" href="#Login"><b>Login</b></a></li>
          </ul>
          </nav>
        </div>
      </div>
    `;
  container.appendChild(navbar);

  // Header.....
  const home = document.getElementById("home");
  const header = document.createElement("div");
  header.className = " header pb-5 ";
  header.id = "Header";
  header.innerHTML = `
  <section id="Header">
     <div class="container-xxl w-100 p-0 text-light pt-5 mt-2 py-5 pb-5 headerContainer">
        <div class="container-fluid headerflex d-flex ">
        <div class="container header-text mt-5 pt-5 col-3 headerText animate__animated animate__backInLeft">
          <h1 class="headerhead">Get fast payment settlements <b class="text-success"> Globally </b> with CENTPAYS.</h1>
          <p>
            Empower Your Business with Secure, Fast, and Flexible Payment Solutions. Experience the Future of Transactions with CENTPAYS.
          </p>
          <div class="d-flex gap-3 pb-4">
          <button class="btn header-btn-getstarted border-primary text-light p-2 bg-transparent">Create Account</button>
          <button class="btn header-btn-getstarted text-white btn-primary p-2">Contact Sales</button>
        </div>
        </div>
        <video autoplay muted loop class="header-video col-9 headerVideo">
          <source src="/Videos/header2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    </section>
     `;
  home.appendChild(header);
  container.appendChild(home);

  // about us.....
  const abtUs = document.getElementById("about");
  const about = document.createElement("div");
  about.className = "";
  about.id = "aboutus";
  about.innerHTML = `
       <div class="bg-container w-100 pt-2 animate__animated animate__fadeInUp">
        <video  class="bg-video aboutVideo" src="/Videos/about.mp4" autoplay muted loop playsinline></video>
      </div>
      <div class="content-container aboutContainer">
        <div class="about-main text-white text-center">
          <div class="text-about">
            <h1 class="text-about1 animate__animated animate__fadeInUp">Powering businesses the world over
            </h1>
          </div>
          <div class="text-about2 d-flex mx-5 row">
            <h1 class="about_centpays col-4 animate__animated animate__fadeInUp ">About Centpays</h1>
            <p class="col-7 about_centpays2 animate__animated animate__fadeInUp aboutBlock">Fifteen years ago, not all businesses could accept credit cards. Square set out to change that — inventing the first mobile card reader of its kind. This allowed businesses to take payments anywhere and keep thriving in the economy. It also completely disrupted how the financial system thinks about small businesses. With this shift, Square’s journey took off — moving far beyond its origins as a payment processor to building new tools and solutions for the future.Today, Square is the largest business technology platform serving all kinds of businesses. The Square operating system allows business owners to sell anywhere, work more efficiently, manage inventory, communicate with customers, book appointments, course meals, order online, and so much more. These tools unlock endless possibilities and countless opportunities for any operation from global chains to mom-and-pop shops.</p>
          </div>
          </div>
      </div>
    `;
  abtUs.appendChild(about);
  container.appendChild(abtUs);

  //pay anywhere.....
  const services = document.getElementById("services");
  const pay_anyWhere = document.createElement("div");
  pay_anyWhere.className = " ";
  pay_anyWhere.id = "payanyWhere";
  pay_anyWhere.innerHTML = `
  <section id="payAnyWhere">
              <div class="payAnywhere w-100">
        <div class="payanyWherescroll p-5 px-5 bg-white w-100 pt-5 d-flex row gap-5 justify-content-center text-dark pt-5 ">
          <div class="px-5 payAnywherecss mt-4">
              <h1 class="mx-5 animate__animated animate__fadeInLeft "><b>Pay anywhere easily,</b></h1>
              <h1 class="mx-5 animate__animated animate__fadeInLeft "><b>quickly, and seamlessly.</b></h1>
          </div>
          <!-- card 1 -->
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 crdDesign display834 animate__animated animate__fadeInLeft">
                <div class="card fixed-size-card">
                    <div class="product-video-container card-video p-1">
                        <img src="/Images/product 1.gif" class="card-video img-fluid" alt="Product 1">
                    </div>
                </div>
                <div class="card-title text-dark mt-2">
                    <b>Debit and <a class="text-primary text-decoration-none">Credit</a> Card Processing</b>
                    <p class="mt-2"></p>
                </div>
            </div>
            <!-- card 2 -->
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 crdDesign animate__animated animate__fadeInLeft">
                <div class="card fixed-size-card">
                    <div class="product-video-container card-video p-1">
                        <img src="/Images/product 2.gif" class="card-video img-fluid" alt="Product 1">
                    </div>
                </div>
                <div class="card-title text-dark mt-2">
                    <b> <a class="text-primary text-decoration-none">Alternative </a> Payment Methods</b>
                    <p class="mt-2"></p>
                </div>
            </div>
            <!-- card 3 -->
            <div class="col-12 col-sm-6 h-100 col-md-4 crdDesign col-lg-3 animate__animated animate__fadeInLeft">
                <div class="card fixed-size-card">
                    <div class="product-video-container card-video p-1">
                        <img src="/Images/product 3.gif" class="card-video img-fluid" alt="Product 1">
                    </div>
                </div>
                <div class="card-title text-dark mt-2">
                    <b> <a class="text-primary text-decoration-none">White Label </a>Payment Methods</b>
                    <p class="mt-2"></p>
                </div>
            </div>
          <!-- card 4 -->
          <div class="col-10 crdDesign justify-content-center animate__animated animate__fadeInLeft">
            <div class="card fixed-size-card">
                <div class="product-video-container card-video p-1">
                    <img src="/Images/product 4.gif" class="card-video img-fluid" alt="Product 1">
                </div>
                
             </div>
             <div class="card-title text-dark mt-2">
              <b> <a class="text-primary text-decoration-none">Crypto </a> Payment Processing</b>
              <p class="mt-2"></p>
          </div>
  </div>
      </div>
  </div>
      </div>
    `;
  services.appendChild(pay_anyWhere);
  container.appendChild(services);

  // contact us.....
  const contact = document.getElementById("contact");
  const contactUs = document.createElement("div");
  contactUs.className = "contact w-100";
  contactUs.id = "ContactUs";
  contactUs.innerHTML = `
    <section id="contactUs">
        <div class="contact-overlay">
      <video class="video-bg contactVideo" src="/Videos/contact.mp4" autoplay muted loop playsinline></video>
      
      <div class="row contactflex  d-flex">
        <div class="col-5 px-5  text-light contact-div1 animate__animated animate__fadeInUp">
          <h1 class="py-5">
          Let’s get you set up.</h1>
          <p>Our contact page provides you with a seamless way to reach us for any inquiries or support related to our payment gateway services. Fill out the form with your details, and our team will respond promptly to assist you with your payment solutions.</p>
        </div>
        
      <div class="contact-form contactForm pt-5 mt-5 text-light w-100 container-fluid col-6 mt-1 animate__animated animate__fadeInUp">
          <h2 class="text-center">Contact Us</h2>
          <form>
              <div class="form-group py-4">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Enter your name" required>
              </div>
              <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
              </div>
              <div class="form-group py-4">
                  <label for="contact">Skype/Telegram</label>
                  <input type="text" class="form-control" id="contact" placeholder="Enter your Skype or Telegram ID">
              </div>
              <div class="form-group py-4">
                  <label for="message">Message</label>
                  <textarea class="form-control contact-textarea" id="message" rows="4" placeholder="Enter your message" required></textarea>
              </div>
              <div class="text-center">
              <button type="submit" class="btn btn-primary w-50">Send</button>
              </div>
          </form>
          <div class="mt-3">
              <p>company@example.com</p>
          </div>
      </div>
    </div>
  </div>
  </section>
  `;
  contact.appendChild(contactUs);
  container.appendChild(contact);

  // footer.....
  const footer = document.createElement("div");
  footer.className = "w-100";
  footer.id = "footer";
  footer.innerHTML = `
               <!-- Footer -->
     <footer class="footer text-white pt-5 mt-5 footercss">
      <div class="container  mt-5 pt-3">
          <div class="row footerCentpays">
              <div class="col-md-5 animate__animated animate__fadeInUp">
                  <h5>Centpays</h5>
                  <p class="pt-3">We're a payment service provider, built by a vanguard of ardent and proficient people always seeking to build, learn and thrive and only settling for top notch outcome. With a proper implementation of our technological advancement, we strive to make our customers perform as the best in the class in the business industry. It is not just built for today but for tomorrow as well.</p>
              </div>
              <div class="col-md-2 animate__animated animate__fadeInUp">
                  <h5>Company</h5>
                  <ul class="list-unstyled pt-3">
                      <li><a href="#" class="">About Us</a></li>
                      <li><a href="#" class="">Our Products</a></li>
                      <li><a href="#" class="">Contact</a></li>
                      <li><a href="#" class="">Application Form</a></li>
                  </ul>
              </div>
              <div class="col-md-3 animate__animated animate__fadeInUp">
                  <h5>Products</h5>
                  <ul class="list-unstyled pt-3">
                      <li><a href="#" class="">Credit & Debit Processing</a></li>
                      <li><a href="#" class="">White Label Payment Gateway</a></li>
                      <li><a href="#" class="">Alternative Payment Methods</a></li>
                      <li><a href="#" class="">Crypto Payment Processing</a></li>
                  </ul>
              </div>
              <div class="col-md-2 animate__animated animate__fadeInUp">
                  <h5>Terms & Policies</h5>
                  <ul class="list-unstyled pt-3">
                      <li><a href="#" class="">Terms & Conditions</a></li>
                      <li><a href="#" class="">Privacy Policy</a></li>
                      <li><a href="#" class="">Cookies Policy</a></li>
                  </ul>
              </div>
              
          </div>

          <div class="footerCards animate__animated animate__fadeInUp ">
          <div class="transCaard">
              <img class="footerimg1" src="/Images/discover.png" alt="">
              <img  class="footerimg2" src="/Images/jcb card.png" alt="">
              <img  class="footerimg3" src="/Images/mastercard.png" alt="">
              <img  class="footerimg4" src="/Images/visa (1).png" alt="">
              <img  class="footerimg5" src="/Images//Unionpay.png" alt="">
          </div>

              <div class="certificate transCaard">
                <img class="footerimg6" src="/Images/SSL-logo.png" alt="">
                <img class="footerimg7" src="/Images/PSIDSS-logo.png" alt="">
              </div>
          </div>

       
          
         <div class="text-center copyrightcss mt-5 pt-5 pb-2 animate__animated animate__fadeInUp">
  <div class="social-icons pt-3">
    <a href="https://www.linkedin.com" target="_blank" class="mr-3">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://twitter.com" target="_blank" class="mr-3">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://www.skype.com" target="_blank" class="mr-3">
      <i class="fab fa-skype"></i>
    </a>
    <a href="https://telegram.org" target="_blank" class="mr-3">
      <i class="fab fa-telegram"></i>
    </a>
  </div>
  <p class="cpyright">&copy; 2024 Centpays. All rights reserved.</p>
</div>
      </div>
      
  </footer>
  `;

  container.appendChild(footer);
});

// animation.....
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate__animated");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__fadeInUp");
          entry.target.classList.add("animate__fadeInLeft");
          entry.target.classList.add("animate__fadeInRight");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});
