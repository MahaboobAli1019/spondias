import React from 'react';
import { Link } from 'react-router-dom';

import service1 from '../images/service1.jpg';
import service2 from '../images/service2.jpg';
import service3 from '../images/Service3.jpg';
import service4 from '../images/service4.jpg';
import service5 from '../images/service5.jpg';
import service6 from '../images/service6.jpg';

export default function Services() {
  return (
    <section className='section bg-c-light border-top'>
   <div className='container'>
    <div className='row'>
      <div className='col-md-12 mb-5 text-center'>
        <h3 className='main-heading'>OUR SERVICES</h3>
        <div className='underline mx-auto'></div>
      </div>
      <div className='col-md-4'>
        <div className='card shadow'>
        <img src={service1} className='w-100 border-bottom' alt='services' />
          <div className='card-body'>
           <h5>Hosting</h5>
           <div className='underline'></div>
           <p>Experience seamless hosting solutions with our reliable services, ensuring optimal performance and 24/7 support for your online presence</p>
           <Link to='/services' className='btn btn-primary'>Read More</Link> 
          </div>
        </div>
      </div>

      <div className='col-md-4'>
        <div className='card shadow'>
        <img src={service2} className='w-100 border-bottom' alt='services' />
          <div className='card-body'>
           <h5>Programming</h5>
           <div className='underline'></div>
           <p>Empower your business with our cutting-edge programs, crafted to enhance efficiency and drive innovation.</p>
           <Link to='/services' className='btn btn-primary'>Read More</Link> 
          </div>
        </div>
      </div>

      <div className='col-md-4'>
        <div className='card shadow'>
        <img src={service3} className='w-100 border-bottom' alt='services' />
          <div className='card-body'>
           <h5>Design</h5>
           <div className='underline'></div>
           <p>Elevate your brand with our bespoke design solutions, where creativity meets functionality. From captivating visuals to intuitive user experiences.</p>
           <Link to='/services' className='btn btn-primary'>Read More</Link> 
          </div>
        </div>
      </div>

      <div className='col-md-4 mt-4'>
        <div className='card shadow'>
        <img src={service4} className='w-100 border-bottom' alt='services' />
          <div className='card-body'>
           <h5>Database Optimisation</h5>
           <div className='underline'></div>
           <p>Unlock peak performance and efficiency with our database optimization services.Enhance speed, reliability, and scalability </p>
           <Link to='/services' className='btn btn-primary'>Read More</Link> 
          </div>
        </div>
      </div>

      <div className='col-md-4 mt-4'>
        <div className='card shadow'>
        <img src={service5} className='w-100 border-bottom' alt='services' />
          <div className='card-body'>
           <h5>Security</h5>
           <div className='underline'></div>
           <p>Protect your digital assets with our robust security solutions, offering advanced measures to safeguard against cyber threats.</p>
           <Link to='/services' className='btn btn-primary'>Read More</Link> 
          </div>
        </div>
      </div>

      <div className='col-md-4 mt-4'>
        <div className='card shadow'>
        <img src={service6} className='w-100 border-bottom' alt='services' />
          <div className='card-body'>
           <h5>National ID Cards</h5>
           <div className='underline'></div>
           <p>Streamline identification processes with our National ID card solutions, providing secure and efficient means of authentication</p>
           <Link to='/services' className='btn btn-primary'>Read More</Link> 
          </div>
        </div>
      </div>

      
    </div> 
   </div>
   </section> 
  )
}
