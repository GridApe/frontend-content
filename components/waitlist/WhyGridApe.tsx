import Image from 'next/image';
import React from 'react'

const WhyGridApe = () => {
    return (
        <section className='w-full py-10 mb-10 dark:bg-black flex justify-center'>
            <div className="flex  flex-col-reverse md:flex-row justify-between gap-10 md:gap-20 w-[95%] md:w-[85%] items-center  dark:text-white relative">
                <div>
                    <h2 className='text-[#2E3192] mb-3'>Why GridApe</h2>
                    <div className=''>
                       <p className='text-justify mb-10'>GridApe is at the forefront of revolutionizing email marketing. Our mission is to empower businesses to create impactful email campaigns effortlessly.</p>

                        <p className='text-justify'>GridApe is not just a tool; it's your partner in crafting compelling narratives that resonate with your audience. Whether you're a seasoned marketer or just starting, GridApe simplifies the complex, making email marketing an enjoyable and effective experience.</p>

                    </div>
                </div>
                <div>
                    <Image src="/svg/whygridape.svg" alt='why grid ape' width={1200} height={100} />
                </div>
            </div>
        </section>
    )
}

export default WhyGridApe;