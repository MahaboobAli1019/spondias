import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <section className='section footer bg-dark text-white'>
        <div className='container'>
        <div className='row'>
        <div className='col-md-4'>
            <h6>SPONDIAS</h6>
            <hr/>
            <p className='text-white'>
            UK#<br/>
            20-22 Wenlock Road, London,<br/>
            England, N1 7GU<br/>
            <br/>
            INDIA#<br/>
            Chadika vari Street, Jagannaickpur,<br/>
            Kakinada, 533002<br/>
            </p>
        </div>
        <div className='col-md-4'>
            <h6>Useful Links</h6>
            <hr/>
            <div><Link to='/'>HOME</Link></div>
            <div><Link to='/about'>About</Link></div>
            <div><Link to='/'>Contact</Link></div>
            <div><Link to='/'>BLOG</Link></div>
        </div>
        <div className='col-md-4'>
            <h6>Our Services</h6>
            <hr/>
            <div><Link to='/'>Web Design</Link></div>
            <div><Link to='/'>Web Development</Link></div>
            <div><Link to='/'>Product Management</Link></div>
            <div><Link to='/'>Marketing</Link></div>
            <div><Link to='/'>Graphic Design</Link></div>
        </div>
        </div>
        </div>
    </section>
  )
}
