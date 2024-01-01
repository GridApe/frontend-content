// components/UnsubscribePage.js
'use client'
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '@/components/waitlist/Footer';
import Header from '@/components/waitlist/Header';
import { Input } from '@/components/ui/input';

const EmailUnsubscribePage = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e: any) => {
        setEmail(e.target.value);
        setErrorMessage(null);
    };

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <>

            <Header />
            <section className="relative h-screen flex items-center">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
                        <span className="text-[#2E3192]">Unsubscribe</span> from Gridape
                    </h1>
                    <p className="text-lg text-gray-700 mb-8" data-aos="fade-up" data-aos-delay="200">
                        We&apos;re sorry to see you go. Please confirm your decision to unsubscribe.
                    </p>
                    <form
                        action="#"
                        method="POST"
                        className="max-w-md mx-auto bg-[#ffffff] p-8 rounded-md shadow-md"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        {/* <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 mb-4"
                        /> */}
                        <Input
                            className={`focus:outline-none  mb-3 focus:border-none ring-2 focus:ring-4 py-6`}
                            type='email'
                            placeholder='Enter your email here'
                            value={email}
                            onChange={handleChange} />
                        <button
                            type="submit"
                            className="bg-[#212360] text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
                        >
                            Unsubscribe
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default EmailUnsubscribePage;