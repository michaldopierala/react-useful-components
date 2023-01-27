import React, {useState} from 'react'
import MobileTab from './MobileTab'

export default function MobileMenu() {
const [open, setOpen] = useState(false)

function tab(){
    !open ? setOpen(true): setOpen(false)
}

  return (
    <div className='mobileMenu'>
        <button className='mobileButton' onClick={() => { !open ? setOpen(true) : setOpen(false) }}><img src="http://localhost/img/menu2.png" alt="logo" /></button>
        <MobileTab tab={tab} open={open} />
    </div>
  )
}
