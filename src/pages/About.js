import React from 'react';
import {Link} from 'react-router-dom';
import VMC from '../includes/VMC';

export default function About() {
  return (
    <>
    <section className='py-4 bg-info'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 my-auto'>
            <h4>ABOUT</h4>
          </div>
          <div className='col-md-8 my-auto'>
            <h6 className='float-end'>
              HOME / ABOUT
            </h6>
          </div>
        </div>
      </div>
    </section>

    <section className='section bg-light border-bottom'>
   <div className='container'>
    <div className='row'>
      <div className='col-md-12 text-center'>
        <h3 className='main-heading'>ABOUT SPONDIAS</h3>
        <div className='underline mx-auto'></div>
        <p className='justify-content'>
        Spondias is a company dedicated to personal service, tailoring our expertise in Corporate Training & Project Consulting. We feel it is important to take the time to assess your particular requirements to offer what we feel is the best solution for your requirement. Spondias is committed to offering its customers the best services and cutting-edge technologies to increase the customer's revenue stream. Our team has relevant experience in Requirement Analyzing, Designing, Planning, and implementing the project to ensure full control of the developing process. We want to give you the convenience of one-stop Solutions for all the customized requirements. Spondias' core portfolio comprises Project Consulting, Skill Gap Analysis, Corporate Training & Recruitment Solutions. We deliver a broad portfolio of Information technology and Knowledge process outsourcing services to clients in the Manufacturing, Financial Services, Healthcare, Communications, Transportation, and Retail industries and to Governments around the world.
        </p>
        <Link to='/about' className='btn btn-warning shadow'>Read More</Link>
      </div>
    </div> 
   </div>
   </section>

   {/* Our Vision ,Mission and Values */}
   <VMC/>
   </>
  )
}
