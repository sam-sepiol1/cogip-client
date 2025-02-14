'use client';

import Login_register_header from '@/app/components/Login_register_header';
import New_entry_form from '@/app/components/New_entry_form';
import { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default function Login() {
	const [error, setError] = useState('');

	const [dto, setDto] = useState({
		email: '',
		password: '',
	});

	const handleChange = (name: string, value: string) => {
		setDto((prevDto) => ({
			...prevDto,
			[name]: value,
		}));
	};

	const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError('');

		try {
			const response = await axios.post('http://localhost:3000/api/auth/login', dto);

			const token = response.data.data.token;
			localStorage.setItem('token', token);

			const decodedToken = jwtDecode<{ user: string }>(token);
			const userData = decodedToken.user;
			localStorage.setItem('user', JSON.stringify(userData));

			window.location.href = '/dashboard';
		} catch (error: unknown) {
			console.error('Error while login:', error);
			if (axios.isAxiosError(error) && error.response) {
				setError(error.response.data.message || 'Login failed, please try again.');
			} else {
				setError('An unexpected error occurred. Please check your connection.');
			}
		}
	};

	return (
		<main>
			<div>
				<Login_register_header />
				<New_entry_form
					title='Please, Login to continue.'
					fields={['email', 'password']}
					onChange={handleChange}
					onSubmit={handleSubmitForm}
					submitText='Login'
					placeholders={['Email', 'Password']}
					errorMessage={error}
					formData={dto}
				/>
				<div className='mb-12 flex flex-col align-center gap-4 w-[50%] mx-auto'>
					<p className='text-center'>Dont have an account ?</p>
					<button className='bg-[#9698D6] text-white p-4 w-[35%] self-center font-bold rounded-xl'>
						<a href="/register"> Sign up</a>
					</button>
				</div>
			</div>
		</main>
	);
}
