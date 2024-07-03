import React from "react"
import data from '../../data/products.json'
import { useParams } from "react-router-dom"

function Video() {
    let {products} = data
    let {id,i} =  useParams()
    const myProduct = (product)=>{
        let mainProduct = product.find(prod => prod.id === +id)
        if (mainProduct) {
            return (
                // <video className="rounded overerflow-hidden" src={`${process.env.PUBLIC_URL}${mainProduct.video[i]}`} width={"100%"} height={"100%"}  autoPlay muted ></video>
                <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${mainProduct.video[i]}`}
                frameBorder="0"
                allowFullScreen
                title="YouTube video player"
              ></iframe>
                )
        }
    }
    return(
    <div className="h-content bg-black animate__animated animate__fadeInRight">
        <div className=" d-flex justify-content-center align-items-center product-details-content">
            {myProduct(products)}
        </div>
    </div>
    )
}
export default Video