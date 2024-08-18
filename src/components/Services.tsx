import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faPassport, faPortrait, faFilm, faImage, faPaintBrush, faCartShopping, faAnglesRight } from "@fortawesome/free-solid-svg-icons"

const features = [
    {
        name: 'ID/Passport Photos',
        description:
        'We produce passport photos according to a variety of country specific requirements, including Canada, USA, Australia, Brazil, China, Europe, India, Iran, Japan, Korea, New Zealand, Philippine, Russia, Taiwan, Vietnam, and more!',
        icon: faPassport,
        // href: '/id-passport-photos',
        href: '#'
    },
    {
        name: 'Headshots & Portraits',
        description:
        "Business Headshots, Actor's Headshots, Linkedin Headshots, Profile Pictures, Family Portraits, Children's Portraits, Graduation Portraits.",
        icon: faPortrait,
        // href: '/headshots-portraits',
        href: '#'
    },
    {
        name: 'Film/Video/Audio Transfer',
        description:
        'Bring your videotapes and film reels to be transferred from their original analog formats into digital video.',
        icon: faFilm,
        // href: '/filmvideoaudio-transfer',
        href: '#'
    },
    {
        name: 'Photo Restoration/Edit',
        description:
        'Bring in your treasurable old memories, and Hanns Photo Video will bring them back to life with our high tech photo retouching.',
        icon: faImage,
        // href: '/photo-restorationedit',
        href: '#'
    },
    {
        name: 'Ink Refill',
        description:
        'We strongly recommend replacing or refilling empty ink cartridges as soon as they run out and refrain from printing on an empty cartridge, as this will damage your printhead.',
        icon: faPaintBrush,
        // href: '/ink-refill',
        href: '#'
    },
    {
        name: 'SHOP INK & TONER',
        description:
        'Save your money by buying compatible toner/ink cartridges at Hanns Photo Video.',
        icon: faCartShopping,
        // href: '/shop-ink-toner',
        href: '#'
    },
]

export default function Services() {
    return (
        <section id="services" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Our services
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We offer a wide range of services to help you with anything you need
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                        <Link href={feature.href} key={feature.name} className="p-6 cursor-pointer duration-100 hover:shadow-lg hover:border hover:border-gray-200 rounded-md">
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-300">
                                        <FontAwesomeIcon icon={feature.icon} aria-hidden="true" className="h-6 w-6" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                <dd className="mt-2 text-base leading-7 text-yellow-700 flex gap-2 items-center">Learn more <FontAwesomeIcon icon={faAnglesRight} className="w-4 h-4"/></dd>
                            </div>
                        </Link>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}
