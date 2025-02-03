import Dashboard_header from '../components/Dashboard_header';
import Dashboard_menu from '../components/Dashboard_menu';
import Dashboard_stats from '../components/Dashboard_stats';
import Dashboard_data_fetch from '../components/Dashboard_data_fetch';

export default function Dashboard() {
	// Mock data for the dashboard
	// TODO : Delete this when backend is ready and connected

	const dataTestInvoices = [
		{
			invoiceNumber: 'BE0987 876 787',
			invoiceDate: '12/12/12',
			company: 'fSociety',
		},
		{
			invoiceNumber: 'BE0987 876 787',
			invoiceDate: '13/08/15',
			company: 'Dunder Mifflin',
		},
		{
			invoiceNumber: 'BE0987 876 787',
			invoiceDate: '25/03/20',
			company: 'fSociety',
		},
		{
			invoiceNumber: 'BE0987 876 787',
			invoiceDate: '15/01/23',
			company: 'fSociety',
		},
	];

	const dataTestCompanies = [
		{
			companyName: 'fSociety',
			TVA: 'US456 654 321',
			country: 'United States',
		},
		{
			companyName: 'Dunder Mifflin',
			TVA: 'BE0987 876 787',
			country: 'Belgium',
		},
		{
			companyName: 'Acme Corp',
			TVA: 'NE 676 676 676',
			country: 'Netherlands',
		},
		{
			companyName: 'Heisenberg',
			TVA: 'BE0987 876 787',
			country: 'Belgium',
		},
	];

	const dataTestContacts = [
		{
			name: 'Sam Sepiol',
			phone: '123-456-7890',
			email: 'samsepiol@example.com',
		},
		{
			name: 'Walter White',
			phone: '123-456-7890',
			email: 'walterwhite@example.com',
		},
		{
			name: 'Michael Scott',
			phone: '123-456-7890',
			email: 'michaelscott@example.com',
		},
		{
			name: 'Jonas Kahnwald',
			phone: '123-456-7890',
			email: 'jonaskahnwald@example.com',
		},
		{
			name: 'Dr. Ross Geller',
			phone: '123-456-7890',
			email: 'rossgeller@example.com',
		},
		{
			name: 'Darlene Alderson',
			phone: '123-456-7890',
			email: 'darlenealderson@example.com',
		},
	];

	return (
		<main>
			<div className='flex'>
				<Dashboard_menu />
				<div className='w-full'>
					<Dashboard_header />
					<div className='grid grid-cols-2'>
						<div className='flex flex-col gap-8 pr-12'>
							<Dashboard_stats />
							<span className='ml-12'>
								<Dashboard_data_fetch title='Last Contacts' columns={['Name', 'Phone', 'Email']} data={dataTestContacts} />
							</span>
						</div>
						<div className='flex flex-col gap-8 pr-12'>
							<Dashboard_data_fetch title='Last Invoices' columns={['Invoice Number', 'Invoice Date', 'Company']} data={dataTestInvoices} />
							<Dashboard_data_fetch title='Last Companies' columns={['Company Name', 'TVA', 'Country']} data={dataTestCompanies} />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
