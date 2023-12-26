import { Back, Previous } from "iconsax-react"
import Image from "next/image"
import Link from "next/link"

const notFound = () => {
    return (
        <div className="min-h-[75vh] text-center relative py-[20px] flex items-center justify-center">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-lg-7 m-auto">
                        <h1>Oops! You&apos;re on the wrong place.</h1>                        <p className="me-xxl-5 ms-xxl-5 py-5">
                            Unable to find what you&apos;re looking for? Begin your journey from our Homepage.
                        </p>
                        <Link href="/" className="btn-sm mb-10 bg-[#2E3192] text-white whitespace-nowrap  ">
                            <Back size={20} /> Back to home
                        </Link>
                    </div>
                </div>
                <Image
                    width={640}
                    height={417}

                    src="/svg/ils_06.svg"
                    alt="404 Image"
                    className="m-auto"
                />
            </div>

            <Image
                width={1915}
                height={674}
                src="/svg/shape_178.svg"
                alt="shape"
                className="shapes shape-one w-100 absolute -z-[1] bottom-0 right-0"
            />
        </div>
    )
}

export default notFound