'use client';

import { useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/navigation';

import Dashboard_header from '../../components/Dashboard_header';
import Dashboard_menu from '../../components/Dashboard_menu';
import New_entry_form from '../../components/New_entry_form';

export default function Dashboard_invoices() {
    const router = useRouter();

	const [formData, setFormData] = useState({
		ref: '',
		company: '',
		price: '',
	});

	const handleChange = (name: string, value: string) => {
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const companyResponse = await axios.get(`http://localhost:3000/api/searchCompany/${formData.company}`);
			if (companyResponse.data.data && companyResponse.data.data.length > 0) {
				const company_id = companyResponse.data.data[0].id;
				const response = await axios.post('http://localhost:3000/api/invoice', {
					ref: formData.ref,
					id_company: company_id,
					price: formData.price,
				});
				if (response.status === 201) {
                    router.push('/dashboard');
				}
			} else {
				console.error('Company not found');
			}
		} catch (error) {
			console.error('Error during creation:', error);
		}
	};

	return (
		<main className=''>
			<div className='flex'>
				<Dashboard_menu />
				<div className='flex flex-col ml-[300px] w-full dashboard_background h-screen justify-center '>
					<Dashboard_header />
					<New_entry_form title='New Invoice' fields={['company', 'price', 'ref']} submitText='Create Invoice' onChange={handleChange} onSubmit={handleSubmit} placeholders={['Company', 'Price', 'Reference']} errorMessage={''} />
				</div>
			</div>
        </main>
	);
}
    
