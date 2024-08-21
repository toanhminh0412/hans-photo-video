import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
    return (
        <section id="hero" className="bg-gray-900">
            <div className="relative isolate overflow-hidden pt-14">
                <div>
                    <Image
                        alt=""
                        src="/img/old-camera.jpg"
                        fill
                        className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 opacity-80 -z-10"></div>
                </div>
                <div className="mx-auto max-w-2xl py-32 px-8 md:px-0 sm:py-48 lg:py-56 z-20">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Hanns Photo Video Inkject
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            A local, family-run business located in Victoria, BC since 2011. Committed to provide excellent, quality service to all.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="#services"
                            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                        >
                            Our services
                        </Link>
                        <Link href="#contact-us" className="text-sm font-semibold leading-6 text-white">
                            Contact us <span aria-hidden="true">→</span>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
