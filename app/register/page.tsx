'use client';

import Login_register_header from '@/app/components/Login_register_header';
import React, { useState } from 'react';
import axios from 'axios';
import New_entry_form from '@/app/components/New_entry_form';

export default function Register() {
	const [dto, setDto] = useState({
		first_name: '',
		last_name: '',
		role_id: '3',
		email: '',
		password: '',
	});

	const [error, setError] = useState('');

	const handleChange = (name: string, value: string) => {
		setDto((prevDto) => ({
			...prevDto,
			[name]: value,
		}));
	};

	const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const response = await axios.post('http://localhost:3000/api/auth/register', dto);

			if (response.status !== 200) {
				return;
			}

			try {
				window.location.href = '/dashboard';
			} catch (error) {
				console.error('Redirect error -> ', error);
			}
		} catch (error) {
			setError(`${error}, please try again.`);
			console.error('Error while registering:', error);
		}
	};

	return (
		<main>
			<Login_register_header />
			<New_entry_form
				title="Welcome ! Let's start by creating your account"
				fields={['first_name', 'last_name', 'email', 'password']}
				placeholders={['John', 'Doe', 'Email', 'Password']}
				onChange={handleChange}
				onSubmit={handleSubmitForm}
				submitText='Create account'
				errorMessage={error}
				formData={dto}
			/>
			<div className='mb-12 flex flex-col align-center gap-4 w-[50%] mx-auto'>
				<p className='text-center'>Already have an account ?</p>
				<button className='bg-[#9698D6] text-white p-4 w-[35%] self-center font-bold rounded-xl'>
					<a href='/login'> Sign in</a>
				</button>
			</div>
		</main>
	);
}
