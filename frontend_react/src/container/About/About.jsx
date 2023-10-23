import React from 'react'
import { motion } from 'framer-motion'



import './About.scss'

const abouts = [
   { title: 'Web Developer', description: 'I am a good web developer', imgUrl: ''},
   { title: 'Frontend Developer', description: 'I am a good web developer', imgUrl: ''},
   { title: 'Backend Developer', description: 'I am a good web developer', imgUrl: ''},
   { title: 'Mobile Developer', description: 'I am a good web developer', imgUrl: ''}
];

export default function About() {
  return (
    <>
      <h2 className='head-text'> I Know That 
      <span>Good Design</span> 
      <br />
      means 
      <span>Good Business</span>
      </h2>

      <div className="app__profile">
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration:0.5, type: 'tween'}}
          className='app__profile-item'
          >
          <img src={about.imgUrl} alt="" />
          <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}
