import React, { useState } from 'react'
import post from './Post.module.scss'

export default function Post(props: {title: string}) {

  const [isComplete, setIsComplete] = useState(false)

  return (
    <div className={post.wrapper}>
        <div className={post.container}>
            <div className={post.container__body}>
                <button 
                  className={post.circle} 
                  style={{background: isComplete ? 'linear-gradient(90deg, rgba(230,0,250,1) 0%, rgba(82,97,234,0) 100%)' : 'transparent'}}
                  onClick={() => setIsComplete(!isComplete)}
                >
                    <div className={post.image__circle} style={{opacity: isComplete ? '1' : '0'}}></div>
                </button>
                <div style={{textDecoration: isComplete ? 'line-through' : 'none', opacity: isComplete ? '0.57' : '1'}} className={post.containerText}>
                  <h1 style={{color: isComplete ? '#0F90A1' : 'white'}}>{props.title}</h1>
                </div>
            </div>
            <div className={post.container__horizontalLine}></div>
        </div>
    </div>
  )
}
