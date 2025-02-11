'use client';

import { useState } from 'react';
import axios from 'axios';

import Dashboard_header from '../../components/Dashboard_header';
import Dashboard_menu from '../../components/Dashboard_menu';
import New_entry_form from '../../components/New_entry_form';

export default function Dashboard_contacts() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		phone: '',
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
			const response = await axios.post('http://localhost:3000/api/contact', {
				name: formData.name,
				email: formData.email,
				company_name: formData.company,
				phone: formData.phone,
			});
			console.log('Contact created :', response.data);
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
					<New_entry_form
						title='New Contact'
						fields={['name', 'phone', 'email', 'company']}
						submitText='Create Contact'
						onChange={handleChange}
						onSubmit={handleSubmit}
						placeholders={['Name', 'Phone Number', 'Email', 'Company']}
						errorMessage={''}
						formData={formData}
					/>
				</div>
			</div>
		</main>
	);
}
