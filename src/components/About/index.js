import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import ProjectsCarousel from '../ProjectsCarousel';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
                        idx={15}
                    />
                </h1>
                <p className='about-text'>
                Hi, I’m Natalie! I am a Pre-Law Computer Science student with a passion for building meaningful, human-centered tech. 
                I’ve worked on projects ranging from web development to artificial intelligence, always aiming to combine 
                technical skill with purpose. Whether it’s optimizing code, collaborating on creative solutions, or exploring 
                tech’s role in social change, I’m always looking to learn, grow, and make an impact.
                </p>
                <hr className='section-divider' />
                <p>Natalie is actively working on an extended resume and a 'Projects' section. Please check back soon!</p>
                <div>
                    <ProjectsCarousel />
                </div>
                <div className='bottom-bumper'> </div>
            </div>
        </div>
    )
}

export default About;