import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
function Details() {
    const [photos, setphotos] = useState([]) //array usestate pass 

    useEffect(() => {
        // fetch("https://api.tvmaze.com/shows/1/episodes")
        // .then((res)=>{
        //   return res.json()
        // })
        // .then((data)=>setphotos(data))

        //AXIOES
        axios.get("https://api.tvmaze.com/shows/1/episodes")
            .then((res) =>
                setphotos(res.data)
            )

    }, [])
    const params = useParams()
    const item = photos.find((e) => e.id === parseInt(params.id))
    console.log(item);
    return (
       <div className="conatiner">
        
        <Carousel data-bs-theme="dark" className="carsole">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='../images/m4.jpg'
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='../images/m5.jpeg'
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='../images/m6.jpeg'
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="roe">
      <h1>Movie Details</h1>
      <div className="content-div">
       
             <img src={item?.image.medium}/>
             <h4>Movie Name:{item?.name}</h4>
             <h4>Rating:  {item?.rating.average}</h4>
             <h5>season{item?.season}</h5>
             <h5>Relasing date:{item?.airdate}</h5>
             <h5>Actores:Amerkhan,limmy</h5>
             
      </div>
      </div>
      </div>
    )
}
export default Details