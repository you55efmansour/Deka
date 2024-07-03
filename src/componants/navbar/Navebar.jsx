import { Link, useParams } from 'react-router-dom';
import logo from './logo.png'
import data from '../.././data/products.json'
function Navbar(prop) {
    let {products} = data
    const{showIcon ,direction , showColor , passId} = prop
    let {id , color} =  useParams()
    const myProduct = (product)=>{
        let mainProduct = product.find(prod => prod.id === +id)
        if (mainProduct) {
            return(
                <div className='fw-bold fs-4 text-light ts'>{mainProduct.title}</div>
            )
        }
    }

    return(
            <div className={`h-nav w-100 ${showColor?`bg-${color}`:""}`}>
                <div className="h-nav w-100 m-0 align-items-center row">
                    {showIcon &&
                    <div className='col-1 d-flex justify-content-center'>
                        <Link className='back-button d-flex align-items-center' to={`${color || passId?`${direction}/${id}`:`${direction}`}`}>
                            <i className={`fa-solid ${showColor?"text-light":"text-primary"}  fs-3 fa-angle-left`}></i>
                        </Link>
                    </div>
                    }
                    <div className={` h-100 ${showIcon?"col-11":"col-12"} d-flex align-items-center justify-content-center`}>
                        {
                            color?myProduct(products):<Link to={"/"} className="navbar-brand" >
                                    <img className='logo' src={logo} alt="" />
                                    </Link>
                        }
                    </div>

                </div>
            </div>

    )
}
export default Navbar;