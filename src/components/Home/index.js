import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ','N','a', 't', 'a', 'l', 'i', 'e', ','];
    const jobArray = ['a', 'n', ' ', 'a', 's', 'p', 'i', 'r', 'i', 'n', 'g', ' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _13`}>,</span>
                <br />
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>'m</span>
                
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={7} />
                </h1>
                <h2>Undergraduate Student: Computer Science, Business Administration, Artificial Intelligence</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home;