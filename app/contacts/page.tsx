import Header from "../components/Header";
import Footer from "../components/Footer";
import DatasDisplayer from "../components/DatasDisplayer";
import contactsData from "../components/Contacts";

export default function ContactsPage() {
    return (
        <main>
            <Header />

            <DatasDisplayer title="All Contacts" data={contactsData} columns={[
                    { key: "name", label: "Name" },
                    { key: "phone", label: "Phone" },
                    { key: "mail", label: "Mail" },
                    { key: "company", label: "Company" },
                    { key: "created", label: "Created at" }
                ]} searchPlaceholder="Search contact" />

            <Footer />
        </main>
    );
}
