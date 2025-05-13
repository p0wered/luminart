import {Link} from "react-router";
import Pic1 from '../assets/pic-1.png';
import Pic2 from '../assets/pic-2.png';
import Pic3 from '../assets/pic-3.png';
import Collection1 from '../assets/collection-1.png';
import Collection2 from '../assets/collection-2.png';
import Collection3 from '../assets/collection-3.png';
import Collection4 from '../assets/collection-4.png';
import AboutBg from '../assets/about-bg.png';
import FaqFirst from '../assets/faq-first.png';
import ChevronRight from "../icons/ChevronRight.tsx";
import ArrowRight from "../icons/ArrowRight.tsx";
import FaqItem from "../components/FaqItem.tsx";

export default function Home(){
    return(
        <>
            <div className='container-lg'>
                <div className='title-section'>
                    <div className='module module-1'>
                        <div className='title-text'>
                            <h2>
                                DISCOVER UNIQUE HANDCRAFTED FURNITURE THAT CREATE INTERIOR
                            </h2>
                            <p>
                                Welcome to LuminArt, your one stop destination for exquisite and
                                handcrafted furniture. Elevate your living spaces with our
                                stunning collection that combines artistry and modern design toi
                                create a magical interiors
                            </p>
                            <div className='title-links'>
                                <Link className='btn-border' to='/about'>
                                    About us
                                </Link>
                                <Link to='/' className='flex-row'>
                                    <p>View the new collection</p>
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className='blur-block'>
                                <img src={Pic1} alt='pic-1'/>
                                <img src={Pic2} alt='pic-2'/>
                                <img src={Pic3} alt='pic-3'/>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                                    urna. Pellentesque sit amet sapien
                                </p>
                            </div>
                            <div className='footer-block'>
                                <p>+7-800-123-45-67</p>
                                <div className='horz-line'/>
                                <p>hello@world.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='separator'/>
                    <div className='module module-2'>
                        <div className='dot'/>
                        <div className='link'>
                            <Link to='/'>HOME DECOR</Link>
                            <ChevronRight size='16px' color='white'/>
                        </div>
                        <div className='link'>
                            <Link to='/'>SOFAS</Link>
                            <ChevronRight size='16px' color='white'/>
                        </div>
                        <div className='link'>
                            <Link to='/'>LAMPS</Link>
                            <ChevronRight size='16px' color='white'/>
                        </div>
                        <div className='link'>
                            <Link to='/'>OTHER</Link>
                            <ChevronRight size='16px' color='white'/>
                        </div>
                    </div>
                    <div className='separator'/>
                    <div className='module module-3'>
                        <h3>GET 10% DISCOUNT</h3>
                        <p>Register your account and get one now</p>
                        <Link className='btn-border' to='/'>Register</Link>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='collections-section'>
                    <div className='title-box'>
                        <h3 style={{textTransform: 'uppercase'}}>Make your space with captivate design</h3>
                        <p>See our newest collection of furniture</p>
                    </div>
                    <div className='collections-list'>
                        <div className='inner'>
                            <div className='item' id='item-1' style={{backgroundImage: `url(${Collection1})`}}/>
                            <div className='item' id='item-2' style={{backgroundImage: `url(${Collection2})`}}>
                            </div>
                        </div>
                        <div className='inner'>
                            <div className='item' id='item-3' style={{backgroundImage: `url(${Collection3})`}}>
                            </div>
                            <div className='item' id='item-4' style={{backgroundImage: `url(${Collection4})`}}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-section'>
                    <div className='at-luminart'>
                        <div className='arrow-box'>
                            <ArrowRight color='#9a9a9a'/>
                        </div>
                        <p>AT LUMINART</p>
                    </div>
                    <div className='inner'>
                        <div className='about-title'>
                            <h3>
                                Our mission is to bring exquisite and unique handcrafted
                                furniture to homes around the world
                            </h3>
                            <img src={AboutBg} alt="about"/>
                        </div>
                        <div className='faq-block'>
                            <div className='faq-item first-item'>
                                <div className='first-inner'>
                                    <p className='title'><span>01</span> Personal design for you</p>
                                    <div className='button'>
                                        <p>Video</p>
                                        <ArrowRight color='black'/>
                                    </div>
                                </div>
                                <img src={FaqFirst} alt="first-item"/>
                            </div>
                            <FaqItem count='02' title='How our furniture made?'/>
                            <FaqItem count='03' title='Can I customize my furniture?'/>
                            <FaqItem count='04' title='What yout return policy?'/>
                            <FaqItem count='05' title='Do you have any dealers?'/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}