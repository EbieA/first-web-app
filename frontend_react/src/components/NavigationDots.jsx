import React from 'react'

export default function NavigationDots({active}) {
  return (
    <div className='app__navigation'>
         {['home', 'about', 'work', 'skills', 'testimonial', 'contact', ].map((item) => (
            <a 
            href={`#${item}`} 
            key={item}
            className='app__navigation-dot'
            style={active === item ? { backgroundColor: '#313BAC'} : { }}
            />
            ))}
    </div>
  )
}
