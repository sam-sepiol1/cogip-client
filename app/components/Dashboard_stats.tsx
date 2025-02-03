export default function Daashboard_stats() {
	const dataTest = {
		nbInvoices: 245,
		nbCompanies: 245,
		nbContacts: 245,
	};

	return (
		<main className='dashboard-stats mt-16 ml-12 w-[507px] p-4 h-[232px] dashboard_drop-shadow'>
			<h3 className='text-2xl font-bold mb-6'>Statistics</h3>
			<ul className='flex flex-row justify-between  px-5'>
				<li>
					<div className='size-[80px] flex flex-col items-center justify-center text-white bg-[#4D4CAC] rounded-full'>
						<span className='font-black text-xs'>{dataTest.nbInvoices}</span>
						<span className='font-black text-xs'>Invoices</span>
					</div>
				</li>
				<li>
					<div className='size-[80px] flex flex-col items-center justify-center text-white bg-[#9698D6] rounded-full'>
						<span className='font-black text-xs'>{dataTest.nbContacts}</span>
						<span className='font-black text-xs'>Contacts</span>
					</div>
				</li>

				<li>
					<div className='size-[80px] flex flex-col items-center justify-center text-white bg-[#FF808B] rounded-full'>
						<span className='font-black text-xs'>{dataTest.nbCompanies}</span>
						<span className='font-black text-xs'>Companies</span>
					</div>
				</li>
			</ul>
		</main>
	);
}
