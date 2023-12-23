import FAQ from "@/components/waitlist/FAQ";
import Hero from "@/components/waitlist/Hero";
import WaitlistForm from "@/components/waitlist/WaitlistForm";
import WhyGridApe from "@/components/waitlist/WhyGridApe";
import React from "react"

const page = () => {
	return (
		<>
		<Hero />
		<WhyGridApe/>
		<WaitlistForm/>
		<FAQ />
		</>
)
}

export default page;
