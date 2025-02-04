import Dashboard_header from '../components/Dashboard_header';
import Dashboard_menu from '../components/Dashboard_menu';
import New_entry_form from '../components/New_entry_form';

export default function Dashboard_contacts() {
	return (
		<main>
			<div className='flex'>
				<Dashboard_menu />
				<div className='flex flex-col w-full'>
					<Dashboard_header />
					<New_entry_form title='New Contact' fields={['first_name', 'last_name', 'email', 'phone']} />
				</div>
			</div>
		</main>
	);
}
