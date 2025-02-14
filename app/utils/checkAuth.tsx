import axios from 'axios';

export const checkAuth = async () => {
	if (typeof window === 'undefined') {
		return false;
	}

	const token = localStorage.getItem('token');

	if (!token) {
		window.location.href = '/login';
		return false;
	}

	try {
		const response = await axios.get('http://localhost:3000/api/auth/check', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (response.status !== 200) {
			localStorage.removeItem('token');
			window.location.href = '/login';
			return false;
		}

		return true;
	} catch (error) {
		console.error('Error while checking authentication:', error);
		localStorage.removeItem('token');
		window.location.href = '/login';
		return false;
	}
};
