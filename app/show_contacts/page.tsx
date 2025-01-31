import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ShowContacts() {
	const testData = {
		name: 'Sam Sepiol',
		email: 'samsepiol@example.com',
		phone: '123-456-7890',
		company: 'fSociety',
		profilePicture: 'https://i.pravatar.cc',
	};

	return (
		<main>
			<Header />
			<div className='contact-card flex mt-[100px] justify-between px-[133px]'>
				<div className='contact-info flex flex-col justify-center'>
					<h1 className='title text-6xl font-black my-10 '> {testData.name}</h1>
					<ul>
						<li className='text-2xl'>
							<span className='font-extrabold'>Name: </span> {testData.name}
						</li>
						<li className='text-2xl'>
							<span className='font-extrabold'>Phone: </span> {testData.phone}
						</li>
						<li className='text-2xl'>
							<span className='font-extrabold'>Email: </span> {testData.email}
						</li>
						<li className='text-2xl'>
							<span className='font-extrabold'>Company: </span> {testData.company}
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
