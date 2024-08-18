import Image from "next/image"
import ImagesCarousel from "./ui/ImagesCarousel"

export default function WhoWeAre() {
    const imagesSrc = [
        '/img/studio.jpg',
        '/img/studio-2.jpg',
        '/img/studio-3.jpg',
        '/img/studio-4.jpg',
    ]

    return (
        <section id="whoweare" className="bg-gray-100 pb-12 md:pb-24 lg:py-0">
            <div className="w-full flex flex-col lg:flex-row gap-8 items-center">
                <ImagesCarousel images={imagesSrc} className="w-full lg:w-1/2 aspect-video lg:aspect-[5/4] lg:min-h-[600px]"/>
                <div className="w-4/5 lg:w-1/2 lg:pl-4 lg:pr-12">
                    <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Who we are
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Hanns Photo Video is a local, family-run business located in Victoria, BC. Since establishing our first store in 2011, we have committed to provide excellent, quality service to all.
                        <br/><br/>
                        Since 2019, Hanns Photo Video has also taken over University Heights Inkjet.
                        <br/><br/>
                        Originally in University Heights Mall, Hanns Photo Video moved in May 2022 to a bigger space in the Three Corners Professional Centre to continue better serving our community.
                    </p>
                </div>
            </div>
        </section>
    )
}