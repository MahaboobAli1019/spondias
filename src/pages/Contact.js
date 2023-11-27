import React from 'react'

export default function Contact() {
  return (
    <>
    <section className='py-4 bg-info'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 my-auto'>
            <h4>CONTACT</h4>
          </div>
          <div className='col-md-8 my-auto'>
            <h6 className='float-end'>
              HOME / CONTACT
            </h6>
          </div>
        </div>
      </div>
    </section>

    <section className='section'>
      <div className='container'>
        <div className='card shadow'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-6'>
                <h6>Contact Form</h6>
                <hr/>
                <div className='form-group'>
                  <label className='mb-1'>Name</label>
                  <input type='text' className='form-control' placeholder='Enter Your Name'/>
                </div>
                <div className='form-group'>
                  <label className='mb-1'>Email</label>
                  <input type='email' className='form-control' placeholder='Enter Your Name'/>
                </div>
                <div className='form-group'>
                  <label className='mb-1'>Phone Number</label>
                  <input type='text' className='form-control' placeholder='Enter Your Name'/>
                </div>
                <div className='form-group'>
                  <label className='mb-1'>Message</label>
                  <textarea rows='3' className='form-control' placeholder='Type Your Message.....'></textarea>
                </div>
                <div className='form-group py-3'>
                  <button type='button' className='btn btn-primary shadow w-100'>Send Message</button>
                </div>
              </div>
              <div className='col-md-6'>
                <div>
                  <h6 className='main-heading'>CORPORATE OFFICE –UK</h6>
                  <div className='underline'></div>
                  <p>
                  # 20-22 Wenlock Road, London, England, N1 7GU<br/>
                  +44 333 006 4609
                  </p>
                </div>
                <div>
                  <h6 className='main-heading'>CORPORATE OFFICE –INDIA</h6>
                  <div className='underline'></div>
                  <p>
                  # Chadika vari Street,Jagannaickpur, Kakinada, 533002<br/>
                  +91 79977 11112 +91 79977 11114
                  </p>
                </div>
                <div>
                  <h6 className='main-heading'>Corporate Training</h6>
                  <div className='underline'></div>
                  <p>
                  nabil@spondias.com
                  </p>
                </div>
                <div>
                  <h6 className='main-heading'>HR Staffing</h6>
                  <div className='underline'></div>
                  <p>
                  staffing@spondias.com
                  </p>
                </div>
                <div>
                  <h6 className='main-heading'>Training Infra</h6>
                  <div className='underline'></div>
                  <p>
                  infra@spondias.com
                  </p>
                </div>
                <div>
                  <h6 className='main-heading'>Careers</h6>
                  <div className='underline'></div>
                  <p>
                  careers@spondias.com<br/>
                  Drop a mail for any career-related queries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
