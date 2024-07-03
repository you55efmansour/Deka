import { Link } from 'react-router-dom';
import data from '../../data/products.json'

function Home() {
    let {products} = data

    const renderProducts = (myProducts) =>{

        return(
            myProducts.map((product , i)=>{
                return(
                    <Link to={`/Product/${product.id}`} className={`col-lg-6 col-md-6 col-12 p-0`} key={i}>
                    <div className={`card rounded-0 h-100 bg-${product.color} container border-0 justify-content-center align-items-center`}>
                        <img src={`${process.env.PUBLIC_URL}${product.img}`} className="card-img w-25 img-fluid" alt="..."/>
                        <div className="overlay d-flex text-light flex-column justify-content-center align-items-center">
                            <h5 className="card-title">{product.title}</h5>
                            <p className='text-center'>{product.define}</p>
                        </div>
                    </div>
                    </Link>
                )
            })
        )
    }
    return(
        <div className='overflow-hidden'> 
            <div className="row">
                <div className="fw-bold m-0 p-2 bg-black text-light w-100 text-center">
                    PRO SYSTEMS
                </div>
            </div>
            <div className="container h-content mw-100 animate__animated animate__fadeInRight">
                <div className="row bg-navy">
                    {renderProducts(products)}
                </div>
            </div>
        </div>
    )
}

export default Home ;