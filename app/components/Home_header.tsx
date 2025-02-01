"use client";
import { usePathname } from "next/navigation";

export default function Home_header() {
	const pathname = usePathname();

	return (
		<main>
			<div className="bg-[#F9DE4E] bg-cover bg-no-repeat bg-fixed h-[787px] relative overflow-hidden">
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
						<button className="bg-white w-[102px] h-[37px] rounded-[10px]">Sign up</button>
						<button>Login</button>
					</div>
				</header>

				<picture
					className="absolute top-[676px] left-1/2 translate-x-[-50%] w-[1300px] h-[114px] z-10">
					<img src="/Home_Header/Rectangle.png" alt="illustration" className="w-full h-full object-contain"/>
				</picture>

				<div className="hero-section flex flex-row justify-center items-center">
					<h1 className="font-title-slogan absolute top-[290px] left-[136px] uppercase w-[595px] text-center leading-tight">
						Manage your customers and invoices easily
					</h1>
					<picture className="absolute top-[142px] left-[681px]">
						<img src="/Home_Header/hero-section_illustration.svg" alt="illustration"/>
					</picture>
				</div>
			</div>
		</main>
	);
}