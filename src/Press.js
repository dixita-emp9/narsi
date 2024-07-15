import logo from './logo.svg';
import './App.css';
import OverlayNav from './components/NavHeader';
import press1Img from './images/press1.jpg'
import press2Img from './images/press2.jpg'
import press3Img from './images/press3.jpg'
import press4Img from './images/press4.jpg'
import press5Img from './images/press5.jpg'
import press6Img from './images/press6.jpg'
import Marquee from "react-fast-marquee";
import Footer from './components/Footer';
import SmoothScroll from "./SmoothScroll";


function Press() {
  return (
    <div>
      <SmoothScroll />
      <header >
        <OverlayNav />
      </header>
      <div className='container-fluid'>
        <div className='row bg-wood section justify-content-center'>
          <div className='col-lg-10 col-11 mt-5'>
            <h2 className='mt-5 mb-5'>Press</h2>
            <div className='row '>
              <div className='col-lg-4'>
                <div className='press-card'>
                  <img src={press1Img} />
                  <div className='card-content'>
                    <p>Developed by Narsi Group who claimed it to be world’s biggest wooden door, it has successfully cleared the fire resistance test conducted by the fire research laboratory of... </p>
                    <a> <h6 className='text-uppercase'> Read more</h6></a>
                  </div>

                </div>
              </div>
              <div className='col-lg-4'>
                <div className='press-card'>
                  <img src={press2Img} />
                  <div className='card-content'>
                    <p>Established in 1986 by the prominent Narsi Kularia, Founder, Narsi Group, the company has successfully executed a variety of projects for highly discerning clientele like... </p>
                    <a> <h6 className='text-uppercase'> Read more</h6></a>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='press-card'>
                  <img src={press3Img} />
                  <div className='card-content'>
                    <p>Narsi Kularia, founder of the Narsi Group, a one-stop, Pan-India interior turnkey fit-out service provider, established the company in 1986... </p>
                    <a> <h6 className='text-uppercase'> Read more</h6></a>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='press-card'>
                  <img src={press4Img} />
                  <div className='card-content'>
                    <p>Narsi Kularia, founder of the Narsi Group, a one-stop, Pan-India interior turnkey fit-out service provider, established the company in 1986...  </p>
                    <a> <h6 className='text-uppercase'> Read more</h6></a>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='press-card'>
                  <img src={press5Img} />
                  <div className='card-content'>
                    <p>This article shall explore the Infosys Experience Centre, Chennai designed by Narsi & Associates. Founded by Mr. Narsi Kularia in 1986... </p>
                    <a> <h6 className='text-uppercase'> Read more</h6></a>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='press-card'>
                  <img src={press6Img} />
                  <div className='card-content'>
                    <p>CW traces the journey of Mumbai-based Narsi & Associates from size zero to becoming a size `6.50 billion company... </p>
                    <a> <h6 className='text-uppercase'> Read more</h6></a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>

  );
}

export default Press;
