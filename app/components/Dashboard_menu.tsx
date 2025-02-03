'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Dashboard_menu() {
	const pathname = usePathname();

	return (
		<aside className=' relative dashboard_menu h-screen w-[300px] pt-16'>
			<div className='profile_infos flex flex-col items-center'>
				<picture className='mb-4'>
					<img src='Dashboard/Dashboard_profile-picture.png' alt='Profile picture' />
				</picture>
				<span className='font-black text-2xl dashboard-menu-name'>Henry</span>
				<span className='font-black text-2xl dashboard-menu-name'>Georges</span>
			</div>
			<hr className='w-[95%] mt-10' />
			<div className='nav flex'>
				<ul className='flex flex-col gap-4 mt-14 ml-10 w-full dashboard-menu-items'>
					<li className='dashboard_menu-item flex gap-7 w-full'>
						<Image src='/Dashboard/Dashboard_dashboard-icon.svg' alt='Dashboard icon' width={22} height={22} />
						<a className={`hover:font-bold w-full ${pathname === '/dashboard' ? ' font-semibold relative selected' : ''}`} href='/dashboard'>
							Dashboard
						</a>
					</li>
					<li className='dashboard_menu-item flex gap-7'>
						<Image src='/Dashboard/Dashboard_invoices-icon.svg' alt='Invoice icon' width={22} height={22} />
						<a className={`hover:font-bold w-full ${pathname === '/dashboard_invoices' ? 'font-semibold relative selected' : ''}`} href='/dashboard_invoices'>
							Invoices
						</a>
					</li>
					<li className='dashboard_menu-item flex gap-7 w-full'>
						<Image src='/Dashboard/Dashboard_companies-icon.svg' alt='Companies icon' width={22} height={22} />
						<a className={`hover:font-bold w-full ${pathname === '/dashboard_companies' ? 'font-semibold relative selected' : ''}`} href='/dashboard_companies'>
							Companies
						</a>
					</li>
					<li className='dashboard_menu-item flex gap-7 w-full'>
						<Image src='/Dashboard/Dashboard_contacts-icon.svg' alt='Contacts icon' width={22} height={22} />
						<a className={`hover:font-bold w-full ${pathname === '/dashboard_contacts' ? 'font-semibold relative selected' : ''}`} href='/dashboard_contacts'>
							Contacts
						</a>
					</li>
				</ul>
			</div>
			<div className='logout absolute bottom-[10px] w-full dashboard-menu-logout'>
				<hr className='w-[95%] mb-2' />
				<div className='flex items-center justify-between px-4'>
					<Image src='/Dashboard/Dashboard_profile-picture.png' alt='Profile picture' width={48} height={48} />
					<span className='text-xl text-[#9698D6]'>
						<a href='#'> Logout </a>
					</span>
				</div>
			</div>
		</aside>
	);
}
