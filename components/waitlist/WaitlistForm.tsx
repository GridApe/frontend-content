import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { bgStyle } from '@/interfaces/types';

const WaitlistForm = () => {
  const BgStyle: bgStyle = {
    backgroundImage: "url('/svg/chair.svg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className='w-full flex justify-center'>
      <div className="rounded-t-[40px] md:rounded-t-[80px] w-[95%] md:w-[85%] bg-[#212360] dark:text-white relative" style={BgStyle}>
      <div className='absolute w-full h-full bg-[#212360] bg-opacity-60 rounded-t-[40px] md:rounded-t-[80px] -z-10'></div>
        <div className='content my-10 md:my-60'>
          <h1 className='text-center mb-5 leading-4 text-white'>Join our waitlist</h1>
          <p className='text-center mb-10 text-white px-2'>
            Ready to Craft, Connect, and Captivate?<br />
            Try GridApe today and redefine your approach to email marketing.
          </p>
          <form className=' flex justify-center px-5'>
          <div className='flex justify-center items-center w-[80%] md:w-[35%] bg-white rounded-md'>
              <Button className='py-6 bg-[#00C165] hover:bg-[#2E3192] text-white'>Notify me</Button>
              <Input className='focus:outline-none focus:border-none focus:ring-0 py-6' />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default WaitlistForm;
