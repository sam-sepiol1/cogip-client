'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { checkAuth } from '@/app/utils/checkAuth';

import Dashboard_header from '../../components/Dashboard_header';
import Dashboard_menu from '../../components/Dashboard_menu';
import New_entry_form from '../../components/New_entry_form';

export default function Dashboard_invoices() {
	checkAuth();
	const [formData, setFormData] = useState({
		ref: '',
		company: '',
		price: '',
	});

	const [user, setUser] = useState<{ first_name: string; last_name: string }>({ first_name: '', last_name: '' });

	useEffect(() => {
		const userStr = localStorage.getItem('user');

		const userData = userStr ? JSON.parse(userStr) : '';
		setUser(userData);
	}, []);

	const handleChange = (name: string, value: string) => {
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await axios.post('http://localhost:3000/api/invoice', {
				ref: formData.ref,
				company_name: formData.company,
				price: formData.price,
			});
			if (response.status === 201) {
				setFormData({
					ref: '',
					company: '',
					price: '',
				});

				toast.success('Invoice created successfully', {
					position: 'bottom-right',
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: 'light',
				});
			}
		} catch (error) {
			console.error('Error during creation:', error);
			toast.error('Error during creation. Please try again.', {
				position: 'bottom-right',
				autoClose: 2000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: 'light',
			})
		}
	};

	return (
		<main className=''>
			<div className='flex'>
				<Dashboard_menu firstName={user.first_name} lastName={user.last_name}  />
				<div className='flex flex-col ml-[300px] w-full dashboard_background h-screen justify-center '>
					<Dashboard_header username={user.first_name} />
					<New_entry_form title='New Invoice' fields={['company', 'price', 'ref']} submitText='Create Invoice' onChange={handleChange} onSubmit={handleSubmit} placeholders={['Company', 'Price', 'Reference']} errorMessage={''} formData={formData} />
					<ToastContainer/>
				</div>
			</div>
		</main>
	);
}
