import Dashboard_menu from '../../components/Dashboard_menu';
import Dashboard_header from '../../components/Dashboard_header';
import New_entry_form from '../../components/New_entry_form';

export default function Dashboard_companies() {
    return (
        <main className='h-screen'>
            <div className='flex h-full'>
                <Dashboard_menu />
                <div className='flex flex-col ml-[300px] w-full dashboard_background h-full justify-center '>
                    <Dashboard_header />
                    <New_entry_form title='New Company' fields={['Company name', 'TVA', 'Country', 'Type']} />
                </div>
            </div>
        </main>
    );
}
