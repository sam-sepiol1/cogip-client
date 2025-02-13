'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import Dashboard_menu from '../../components/Dashboard_menu';
import Dashboard_header from '../../components/Dashboard_header';
import New_entry_form from '../../components/New_entry_form';

export default function Dashboard_companies() {
	const companyTypes: Record<string, number> = {
		'sarl': 1,
		'sa': 2,
		'auto-entrepreneur': 3,
		'association': 4,
		'startup': 5,
	};

	const [formData, setFormData] = useState({
		companyName: '',
		tva: '',
		country: '',
		type: '',
	});
	const [user, setUser] = useState<{ first_name: string; last_name: string }>({ first_name: '', last_name: '' });

	useEffect(() => {
		const userStr = localStorage.getItem('user');

		const userData = userStr ? JSON.parse(userStr) : '';
		setUser(userData);
	}, []);


	const [errorMessage, setErrorMessage] = useState('');

	const handleChange = (name: string, value: string) => {
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const typeId = companyTypes[formData.type];

		if (!typeId) {
			setErrorMessage('Please select a valid company type: SARL, SA, Auto-entrepreneur, Association, or Startup');
			return;
		}

		try {
			const response = await axios.post('http://localhost:3000/api/company', {
				name: formData.companyName,
				tva: formData.tva,
				country: formData.country,
				type_id: typeId,
			});

			if (response.status === 201) {
				setFormData({
					companyName: '',
					tva: '',
					country: '',
					type: '',
				});

				toast.success('Company created successfully', {
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
			console.error('Error creating company:', error);
			toast.error('Error during creation. Please try again.', {
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
	};

	return (
		<main className=''>
			<div className='flex'>
				<Dashboard_menu firstName={user.first_name} lastName={user.last_name} />
				<div className='flex flex-col ml-[300px] w-full dashboard_background h-screen justify-center '>
					<Dashboard_header username={`${user.first_name}`} />
					<New_entry_form
						title='New Company'
						fields={['companyName', 'tva', 'country', 'type']}
						submitText='Create company'
						onChange={handleChange}
						onSubmit={handleSubmit}
						placeholders={['Company name', 'TVA', 'Country', 'Type']}
						errorMessage={errorMessage}
						formData={formData}
					/>
				</div>
			</div>
			<ToastContainer />
		</main>
	);
}
