import Dashboard_menu from '../components/Dashboard_menu';
import Dashboard_header from '../components/Dashboard_header';

export default function NewInvoicePage() {
    return (
        <main className="flex bg-[#F5F5FB]">

            <Dashboard_menu />

            <div className="flex flex-col w-full ">

                <Dashboard_header />

                <section className="bg-white p-8 rounded-[10px] dashboard_drop-shadow w-[1044px] h-[558px] border border-[#E0E0E0] ml-16 mb-28">
                    <h2 className="dashboard-font-title mt-6 mb-4">New invoice</h2>

                    <div className="w-[981px] h-[1px] bg-[#E0E0E0] mt-6 mb-10 mx-auto"></div>

                    <form className="flex flex-col space-y-10">
                        <input type="text" placeholder="Reference" className="dashboard-font-input dashboard-input mt-5"/>
                        <input type="number" placeholder="Price" className="dashboard-font-input dashboard-input"/>
                        <select className="dashboard-font-input dashboard-input mb-8">
                            <option>Company name</option>
                            <option>fSociety</option>
                            <option>Heisenberg</option>
                            <option>Dunder Mifflin</option>
                        </select>

                        <button type="submit" className="dashboard-font-button h-[60px] bg-[#9698D6]">Save</button>
                    </form>

                </section>
            </div>
        </main>
    );
}