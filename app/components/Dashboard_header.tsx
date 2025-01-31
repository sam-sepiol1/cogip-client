export default function Dashboard_header() {
	// Mock data for the header
	// TODO : Delete this when backend is ready and connected
	const dataTest = {
		username: 'Sam Sepiol',
	};

	return (
		<header className='dashboard_header p-12 flex flex-col gap-[69px]'>
			<div className='dashboard_title title'>
				<h1 className='title text-3xl font-black'>Dashboard</h1>
				<h3> Dashboard/ </h3>
			</div>
			<div className='dashboard_hero background-header p-16 text-white rounded-xl flex flex-row gap-4'>
				<div className='dashboard_hero_infos'>
					<h2 className='title text-4xl font-bold'> Welcome back, {dataTest.username}</h2>
					<p className='w-[75%]'> You can here add an invoice, a company and some contacts </p>
				</div>
				<div className='dashboard_hero_illustration'>
					<picture>
						<img className='z-2 absolute right-[140px] top-0' src='/Dashboard_Header/dashboard-header_illustration.png' alt='illustration' />
					</picture>
				</div>
			</div>
		</header>
	);
}
