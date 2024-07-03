import { Link, useParams } from 'react-router-dom';
import data from '../../data/products.json'
function Product() {
    let {id} = useParams();
    let {products} = data
    const myProduct = (product)=>{
        let mainProduct = product.find(prod => prod.id === +id)
        if (mainProduct) {
            return(
                <div className={`products bg-${mainProduct.color} h-content animate__animated animate__fadeInRight`}>
            <div className={`container d-flex flex-column justify-content-between  text-light py-2`}>
                    <div className={`product d-flex flex-grow-1`}>
                        <div className = {`left d-flex flex-column justify-content-between w-50`}>
                            <div>
                            
                                <div className="h3">{mainProduct.title}</div>
                                <p className='child'>
                                {mainProduct.define}
                                </p>
                            </div>
                            <div>
                                <div className="h3">why choosing</div>
                                <ul className='child'>
                                {mainProduct.choosing.map((text , i)=>{return <li key={i}>{text}</li>})}
                                </ul>
                            </div>
                            <div>
                                <div className="h3">Especially Recommended for</div>
                                <ul className='child'>
                                {mainProduct.recommended.map((text , i)=>{return <li key={i}>{text}</li>})}
                                </ul>
                            </div>
                        </div>
                        <div className={`right w-50 d-flex  justify-content-center align-items-center`}>
                            <img className={`img-fluid pic-size`} src={`${process.env.PUBLIC_URL}${mainProduct.img}`} alt="" />
                        </div>
                    </div>
                    <div className={`more fs-3 d-flex justify-content-center text-center mt-2`}>
                        <div className='more-button'>
                            <Link to={`/moreDetails/${id}`} className="text-light w-">
                                <p className='p-0 m-0'>MORE</p>
                                <i className="fa-solid fa-angle-down"></i>
                            </Link>
                        </div>
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
export default Product;
