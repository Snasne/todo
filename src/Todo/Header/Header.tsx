import React from 'react'
import header from './Header.module.scss'

export default function Header() {
  return (
    <div className={header.wrapper}>
        <div className={header.container}>
            <h1>TODO</h1>
        </div>
    </div>
  )
}
