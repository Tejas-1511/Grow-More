import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from '../assets/3.jpg'
import img2 from '../assets/4.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

//time measured in milli secs in 'interval={2000}'
export const Services = () => {
    return (
        <div style={{height:'148vh', backgroundColor:'#090c31'}}>
            <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={2000} showThumbs={false}>
                <div>
                    <img src={img1} alt='img1'/>
                    <p className='legend'>Full-Stack</p>
                </div>
                <div>
                    <img src={img2} alt='img2'/>
                    <p className='legend'>Peer to Peer Support</p>
                </div>
            </Carousel>
        </div>
    )
}
