import { Link, useParams } from 'react-router-dom';
import data from '../../data/products.json'
function MoreDetails() {
    let {id} = useParams();
    let {products} = data
    const myProduct = (product)=>{
        let mainProduct = product.find(prod => prod.id === +id)
        if (mainProduct) {
            return(
                <div className={`products bg-${mainProduct.color} h-content animate__animated animate__fadeInRight`}>
            <div className={`container d-flex flex-column justify-content-between"}  text-light py-2`}>
                    <div className={`product d-flex`}>
                        <div className = {`left d-flex flex-column w-50`}>
                            <div>
                                <div className="h3">{mainProduct.title}</div>
                                <p className='child'>
                                {mainProduct.define}
                                </p>
                            </div>
                        </div>
                        <div className={`right animate__animated animate__slideInUp w-50 d-flex  justify-content-center align-items-center`}>
                            <img className="product-pic" src={`${process.env.PUBLIC_URL}${mainProduct.img}`} alt="" />
                        </div>
                    </div>
                    <div id='more-details' className = {`animate__animated animate__fadeInUp more-details`} >
                        <div className='details'>
                            <div className="h5">Brochure</div>
                            <Link to={`/pdf/${mainProduct.id}/${mainProduct.color}/${0}`} className=' d-flex gap-4 p-2 bg-black bg-opacity-25 rounded align-items-center prod-details'>
                                <div className="image w-25 ">
                                    <img className='img-fluid' src={`${process.env.PUBLIC_URL}${mainProduct.pdfCover}`} alt="" />
                                </div>
                                <p className='m-0'>{mainProduct.pdfTitle}</p>
                            </Link>
                        </div>
                        <div className='details my-3'>
                            <div className="h5">Case Collection</div>
                            <Link to={`/pdf/${mainProduct.id}/${mainProduct.color}/${1}`} className=' d-flex gap-4 p-2 bg-black bg-opacity-25 rounded align-items-center prod-details'>
                                <div className="image w-25">
                                    <img className='img-fluid' src={`${process.env.PUBLIC_URL}${mainProduct.secPdfCover}`} alt="" />
                                </div>
                                <p className='m-0'>{mainProduct.secondPdfTitle}</p>
                            </Link>
                        </div>
                        {mainProduct.video?<div className='details'>
                            <div className="h5">Videos</div>
                            <div className="videos d-flex gap-3 flex-wrap w-100">
                                {mainProduct.videoPic.map((pic , i)=>{
                                    return(<Link key={i} to={`/video/${mainProduct.id}/${mainProduct.color}/${i}`} className=' gap-1 d-flex p-2 bg-black bg-opacity-25 rounded align-items-center prod-details'>
                                        <div className="image w-40">
                                            <img className='img-fluid' src={`${process.env.PUBLIC_URL}${pic}`} alt="" />
                                        </div>
                                        <p className='m-0 fs-15'>{mainProduct.videoTitle[i]}</p>
                                    </Link>)
                                })}
                            </div>
                        </div>:null}
                    </div>
            </div>
                </div>
            )
        }
    }

    return(
        myProduct(products)
    )
}
export default MoreDetails;
