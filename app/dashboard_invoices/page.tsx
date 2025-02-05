import Dashboard_menu from '../components/Dashboard_menu';
import Dashboard_header from '../components/Dashboard_header';
import New_entry_form from "@/app/components/New_entry_form";

export default function NewInvoicePage() {
    return (
        <main className="flex bg-[#F5F5FB]">

            <Dashboard_menu />

            <div className="flex flex-col w-full ml-[300px]">

                <Dashboard_header />

                <New_entry_form title='New Invoice' fields={['Reference', 'Price', 'Company name']} />
            </div>
        </main>
    );
}
