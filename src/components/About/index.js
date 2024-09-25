import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

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
                <p>I am an ambitious Computer Science student looking for opportunities to expand my career development and software engineering skills.</p>
                <br />
                <p>Natalie is actively working on an extended resume and a 'Projects' section. Please check back soon!</p>
            </div>
        </div>
    )
}

export default About;