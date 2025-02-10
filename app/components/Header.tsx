"use client";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (
        <main>
            <div className="bg-[#F9DE4E] bg-cover bg-no-repeat bg-fixed h-[287px] relative overflow-hidden">
                <header className="w-[82.85%] pt-[95px] mx-auto flex justify-between items-center">
                    <h2 className="font-logo-header">COGIP</h2>

                    <nav className="flex-grow">
                        <ul className="font-nav-header ml-14 flex flex-row gap-5">
                            <li className={`hover:border border-black p-2 ${pathname === '/' ? 'border border-black' : ''}`}>
                                <a href='/'>Home</a>
                            </li>
                            <li className={`hover:border border-black p-2 ${pathname === '/invoices' ? 'border border-black' : ''}`}>
                                <a href='/invoices'>Invoices</a>
                            </li>
                            <li className={`hover:border border-black p-2 ${pathname === '/companies' ? 'border border-black' : ''}`}>
                                <a href='/companies'>Companies</a>
                            </li>
                            <li className={`hover:border border-black p-2 ${pathname === '/contacts' ? 'border border-black' : ''}`}>
                                <a href='/contacts'>Contacts</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="font-nav-header flex flex-row gap-5">
                        <a href="/register">
                            <button className="bg-white w-[102px] h-[37px] rounded-[10px]">Sign up</button>
                        </a>
                        <a href="/login" className="mt-1.5">
                            <button>Login</button>
                        </a>
                    </div>
                </header>

                <picture
                    className="absolute top-[192px] left-1/2 translate-x-[-50%] w-[1300px] h-[114px] z-10">
                    <img src="/Home_Header/Rectangle.png" alt="illustration" className="w-full h-full object-contain"/>
                </picture>
            </div>
        </main>
    );
}