import './index.scss';
import React from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useState } from 'react';

function SliderComp() {
    const slides = [
        {
            title: `Project 1`,
            img: `https://via.placeholder.com/150`,
            description: `This is a description of project 1. It is a very cool project that I worked on.`
        },
        {
            title: `Project 2`,
            img: `https://via.placeholder.com/150`,
            description: `This is a description of project 2. It is a very cool project that I worked on.`
        },
        {
            title: `Project 3`,
            img: `https://via.placeholder.com/150`,
            description: `This is a description of project 3. It is a very cool project that I worked on.`
        },
        {
            title: `Project 4`,
            img: `https://via.placeholder.com/150`,
            description: `This is a description of project 4. It is a very cool project that I worked on.`
        },
        {
            title: `Project 5`,
            img: `https://via.placeholder.com/150`,
            description: `This is a description of project 5. It is a very cool project that I worked on.`
        },
        {
            title: `Project 6`,
            img: `https://via.placeholder.com/150`,
            description: `This is a description of project 6. It is a very cool project that I worked on.`
        },
        {
            title: `Project 7`,
            img: `https://via.placeholder.com/150`,
            description: `This is a description of project 7. It is a very cool project that I worked on.`
        }
    ]

    const NextArrow = ({ onClick }) => {
        return (
            <div className='arrow next' onClick={onClick}>
                <FaChevronRight />
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className='arrow prev' onClick={onClick}>
                <FaChevronLeft />
            </div>
        )
    }

    var settings = {
        adaptiveHeight: true,
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };

    const [imageIndex, setImageIndex] = useState(0);

    return (
        <Slider {...settings}>
            {slides.map((slide, idx) => (
                <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
                    <Project
                        image={slide.img}
                        title={slide.title}
                        description={slide.description}
                    />
                </div>
            ))}
        </Slider>
    )
}

export default SliderComp;
