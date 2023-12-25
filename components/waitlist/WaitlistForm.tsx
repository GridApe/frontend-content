"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { bgStyle } from '@/interfaces/types';
import AOS from 'aos';
import "aos/dist/aos.css"
import * as z from "zod";
import { toast } from 'react-hot-toast';


const emailSchema = z.string().email('Must be a valid email address');
const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const BgStyle: bgStyle = {
    backgroundImage: "url('/svg/chair.svg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  const handleChange = (e: any) => {
    setEmail(e.target.value);
    setErrorMessage(null);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      emailSchema.parse(email);
      toast.success("Waitlist joined successfully")
      setTimeout(() => {
        setEmail("")
      }, 100)
    } catch (error: any) {
      setErrorMessage(error.issues[0].message);
      toast.error(error.issues[0].message)
    }
  };

  return (
    <section id='waitlist' className='w-full overflow-x-hidden flex justify-center' data-aos="fade-left">
      <div className="rounded-t-[40px] md:rounded-t-[80px] w-[95%] md:w-[85%]  bg-[#212360]  dark:text-white relative" style={BgStyle}>
        <div className='absolute w-full h-full bg-[#212360] bg-opacity-60 rounded-t-[40px] md:rounded-t-[80px] z-10'></div>
        <div className='my-10 md:my-60 relative z-20'>
          <h1 className='text-center mb-5 leading-4 text-white'>Join our waitlist</h1>
          <p className='text-center mb-10 text-white px-2'>
            Ready to Craft, Connect, and Captivate?<br />
            Try GridApe today and redefine your approach to email marketing.
          </p>
          <form className='flex justify-center px-5' onSubmit={handleSubmit}>
            <div className='flex justify-center items-center w-[80%] md:w-[35%] bg-white rounded-md'>
              <Button className='py-6 bg-[#00C165] hover:bg-[#01CE6C] text-white border-[1px]' type='submit'>Notify me</Button>
              <Input
                className={`focus:outline-none focus:border-none focus:ring-4 py-6 ${errorMessage ? 'border-red-500 border-[1px]' : ''}`}
                placeholder='Enter your email here'
                value={email}
                onChange={handleChange} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default WaitlistForm;
