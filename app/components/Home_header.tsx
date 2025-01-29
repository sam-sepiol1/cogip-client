export default function Home_header() {
	return (
		<>
			<div id='header-home'>
				<header className='flex gap-10 p-20 size-auto '>
					<h2 className='text-3xl font-bold'> COGIP </h2>
					<nav className='content-center'>
						<ul className='flex flex-row gap-4 '>
							<li>
								<a href='/home'>Home</a>
							</li>
							<li>
								<a href='/invoices'>Invoice</a>
							</li>
							<li>
								<a href='/companies'>Companies</a>
							</li>
							<li>
								<a href='/contacts'>Contacts</a>
							</li>
						</ul>
					</nav>
					<div className='flex flex-row gap-4 ml-auto'>
						<button className='bg-white px-3 py-1 rounded-xl'> Sign Up </button>
						<button> Login </button>
					</div>
				</header>
				<div className='hero-section flex flex-row justify-center items-center'>
					<h1 className='text-5xl font-bold flex p-20 flex-1 '>MANAGE YOUR CUSTOMERS AND INVOICES EASILY</h1>
					<picture className='flex-1'>
						<img src='/Home_Header/hero-section_illustration.svg' alt='illustration' />
					</picture>
				</div>
			</div>
		</>
	);
}
