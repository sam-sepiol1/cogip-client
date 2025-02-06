"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

import Dashboard_header from '../components/Dashboard_header';
import Dashboard_menu from '../components/Dashboard_menu';
import Dashboard_stats from '../components/Dashboard_stats';
import Dashboard_data_fetch from '../components/Dashboard_data_fetch';

export default function Dashboard() {
	// Mock data for the dashboard
	// TODO : Delete this when backend is ready and connected

	const dataTestInvoices = [
		{
			invoiceNumber: 'BE0987 876 787',
			invoiceDate: '12/12/12',
			company: 'fSociety',
		},
		{
			invoiceNumber: 'BE0987 876 787',
			invoiceDate: '13/08/15',
			company: 'Dunder Mifflin',
		},
		{
			invoiceNumber: 'BE0987 876 787',
			invoiceDate: '25/03/20',
			company: 'fSociety',
		},
		{
			invoiceNumber: 'BE0987 876 787',
			invoiceDate: '15/01/23',
			company: 'fSociety',
		},
	];

	const dataTestCompanies = [
		{
			companyName: 'fSociety',
			TVA: 'US456 654 321',
			country: 'United States',
		},
		{
			companyName: 'Dunder Mifflin',
			TVA: 'BE0987 876 787',
			country: 'Belgium',
		},
		{
			companyName: 'Acme Corp',
			TVA: 'NE 676 676 676',
			country: 'Netherlands',
		},
		{
			companyName: 'Heisenberg',
			TVA: 'BE0987 876 787',
			country: 'Belgium',
		},
	];

	const [contacts, setContacts] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get('http://localhost:3000/api/contact');
			const data = response.data;
			const filteredData = data.map((contact: { name: unknown; phone: unknown; email: unknown }) => ({
				name: contact.name,
				phone: contact.phone,
				email: contact.email,
			}));

			setContacts(filteredData);
			console.log('Fetched contacts');
			
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	useEffect(() => {
		(async () => { 
			await fetchData();
		})();
	}, []);

	return (
		<main>
			<div className='flex h-screen'>
				<Dashboard_menu />
				<div className='flex-1 overflow-y-auto ml-[300px]'>
					<Dashboard_header />
					<div className='grid grid-cols-2 gap-8 z-30 absolute ml-12'>
						<div className='flex flex-col gap-8'>
							<Dashboard_stats />
							<Dashboard_data_fetch title='Last Contacts' columns={['Name', 'Phone', 'Email']} data={contacts} />
						</div>
						<div className='flex flex-col gap-8 '>
							<Dashboard_data_fetch title='Last Invoices' columns={['Invoice Number', 'Invoice Date', 'Company']} data={dataTestInvoices} />
							<Dashboard_data_fetch title='Last Companies' columns={['Company Name', 'TVA', 'Country']} data={dataTestCompanies} />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
