'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { checkAuth } from '@/app/utils/checkAuth';

import Dashboard_header from '../../components/Dashboard_header';
import Dashboard_menu from '../../components/Dashboard_menu';
import New_entry_form from '../../components/New_entry_form';

export default function Dashboard_contacts() {
	checkAuth();
	const [user, setUser] = useState<{ first_name: string; last_name: string }>({ first_name: '', last_name: '' });

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

			if (response.status === 201) {
				setFormData({
					name: '',
					email: '',
					company: '',
					phone: '',
				});
				toast.success('Contact created successfully');
			}
		} catch (error) {
			console.error('Error during creation:', error);
			toast.error('Error during creation. Please try again.');
		}
	};

	useEffect(() => {
		const userStr = localStorage.getItem('user');

		const userData = userStr ? JSON.parse(userStr) : '';
		setUser(userData);
	}, []);
	return (
		<main className=''>
			<div className='flex'>
				<Dashboard_menu firstName={user.first_name} lastName={user.last_name} />
				<div className='flex flex-col ml-[300px] w-full dashboard_background h-screen justify-center '>
					<Dashboard_header username={`${user.first_name}`} />
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
			<ToastContainer autoClose={2000} position='bottom-right' hideProgressBar={false} closeOnClick={true} pauseOnHover={true} draggable={true} theme='light' />
		</main>
	);
}
