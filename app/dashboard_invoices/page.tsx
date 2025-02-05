import Dashboard_menu from '../components/Dashboard_menu';
import Dashboard_header from '../components/Dashboard_header';

export default function NewInvoicePage() {
    return (
        <main className="flex bg-[#F5F5FB]">

            <Dashboard_menu />

            <div className="flex flex-col w-full ">

                <Dashboard_header />

                <section className="bg-white p-8 rounded-lg shadow-md w-[1044px] h-[558px] border-t border-gray-300 ml-16">
                    <h2 className="dashboard-menu-items mb-4 text-[20px] font-bold leading-[24.2px] text-left">
                        New invoice
                    </h2>


                </section>
            </div>
        </main>
    );
}