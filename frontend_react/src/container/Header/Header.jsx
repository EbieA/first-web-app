import React from 'react';
import {motion} from 'framer-motion';

import {images} from '../../constants'
import './Header.scss'

export default function Header() {
  return (
    <div className='app__header app__flex'>
      <motion.div 
      whileInView={{x: [-100, 0], opacity: [0,1]}}
      transition={{duration: 0.5}}
      className='app__header-info'
      >
      <div className='app__header-badge'>
      <div className='badge-cmp app__flex'>
        <span>👋</span>
        <div style={{marginLeft: 20}}>
          <p className='p-text'>Hello, I am</p>
          <h1 className='hea-text'>Ebenezer</h1>
        </div>
      </div>
      </div>
      </motion.div>
    </div>
  )
}
