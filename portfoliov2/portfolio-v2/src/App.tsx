import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <main className='page-wrapper'>

      <section className="container-fluid py-5 mt-4 px-sm-4 px-md-5">
        <div className="dark-mode bg-dark rounded-5 position-relative overflow-hidden py-5 px-3 px-sm-4 px-xl-5 mt-2 mx-md-n3 mx-lg-auto" style={{ maxWidth: "1660px" }}>
          <div className="jarallax position-absolute top-0 start-0 w-100 h-100 mt-5" data-jarallax data-speed="0.6">
            <div className="jarallax-img position-absolute w-100 h-100" style={{ backgroundImage: "url(assets/img/landing/web-studio/hero-wave.png)" }}></div>
          </div>
          <div className="bg-white position-absolute top-0 start-0 w-100 h-100" style={{ opacity: "2%" }}></div>
          <div className="container position-relative zindex-2 pt-xl-4 pt-xxl-5 pb-sm-2">
            <div className="row pt-md-3 pt-lg-5">
              <div className="col-lg-6 col-xxl-5 pb-lg-5 mb-xl-5">
                {/* <h1 className="display-1 text-center text-lg-start mb-xxl-5">Web studio of effective <span className='text-primary'>development</span></h1> */}
                <h1 className="display-1 text-center text-lg-start mb-xxl-5">Pontus Vikberg</h1>
                <h1 className="display-1 text-center text-lg-start mb-xxl-5"><span className='text-primary'>Developer</span></h1>
              </div>
              <div className="col-lg-5 col-xl-4 offset-lg-1 offset-xxl-2 d-flex flex-column pt-2 pt-md-4">
                <p className="fs-xl text-center text-lg-start pb-2 pb-md-0 mb-4 mb-md-5">We build websites, tools and applications that offer beautiful web presence and ultimate user experience.</p>
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-start pb-3 pb-sm-5"><a className="btn btn-lg btn-primary rounded-pill w-100 w-sm-auto me-sm-3 me-xl-4 mb-2 mb-sm-0" href="#">Let's partner</a><a className="btn btn-lg btn-link text-white w-100 w-sm-auto px-2" href="portfolio-list-v2.html">View Case Studies<i className="ai-arrow-right ms-2"></i></a></div>
                <ul className="list-inline d-xl-flex text-center text-lg-start mt-auto mb-0 mb-sm-2">
                  <li className="d-inline-flex align-items-center text-nowrap pt-1 me-4"><i className="ai-check-alt text-primary fs-xl me-2"></i>Full spectrum of services</li>
                  <li className="d-inline-flex align-items-center text-nowrap pt-1"><i className="ai-check-alt text-primary fs-xl me-2"></i>Flexible work terms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default App;
