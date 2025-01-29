"use client";
import { usePathname } from "next/navigation";

export default function Home_header() {
	const pathname = usePathname();

	return (
		<main>
			<div className=' bg-[url("/Home_Header/background.svg")] bg-cover bg-no-repeat'>
				<header className='flex gap-10 p-20 size-auto '>
					<h2 className='text-3xl font-bold'> COGIP </h2>
					<nav className='content-center'>
						<ul className='flex flex-row gap-4 '>
							<li className={`hover:border border-black p-2 ${pathname === '/' ? 'border border-black' : ''}`}>
								<a href='/home'>Home</a>
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
				<div className='hero-section flex flex-row justify-center items-center'>
					<h1 className='text-5xl font-bold flex p-20 flex-1 uppercase'>Manage your customers and invoices easily</h1>
					<picture className='flex-1'>
						<img src='/Home_Header/hero-section_illustration.svg' alt='illustration' />
					</picture>
				</div>
			</div>
		</main>
	);
}
