import { useRef, useEffect } from 'react';
import data from '../../data/products.json'
import { useParams } from 'react-router-dom';

function Pdf() {
  let {products} = data
  let {id , color , mypdf} =  useParams()
    const carouselRef = useRef();
    useEffect(() => {
      const handleTouchStart = (e) => {
        const startX = e.touches[0].clientX;
        
        const handleTouchMove = (e) => {
          const difference = startX - e.touches[0].clientX;
          if (Math.abs(difference) > 50) {
            if (difference > 0) {
              nextSlide();
            } else {
              prevSlide();
            }
            document.removeEventListener('touchmove', handleTouchMove);
          }
        };
  
        document.addEventListener('touchmove', handleTouchMove);
  
        return () => {
          document.removeEventListener('touchmove', handleTouchMove);
        };
      };
  
      carouselRef.current.addEventListener('touchstart', handleTouchStart);
  
      return () => {
        if (carouselRef.current) {
          carouselRef.current.removeEventListener('touchstart', handleTouchStart);
        }
      };
    }, []);
  
    const nextSlide = () => {
      carouselRef.current.querySelector('.carousel-control-next').click();
    };
  
    const prevSlide = () => {
      carouselRef.current.querySelector('.carousel-control-prev').click();
    };
    
    const myProduct = (product)=>{
      let mainProduct = product.find(prod => prod.id === +id)
      if (mainProduct) {
        return(
            mainProduct.pdf[mypdf].map((pdfImage, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={`${process.env.PUBLIC_URL}${pdfImage}`} className="pdf-pic" alt={`PDF Slide ${index + 1}`} />
              </div>))
        )
      }
    }
    
    return (
      <div className={`h-content bg-${color} animate__animated animate__fadeInRight`}>
          <div id="carouselExampleFade" ref={carouselRef} className="carousel slide h-87 d-flex justify-content-center align-items-center"  data-bs-touch={false}>
            <div className="carousel-inner pic-container">
              {myProduct(products)}
            </div>
            <button className="carousel-control-prev d-none d-lg-block" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next d-none d-lg-block" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span>
            </button>
          </div>   
      </div>
    );
}

export default Pdf;
