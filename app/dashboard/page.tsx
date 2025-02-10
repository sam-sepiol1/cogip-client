'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

import Dashboard_header from '../components/Dashboard_header';
import Dashboard_menu from '../components/Dashboard_menu';
import Dashboard_stats from '../components/Dashboard_stats';
import Dashboard_data_fetch from '../components/Dashboard_data_fetch';

interface Contact {
	name: string;
	phone: string;
	email: string;
}

interface Invoice {
	ref: string;
	due_date: string;
	company: string;
}

interface Company {
	name: string;
	tva: string;
	country: string;
}

export default function Dashboard() {
	const [stats, setStats] = useState({
		nbInvoices: 0,
		nbCompanies: 0,
		nbContacts: 0,
	});
	const [contacts, setContacts] = useState([]);
	const [invoices, setInvoices] = useState([]);
	const [companies, setCompanies] = useState([]);

	const fetchAllData = async () => {
		try {
			const invoicesResponse = await axios.get('http://localhost:3000/api/countInvoices');
			const companiesResponse = await axios.get('http://localhost:3000/api/countCompanies');
			const contactsResponse = await axios.get('http://localhost:3000/api/countContacts');
			const contacts = await axios.get('http://localhost:3000/api/contact');
			const invoices = await axios.get('http://localhost:3000/api/paginatedInvoices/5/0');
			const companies = await axios.get('http://localhost:3000/api/company');

			return {
				nbInvoices: invoicesResponse.data.total,
				nbCompanies: companiesResponse.data.total,
				nbContacts: contactsResponse.data.total,
				contacts: contacts.data.data,
				invoices: invoices.data.data,
				companies: companies.data.data,
			};
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const fetchData = async () => {
		try {
			const response = await fetchAllData();
			if (response) {
				setStats({
					nbInvoices: response.nbInvoices,
					nbCompanies: response.nbCompanies,
					nbContacts: response.nbContacts,
				});

				const formattedContacts =
					response.contacts?.map((contact: Contact) => ({
						name: contact.name,
						phone: contact.phone,
						email: contact.email,
					})) || [];

				const formattedInvoices = response.invoices?.map((invoice: Invoice) => ({
					invoiceNumber: invoice.ref,
					dueDates: new Date(invoice.due_date).toLocaleDateString('fr-FR'),
					company: invoice.company,
				})) || [];

				const formattedCompanies = response.companies?.map((company: Company) => ({
					name: company.name,
					tva: company.tva,
					country: company.country,
				}));

				setContacts(formattedContacts);
				setInvoices(formattedInvoices);
				setCompanies(formattedCompanies);
			}
		} catch (error) {
			console.error('Erreur lors de la récupération des données:', error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<main>
			<div className='flex h-screen'>
				<Dashboard_menu />
				<div className='flex-1 overflow-y-auto ml-[300px]'>
					<Dashboard_header />
					<div className='grid grid-cols-2 gap-8 z-30 absolute ml-12'>
						<div className='flex flex-col gap-8'>
							<Dashboard_stats stats={stats} />
							<Dashboard_data_fetch title='Last Contacts' columns={['Name', 'Phone', 'Email']} data={contacts} />
						</div>
						<div className='flex flex-col gap-8 '>
							<Dashboard_data_fetch title='Last Invoices' columns={['Invoice Number', 'Invoice Date', 'Company']} data={invoices} />
							<Dashboard_data_fetch title='Last Companies' columns={['Company Name', 'TVA', 'Country']} data={companies} />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
