import Dashboard_header from '../components/Dashboard_header';
import Dashboard_menu from '../components/Dashboard_menu';
import Dashboard_stats from '../components/Dashboard_stats';

export default function Dashboard() {
	return (
		<main>
			<div className='flex'>
				<Dashboard_menu />
				<div className='flex flex-col w-full'>
					<Dashboard_header />
					<Dashboard_stats />
				</div>
			</div>
		</main>
	);
}
