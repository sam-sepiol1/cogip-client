"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer className="w-[75.76%] mx-auto flex flex-col items-center justify-start mt-[100px] mb-[100px] border-t-2 border-[#F9DE4E]">
            <div className="w-full flex justify-between items-center mt-6">
                <h2
                    className="footer-logo text-5xl font-bold text-[#434138] border-4 ml-4 px-1.5 py-0.5"
                    style={{borderColor: "#F9DE4E"}}>
                    COGIP
                </h2>

                <div className="w-[460px] h-[128px] flex flex-col items-start mt-6 text-left">
                    <div className="flex items-center space-x-2">
                        <Image src="/Footer/round-place-24px.png" alt="Location" width={24} height={24}
                               className="shrink-0"/>
                        <p className="footer-nav text-[#434138] mb-2">
                            Square des Martyrs, 6000 Charleroi
                        </p>
                    </div>

                    <div className="flex items-center mt-2 space-x-20">
                        <div className="flex self-start space-x-2">
                            <Image src="/Footer/round-phone-24px.png" alt="Phone" width={24} height={24}
                                   className="shrink-0"/>
                            <p className="footer-nav">(123) 456-7890</p>
                        </div>

                        <div className="flex self-end space-x-2">
                            <Image src="/Footer/round-local-printshop-24px.png" alt="Fax" width={24} height={24}
                                   className="shrink-0"/>
                            <p className="footer-nav">(123) 456-7890</p>
                        </div>
                    </div>

                    <div className="flex items-center ml-1 mt-4 space-x-5">
                        <p className="footer-nav text-[#434138] mt-2">Social Media</p>
                        <Image src="/Footer/facebook%20black.1.png" alt="Facebook" width={24} height={24}
                               className="shrink-0"/>
                        <Image src="/Footer/twitter.png" alt="Twitter" width={24} height={24} className="shrink-0"/>
                        <Image src="/Footer/linkedin%20black.1.png" alt="LinkedIn" width={24} height={24}
                               className="shrink-0"/>
                        <Image src="/Footer/youtube%20color.1.png" alt="YouTube" width={24} height={24}
                               className="shrink-0"/>
                        <Image src="/Footer/instagram%20black.1.png" alt="Instagram" width={24} height={24}
                               className="shrink-0"/>
                        <Image src="/Footer/googleplus%20black.1.png" alt="Google+" width={24} height={24}
                               className="shrink-0"/>
                        <Image src="/Footer/pinterest%20color.1.png" alt="Pinterest" width={24} height={24}
                               className="shrink-0"/>
                        <Image src="/Footer/rss%20black.1.png" alt="RSS" width={24} height={24} className="shrink-0"/>
                    </div>

                </div>

            </div>

            <div className="w-full h-[1px] bg-[#7BB9FC] mt-2"></div>
            <div className="w-full flex justify-between items-center mt-6">
                <nav>
                    <ul className="flex space-x-6 text-lg font-medium">
                        {[
                            {path: "/", label: "HOME"},
                            {path: "/invoices", label: "INVOICES"},
                            {path: "/companies", label: "COMPANIES"},
                            {path: "/contacts", label: "CONTACTS"},
                        ].map(({path, label}) => (
                            <li className="footer-nav" key={path}>
                                <Link href={path} className={pathname === path ? "text-[#0A142F]" : ""}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li className="footer-nav text-[#0A142F]">PRIVACY POLICY</li>
                    </ul>
                </nav>

                <div className="footer-nav self-end ml-auto">
                    Copyright © {new Date().getFullYear()} • COGIP Inc.
                </div>

            </div>
        </footer>
    );
}