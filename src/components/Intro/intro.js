import React from 'react'
import  "./intro.css";
import bg from '../../assets/background.jpg';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section className="intro">
            <div className='introContent'>
                <span className='hello'>Hello</span> <br/> 
                <span className='introText'>I am <span className='introName'>Jannatul Ferdos </span> <br/> 
                Computer Engineer with problem solving and development knowledge.
                </span><br/> 
                <p className='para'>I am a skilled back-end web developer having experience in creating user<br/>
                friendly website. Also I am passionate in teaching. </p>

                <Link><button className='btn'>Hire Me</button></Link>
               
            </div>
            
            <img src={bg} alt='bg' className='bg' />
           
            
    </section>
  );
}


export default Intro;