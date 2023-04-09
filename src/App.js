import React, { useEffect, useState } from 'react'
import './App.css'

export default function Home() {
  const [github_src, setGithubSrc] = useState('https://i.imgur.com/qkgfyLX.png')


  const joy = [
    'https://i.imgur.com/NGYz7eM.jpg',
    'https://i.imgur.com/Yu5n5ti.jpg',
    'https://i.imgur.com/r0Y6stC.jpg',
    'https://i.imgur.com/BEqypvj.jpg',
    'https://i.imgur.com/4ceKCla.jpg',
    'https://i.imgur.com/eFCicxJ.jpg',
    'https://i.imgur.com/X75QP2k.jpg',
    'https://i.imgur.com/xUqFGI3.jpg',
    'https://i.imgur.com/RNfLfOv.jpg'
  ]

  useEffect(() => {
  })

  return (
      <div
      >

        <div className='main-div'>
          <h1>Welcome to your website, Joy</h1>
          <h2>Stay as long as you'd like</h2>
        </div>


        <div className='social-media_container'
        >
          <a href='https://github.com/milesueee'>
            <img className='social-media_icon' src={github_src} alt='github' />
          </a>
        </div>
        <div className='blank'>

        </div>
        <div className='joy-container'>
          <h2 className='joy-title'>
            here are some of ur coteee pics :{'>'}
          </h2>

          <div className='fadein'>
            {joy.map((joy, index) => (
                <img
                    className='joy'
                    src={joy}
                    alt={`joy ${index}`}
                />
            ))}
          </div>
        </div>

        <footer>There isn't really anything else in here except u soo fineee🤌🤌🤩🤩</footer>
      </div>
  )
}
