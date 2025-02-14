import Header from '../components/Header';
import Footer from '../components/Footer';
import { checkAuth } from '../utils/checkAuth';

export default function ShowContacts() {
	checkAuth();

	const testData = {
		name: 'Sam Sepiol',
		email: 'samsepiol@example.com',
		phone: '123-456-7890',
		company: 'fSociety',
		profilePicture: '/show-contacts_profile-picture.png',
	};

	return (
		<main>
			<Header />
			<div className='contact-card flex mt-[100px] justify-between px-[133px]'>
				<div className='contact-info flex flex-col justify-center'>
					<h1 className='title text-6xl font-black my-10 '> {testData.name}</h1>
					<ul>
						<li className='text-2xl contact-card_info font-semibold'>
							<span className='font-black'>Name: </span> {testData.name}
						</li>
						<li className='text-2xl contact-card_info font-semibold'>
							<span className='font-black'>Phone: </span> {testData.phone}
						</li>
						<li className='text-2xl contact-card_info font-semibold'>
							<span className='font-black'>Email: </span> {testData.email}
						</li>
						<li className='text-2xl contact-card_info font-semibold'>
							<span className='font-black'>Company: </span> {testData.company}
						</li>
					</ul>
				</div>
				<div className='profile-picture flex w-50'>
					<picture className='flex justify-center '>
						<img className='rounded-full w-[255px] h-[255px]' src={testData.profilePicture} alt='Profile Picture' />
					</picture>
				</div>
			</div>
			<Footer />
		</main>
	);
}
