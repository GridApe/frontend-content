"use client"
import FAQ from "@/components/waitlist/FAQ/FAQ";
import Hero from "@/components/waitlist/Hero";
import WaitlistForm from "@/components/waitlist/WaitlistForm";
import WhyGridApe from "@/components/waitlist/WhyGridApe";
import React, { useEffect, useState } from "react"
import Loader from "@/components/Loader";


const Page = () => {
	const [isLoading, setIsLoading] = useState<Boolean>(true)
	
	useEffect(() => {
		const delay = setTimeout(() => {
			setIsLoading(false);
			clearTimeout(delay);
		}, 2000);
	}, []);

	return (
		<>
			{isLoading &&
				<Loader />
			}
			<Hero />
			<WhyGridApe />
			<WaitlistForm />
			<FAQ />
		</>
	)
}

export default Page;
