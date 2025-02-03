import Header from "../components/Header";
import Footer from "../components/Footer";
import DatasDisplayer from "../components/DatasDisplayer";
import Companies from "../components/Companies";

export default function CompaniesPage() {
    return (
        <main>
            <Header />

            <DatasDisplayer title="All Companies" data={Companies.testData} columns={[
                    { key: "name", label: "Name" },
                    { key: "tva", label: "TVA" },
                    { key: "country", label: "Country" },
                    { key: "type", label: "Type" },
                    { key: "created", label: "Created at" }
                ]} searchPlaceholder="Search company" />

            <Footer />
        </main>
    );
}