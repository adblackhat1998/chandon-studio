import React from 'react';
import './ClientComment.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import client1 from '../../../public/images/user/user1.png'
import client2 from '../../../public/images/user/user2.png'
import client3 from '../../../public/images/user/user3.png'
import client4 from '../../../public/images/user/user4.png'
import client5 from '../../../public/images/user/user5.png'
import client6 from '../../../public/images/user/user6.png';
import { FaQuoteRight } from 'react-icons/fa';
const ClientComment = () => {
    const responsive = {
        breakpoints: {
            320: {
                slidesPerView: 1,


            },
            480: {
                slidesPerView: 1,

            },
            640: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            // When window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            // When window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    }
    return (
        <Swiper className='container text-center p-5'
            {...responsive}
            spaceBetween={50}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay]}
        >
            <SwiperSlide>
                <div className="card client-info" style={{ width: '18rem' }}>
                    <div className='text-center'>
                        <img src={client1} className="card-img-top  clients" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-white fs-4 fw-bold">RAYAN</h5>
                        <p className="card-text text-white">
                            <span className=' fs-3'>"</span> I am beyond thrilled with the video editing work done by this team! They captured the essence of our event perfectly! <span className='fs-3'>"</span>
                        </p>
                        <div className='d-flex justify-content-evenly'>
                            <p className='yellowColor'>CEO | Founder</p>
                            <p className='comment-icon'><FaQuoteRight /> </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card client-info" style={{ width: '18rem' }}>
                    <div className='text-center'>
                        <img src={client2} className="card-img-top  clients" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-white fs-4 fw-bold">DAMiO</h5>
                        <p className="card-text text-white">
                            <span className=' fs-3'>"</span> I am beyond thrilled with the video editing work done by this team! They captured the essence of our event perfectly! <span className='fs-3'>"</span>
                        </p>
                        <div className='d-flex justify-content-evenly'>
                            <p className='yellowColor'>Content Creator</p>
                            <p className='comment-icon'><FaQuoteRight /> </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card client-info" style={{ width: '18rem' }}>
                    <div className='text-center'>
                        <img src={client3} className="card-img-top  clients" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-white fs-4 fw-bold">ROCK</h5>
                        <p className="card-text text-white">
                            <span className=' fs-3'>"</span> I am beyond thrilled with the video editing work done by this team! They captured the essence of our event perfectly! <span className='fs-3'>"</span>
                        </p>
                        <div className='d-flex justify-content-evenly'>
                            <p className='yellowColor'>Vloger | Founder</p>
                            <p className='comment-icon'><FaQuoteRight /> </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card client-info" style={{ width: '18rem' }}>
                    <div className='text-center'>
                        <img src={client4} className="card-img-top  clients" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-white fs-4 fw-bold">MD : ZAFOR</h5>
                        <p className="card-text text-white">
                            <span className=' fs-3'>"</span> I am beyond thrilled with the video editing work done by this team! They captured the essence of our event perfectly! <span className='fs-3'>"</span>
                        </p>
                        <div className='d-flex justify-content-evenly'>
                            <p className='yellowColor'>CEO | Founder</p>
                            <p className='comment-icon'><FaQuoteRight /> </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card client-info" style={{ width: '18rem' }}>
                    <div className='text-center'>
                        <img src={client5} className="card-img-top  clients" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-white fs-4 fw-bold">LEO</h5>
                        <p className="card-text text-white">
                            <span className=' fs-3'>"</span> I am beyond thrilled with the video editing work done by this team! They captured the essence of our event perfectly! <span className='fs-3'>"</span>
                        </p>
                        <div className='d-flex justify-content-evenly'>
                            <p className='yellowColor'> Project Officer </p>
                            <p className='comment-icon'><FaQuoteRight /> </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card client-info" style={{ width: '18rem' }}>
                    <div className='text-center'>
                        <img src={client6} className="card-img-top  clients" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-white fs-4 fw-bold">VANESSA</h5>
                        <p className="card-text text-white">
                            <span className=' fs-3'>"</span> I am beyond thrilled with the video editing work done by this team! They captured the essence of our event perfectly! <span className='fs-3'>"</span>
                        </p>
                        <div className='d-flex justify-content-evenly'>
                            <p className='yellowColor'> Public Figure</p>
                            <p className='comment-icon'><FaQuoteRight /> </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default ClientComment;