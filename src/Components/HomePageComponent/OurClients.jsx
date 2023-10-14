import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import PartnersData from '../../Data/PartnersData';
function OurClients() {
    const clients = {
        nav: true,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            393: {
                items: 4
            },
            576: {
                items: 6
            },
        }
    };
    return (
        <>
            <section>
                <div className="container my-5">
                    <div className="row">
                        <h5 className='text-uppercase fw-bold text-center'>Our Clients</h5>
                        <OwlCarousel className='owl-theme' loop margin={10} autoplay {...clients}>
                            {PartnersData.map((item) => (
                                <div className='my-3' key={item.id}>
                                    <img className='w-50 img-fluid thumbnails' src={item.partnerImage} alt="" />
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurClients
