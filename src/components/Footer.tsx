import Image from "next/image"
import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

const navigation = {
    solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    social: [
        {
            name: 'Phone',
            href: 'tel:2505901266',
            icon: (props: any) => (
            <FontAwesomeIcon icon={faPhone} {...props}/>
            ),
        },
        {
            name: 'Gmail',
            href: 'mailto:hannsphotovideo@gmail.com',
            icon: (props: any) => (
            <FontAwesomeIcon icon={faEnvelope} {...props}/>
            ),
        },
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/hannsphotovideo',
            icon: (props: any) => (
            <FontAwesomeIcon icon={faFacebook} {...props}/>
            ),
            target: '_blank',
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/hannsphotovideo/',
            icon: (props: any) => (
            <FontAwesomeIcon icon={faInstagram} {...props}/>
            ),
            target: '_blank',
        },
    ],
  }
  
export default function Footer() {
    return (
        <footer aria-labelledby="footer-heading" className="bg-white">
            <h2 id="footer-heading" className="sr-only">
            Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-gray-900">Address</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li>
                                <span className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                4090 Shelbourne St. #104 (2F)
                                </span>
                            </li>
                            <li>
                                <span className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                Victoria, BC V8N 4P6
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <h3 className="text-sm font-semibold leading-6 text-gray-900">Phone</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li>
                                <span className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                250-590-1266 (Photo)
                                </span>
                            </li>
                            <li>
                                <span className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                250-477-2736 (Ink & Toner)
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <h3 className="text-sm font-semibold leading-6 text-gray-900">Hours</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li>
                                <span className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                Mon-Fri: 10am - 5pm
                                </span>
                            </li>
                            <li>
                                <span className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                Sat: 10am - 2pm
                                </span>
                            </li>
                            <li>
                                <span className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                Sun: Closed
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <Image src="/img/map.png" alt="Shop location placeholder image (To change later)" width={400} height={600} className="object-contain"></Image>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
                    <div className="flex space-x-8 md:order-2">
                    {navigation.social.map((item) => (
                        <Link key={item.name} href={item.href} target={item.target ? item.target : "_self"} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-5 w-5" />
                        </Link>
                    ))}
                    </div>
                    <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
                        &copy; 2024 Hanns Photo Video. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
  