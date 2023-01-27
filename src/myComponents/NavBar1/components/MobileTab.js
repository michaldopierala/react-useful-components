import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileTab(props) {
  if (!props.open) return null
  return (
    <div className='mobileTab'>
      <div className='mobileTabIn'>
        <button onClick={props.tab}><img src="http://localhost/img/close2.png" alt="close img" /></button>
        <div className='linnksMobile'>
          <nav>
          <Link onClick={props.tab} className="btn" to="/">Home </Link>
          <Link onClick={props.tab} className="btn" to="page1">Page 1</Link>
          <Link onClick={props.tab} className="btn" to="page2">Page 2</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
