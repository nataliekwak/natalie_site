import './index.scss';
import React from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useState } from 'react';
import alliRater from '../../assets/images/AlliRater.gif';
import vcCompiler from '../../assets/images/VCCompiler.png';
import lsr from '../../assets/images/LSR.png';
import macronutrientCalculator from '../../assets/images/MacroCalc.png';


function SliderComp() {
    const slides = [
        {
            title: `AlliRater`,
            img: alliRater,
            description: `Web app created to allow University of Florida students to rate the meals at on-campus dining halls. Students can also access the current meal ratings for the particular dining hall in order to help decide if they should eat there. Includes registration, login, and profile editing.`,
        },
        {
            title: `VC Compiler`,
            img:vcCompiler,
            description: `A compiler written in five parts (Scanner, Recognizer, Parser, Code Generator, Checker) for the VC programming language. Developed with Java`
        },
        {
            title: `Link State Routing Protocol`,
            img: lsr,
            description: `Implementation of the Link State Routing Protocol that produces a global view of the inputted network topology. Runs Dijkstra's algorithm to compute the least-cost paths to all other routers within the network.`
        },
        {
            title: `Macronutrient Calculator`,
            img: macronutrientCalculator,
            description: `Terminal-driven program pulling a list of ingredients from a public database, allowing users to use quick sort or merge sort to sort ingredients, analyze the time taken for each, and check to macro details of a specific ingredient.`
        },
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
