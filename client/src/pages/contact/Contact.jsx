import React from 'react'
import "./contact.css";

const demos = {
    soundcloud:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8923028658382!2d80.22654731433366!3d12.914642919620977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c7b8559e059%3A0xe0620ba55101330f!2sIVTL%20(InfoView%20TechnoLogies)%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1639022353980!5m2!1sen!2sin" width="350" height="360" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',    
  };

  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }

function contact() {
    return (
        
        <>
        <div>
            <div className="contact_main">
            <div className="com_img" >
                <img className="company_img" src="https://edge.canon.co.in/contactus/corporate/images/corporate/contact-banner.jpg" alt='company_img'></img>
            </div>
            <div>
            <h1 className="centered">Get in Touch</h1>
            <p className="tags">" Want to get in touch? We'd Love to hear from you. Here's how you can reach us... "</p>
            </div>
            <div className="grid-container">
                <div className="grid-item">

                <div className="card">
                    <img className="contact_photo" src="https://image.shutterstock.com/image-photo/businessman-workplace-think-business-investment-600w-1232899081.jpg" alt="img"/>
                    <div className="container">
                        <h3 className="heading_tag">Contact Details</h3>
                        <p className="list_details"><span className="list_details_heading">Mobile number :</span> +91-9874563210</p>
                        <p className="list_details"><span className="list_details_heading">Address :</span> 123 Main Street, New York, NY 10030</p>
                    </div>
                    <button className="contact_button">Contact now!</button>
                </div>

                </div>
                <div className="grid-item">

                <div className="card">
                    <img className="contact_photo" src="https://image.shutterstock.com/image-photo/smiling-telemarketing-asian-woman-working-600w-1673711491.jpg" alt="img"/>
                    <div className="container">
                        <h3 className="heading_tag">Help & Support</h3>
                        <p className="list_details"> Our supporting team is spread across the globe to give you access  faster, so you could write your blog without problem</p>
                    </div>
                    <button className="contact_button">Ask Help!</button>
                </div>

                </div>
                <div className="grid-item">
                
                <div className="card">
                    <div className="container">
                    <Iframe iframe={demos["soundcloud"]} allow="autoplay" />
                        <h3 className="heading_tag">Map Details</h3>
                        <p className="list_details">View in Map</p>
                    </div>
                </div>

                </div>    
            </div>

            </div>
        </div>
        </>
    )
}

export default contact
