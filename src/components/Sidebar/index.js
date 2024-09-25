import './index.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileLines, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#484847' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#484847' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#484847' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' title='Resume' rel='noreferrer' href='https://nataliekwak.com/KwakN_Resume.pdf'>
                        <FontAwesomeIcon icon={faFileLines} color='#484847' />
                    </a>
                </li>
                <li>
                    <a target='_blank' title='LinkedIn' rel='noreferrer' href='https://www.linkedin.com/in/natalie-kwak/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#484847' />
                    </a>
                </li>
                <li>
                    <a target='_blank' title='Github' rel='noreferrer' href='https://github.com/nataliekwak'>
                        <FontAwesomeIcon icon={faGithub} color='#484847' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;