import React, { useRef } from 'react';
import {  AiOutlinePhone  } from 'react-icons/ai';
import { MdOutlineForwardToInbox } from 'react-icons/md';
import { GrLocation  } from 'react-icons/gr';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_u7oh7lc', 'template_b5w5wh4', form.current, 'WoZaV_ZGijOfT8x-7')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className='lg:w-9/12 mx-auto mt-8'>
            <div className='grid lg:grid-cols-2 gap-3'>
                <div className='contact-head'>
                <h1 className='text-yellow-400 text-xl lg:text-3xl font-semibold my-2 uppercase'>Let's get in touch</h1>
                <p className='lg:text-lg font-semibold'>Contact us to buy jewelry or if you have any questions.</p>
                <div className='my-3'>
                    <div className='flex items-center mb-2'>
                        <GrLocation className='text-2xl mr-4'></GrLocation>
                        <span>Chittagong, Bangladesh</span>
                    </div>
                    <div className='flex items-center mb-2'>
                        <MdOutlineForwardToInbox className='text-2xl mr-4'></MdOutlineForwardToInbox>
                        <span>mrrafi5869@gmail.com</span>
                    </div>
                    <div className='flex items-center mb-2'>
                        <AiOutlinePhone className='text-2xl mr-4'></AiOutlinePhone>
                        <span>+8801743560878</span>
                    </div>
                    <p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.6548552982763!2d91.81920021534744!3d22.44201294340595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd7e81074f26f%3A0x2664ca14d724a660!2sChowdhury%20Hat%20Nursing%20Home!5e0!3m2!1sen!2sbd!4v1670859005813!5m2!1sen!2sbd" className='w-full rounded-lg mt-4 h-22' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </p>
                    </div>
                </div>
                
                <div className='contact-head'>
                    <h1 className='text-yellow-400 text-lg lg:text-3xl font-semibold my-2'>CONTACT WITH ME</h1>
                    <form ref={form} onSubmit={sendEmail}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 mb-1 lg:mb-3'>
                        <input type="name" name='first_name' placeholder="Your Name" className="input input-bordered w-full" />
                        <input type="text" name='subject' placeholder="Subject" className="input input-bordered w-full" />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-1'>
                        <input type="email" name='to_email' placeholder="Mail" className="input input-bordered w-full" />
                        <input type="phone" name='phone' placeholder="Phone" className="input input-bordered w-full" />
                    </div>
                    <textarea className="textarea textarea-bordered w-full my-3 resize-none" name='message' rows="4" placeholder="Message"></textarea>
                    <button className='btn rounded-md w-full hover:bg-yellow-400'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;