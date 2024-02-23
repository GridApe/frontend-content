// Import necessary dependencies and components
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { bgStyle } from '@/interfaces/types';
import AOS from 'aos';
import "aos/dist/aos.css";
import * as z from "zod";
import { toast } from 'react-hot-toast';
import { joinWaitList } from '@/http/api/axios';

// Define email schema using zod for validation
const emailSchema = z.string().email('Must be a valid email address');

// Functional component for the WaitlistForm
const WaitlistForm = () => {
  // State for storing email and error message
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Background style for the form section
  const BgStyle: bgStyle = {
    backgroundImage: "url('/svg/chair.svg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  // Initialize AOS library on component mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'linear',
    });
  }, []);

  // Handle input change
  const handleChange = (e: any) => {
    setEmail(e.target.value);
    setErrorMessage(null);
  };

  // Handle form submission
  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setEmail("");
  //   }, 100);
  //   try {
  //     // Validate email using the defined schema
  //     emailSchema.parse(email);
  //     const res = await joinWaitList(email);
  //     if (res.success) {
  //       toast.success(res.message);
  //     } else {
  //       // Display error message
  //       setErrorMessage(res.message);
  //       toast.error(res.message);
  //       console.log(res.message);
  //     }
  //   } catch (error: any) {
  //     // Display error message if validation fails
  //     console.log(error);
  //     setErrorMessage(error.issues ? error.issues[0].message : 'Invalid email');
  //     toast.error(error.issues ? error.issues[0].message : 'Invalid email');
  //   } finally {
  //     // Set loading to false after a delay
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //   }
  // };

  const handleSubmitNew = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

// document
//   .querySelector("form")
//   .addEventListener("submit", handleSubmitNew);


  // JSX structure for the WaitlistForm component
  return (
    <section id='waitlist' className='w-full flex justify-center' data-aos="fade-up">
      <div className="rounded-t-[40px] md:rounded-t-[80px] w-[95%] md:w-[85%]  bg-[#212360]  dark:text-white relative" style={BgStyle}>
        <div className='absolute w-full h-full bg-[#212360] bg-opacity-60 rounded-t-[40px] md:rounded-t-[80px] z-10'></div>
        <div className='my-10 md:my-60 relative z-20'>
          <h1 className='text-center mb-5 leading-4 text-white'>Join our waitlist</h1>
          <p className='text-center mb-10 text-white px-2'>
            Ready to Craft, Connect, and Captivate?<br />
            Try Gridape today and redefine your approach to email marketing.
          </p>
          <form className='flex justify-center px-5' method="post" onSubmit={handleSubmitNew} data-netlify="true">
            <div className='flex justify-center items-center w-[80%] md:w-[35%] bg-white rounded-md'>
              <Button className='py-6 bg-[#00C165] hover:bg-[#01CE6C] text-white' type='submit' disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Notify me'}
              </Button>
              <input type="hidden" name="form-name" value="pizzaOrder" />
              <Input
                type="email"
                className={`focus:outline-none focus:border-none focus:ring-4 py-6`}
                placeholder='Enter your email here' />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// Export the WaitlistForm component as the default export
export default WaitlistForm;
