"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Daashboard_stats() {
	const [nbInvoices, setNbInvoices] = useState(0);
	const [nbCompanies, setNbCompanies] = useState(0);
	const [nbContacts, setNbContacts] = useState(0);



	useEffect(() => {
		const fetchData = async () => {
			try {
				const invoicesResponse = await axios.get("http://localhost:3000/api/countInvoices");
				setNbInvoices(invoicesResponse.data.totalInvoices);
				const companiesResponse = await axios.get("http://localhost:3000/api/countCompanies");
				setNbCompanies(companiesResponse.data.totalCompanies);
				const contactsResponse = await axios.get("http://localhost:3000/api/countContacts");
				setNbContacts(contactsResponse.data.totalContacts);
			}
			catch (error) {
				console.error("Error fetching data:", error);
			}	
		}
		fetchData();
	}, []);


	return (
		<main className='dashboard-stats w-[507px] px-4 h-[232px] dashboard_drop-shadow'>
			<h3 className='text-2xl font-bold mb-6'>Statistics</h3>
			<ul className='flex flex-row justify-between  px-5'>
				<li>
					<div className='size-[80px] flex flex-col items-center justify-center text-white bg-[#4D4CAC] rounded-full'>
						<span className='font-black text-xs'>{nbInvoices}</span>
						<span className='font-black text-xs'>Invoices</span>
					</div>
				</li>
				<li>
					<div className='size-[80px] flex flex-col items-center justify-center text-white bg-[#9698D6] rounded-full'>
						<span className='font-black text-xs'>{nbContacts}</span>
						<span className='font-black text-xs'>Contacts</span>
					</div>
				</li>

				<li>
					<div className='size-[80px] flex flex-col items-center justify-center text-white bg-[#FF808B] rounded-full'>
						<span className='font-black text-xs'>{nbCompanies}</span>
						<span className='font-black text-xs'>Companies</span>
					</div>
				</li>
			</ul>
		</main>
	);
}
