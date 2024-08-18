"use client";

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react";

export default function Navbar() {
    const [navbarMode, setNavbarMode] = useState('dark');

    useEffect(() => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setNavbarMode('dark');
                    } else {
                        setNavbarMode('light');
                    }
                },
                {
                threshold: 0.1, // Adjust this value as needed
                }
            );
            observer.observe(heroSection);

            return () => {
                observer.unobserve(heroSection);
            };
        }
    }, []);

    return (
        <div className={`navbar fixed top-0 inset-x-0 z-50 ${navbarMode === "dark" ? "bg-gray-900 bg-opacity-0 text-white" : "bg-white text-black shadow-lg"}`}>
            <div className="flex-1">
                {/* <Link href="#" className="btn btn-ghost text-xl">hannsphotovideo.com</Link> */}
                <Link href="#"><Image src="/img/logo.png" alt="logo" width={50} height={50} /></Link>
                <Link href="#" className="btn btn-ghost text-xl hidden md:flex">
                    hannsphotovideo.com
                </Link>
            </div>

            {/* Mobile navbar items */}
            <div className="dropdown dropdown-end md:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <ul tabIndex={0} className={`dropdown-content menu ${navbarMode === "dark" ? "bg-base-100" : "bg-white"} rounded-box z-[1] w-80 p-2 shadow`}>
                    <li>
                        <h2 className="menu-title text-gray-400">Services</h2>
                        <ul>
                            <li><Link href="#">ID/Passport Photos</Link></li>
                            <li><Link href="#">Headshots & Portraits</Link></li>
                            <li><Link href="#">Film/Video/Audio Transfer</Link></li>
                            <li><Link href="#">Photo Restoration/Edit</Link></li>
                            <li><Link href="#">Ink Refill</Link></li>
                            <li><Link href="#">SHOP INK & TONER</Link></li>
                        </ul>
                    </li>
                    <li><Link href="#">Contact us</Link></li>
                </ul>
            </div>

            {/* Laptop navbar items */}
            <div className="flex-none hidden md:block">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>Services</summary>
                            <ul className={`${navbarMode === "dark" ? "bg-base-100" : "bg-white"} rounded-t-none p-2 right-0 w-60`}>
                                <li><Link href="#">ID/Passport Photos</Link></li>
                                <li><Link href="#">Headshots & Portraits</Link></li>
                                <li><Link href="#">Film/Video/Audio Transfer</Link></li>
                                <li><Link href="#">Photo Restoration/Edit</Link></li>
                                <li><Link href="#">Ink Refill</Link></li>
                                <li><Link href="#">SHOP INK & TONER</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link href="#">Contact us</Link></li>
                </ul>
            </div>
        </div>
    )
}