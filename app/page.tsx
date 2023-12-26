import FAQ from "@/components/waitlist/FAQ";
import Footer from "@/components/waitlist/Footer";
import Header from "@/components/waitlist/Header";
import Hero from "@/components/waitlist/Hero";
import WaitlistForm from "@/components/waitlist/WaitlistForm";
import WhyGridApe from "@/components/waitlist/WhyGridApe";
import React from "react"

const page = () => {
	return (
		<>
			<Header />
			<Hero />
			<WhyGridApe />
			<WaitlistForm />
			<FAQ />
			<Footer />
		</>
	)
}

export default page;
