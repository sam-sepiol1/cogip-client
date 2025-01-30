"use client";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (
        <main>
        <div className=' bg-[url("/Home_Header/background.svg")] bg-cover bg-no-repeat'>
            <header className='flex gap-10 p-20 size-auto '>
                <h2 className='text-3xl font-bold'> COGIP </h2>
                <nav className='content-center'>
                    <ul className='flex flex-row gap-4 '>
                        <li className={`hover:border border-black p-2 ${pathname === '/' ? 'border border-black' : ''}`}>
                            <a href='/'>Home</a>
                        </li>
                        <li className={`hover:border border-black p-2 ${pathname === '/invoices' ? 'border border-black' : ''}`}>
                            <a href='/invoices'>Invoice</a>
                        </li>
                        <li className={`hover:border border-black p-2 ${pathname === '/companies' ? 'border border-black' : ''}`}>
                            <a href='/companies'>Companies</a>
                        </li>
                        <li className={`hover:border border-black p-2 ${pathname === '/contacts' ? 'border border-black' : ''}`}>
                            <a href='/contacts'>Contacts</a>
                        </li>
                    </ul>
                </nav>
                <div className='flex flex-row gap-4 ml-auto'>
                    <button className='bg-white px-3 py-1 rounded-xl'> Sign Up </button>
                    <button> Login </button>
                </div>
            </header>
        </div>
    </main>
    )
}