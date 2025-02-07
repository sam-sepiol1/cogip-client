'use client';
import { useState } from 'react';
import axios from 'axios';

import Dashboard_menu from '../../components/Dashboard_menu';
import Dashboard_header from '../../components/Dashboard_header';
import New_entry_form from '../../components/New_entry_form';

export default function Dashboard_companies() {
	const [formData, setFormData] = useState({
		companyName: '',
		TVA: '',
		country: '',
		type: '',
	});

	const handleChange = (name: string, value: string) => {
        setFormData({
            ...formData,
			[name]: value,
		});
        console.log(formData);
        
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Formulaire soumis avec : ', formData);

		try {
			const response = await axios.post("http://localhost:3000/api/company", formData);
			console.log('Entreprise créée avec success :', response.data);
		} catch (error) {
			console.error('Erreur lors de la création :', error);
		}
	};
	return (
		<main className='h-screen'>
			<div className='flex h-full'>
				<Dashboard_menu />
				<div className='flex flex-col ml-[300px] w-full dashboard_background h-full justify-center '>
					<Dashboard_header />
					<New_entry_form
						title='New Company'
						fields={['companyName', 'TVA', 'country', 'type']}
						submitText='Create company'
						onChange={handleChange}
						onSubmit={handleSubmit}
						placeholders={['Company name', 'TVA', 'Country', 'Type']}
						errorMessage={''}
					/>
				</div>
			</div>
		</main>
	);
}
