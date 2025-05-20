import './index.scss';
import SliderComp from './SliderComp';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const ProjectsCarousel = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div>
            <h2>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']}
                    idx={15}
                />
            </h2>
            <div>
                <SliderComp />
            </div>
        </div>
    )
};

export default ProjectsCarousel;
