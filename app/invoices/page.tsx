import Header from "../components/Header";
import invoicesData from "../components/Invoices";
import DatasDisplayer from "../components/DatasDisplayer";
import Footer from "../components/Footer";

export default function InvoicePage() {
    return (
        <main>
            <Header />

            <DatasDisplayer title="All Invoices" data={invoicesData} columns={[
                    { key: "invoiceNumber", label: "Invoice Number" },
                    { key: "dueDates", label: "Due Dates" },
                    { key: "company", label: "Company" },
                    { key: "created", label: "Created at" }
                ]} searchPlaceholder="Search invoice" />

            <Footer />
        </main>
    );
}