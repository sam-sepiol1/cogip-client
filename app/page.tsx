import Footer from "@/app/components/Footer";
import Home_header from "./components/Home_header";
import DatasDisplayer from "./components/DatasDisplayer";
import invoicesData from "./components/Invoices";
import contactsData from "./components/Contacts";
import companiesData from "./components/Companies";
import Home_slogan from "./components/Home_slogan";

import Image from "next/image";

export default function HomePage() {
    return (
        <main>
            <Home_header />

            <div className="relative">
                <DatasDisplayer className="titlePage" title="Last invoices" data={ invoicesData } columns={[
                        { key: "invoiceNumber", label: "Invoice number" },
                        { key: "dueDates", label: "Due Dates" },
                        { key: "company", label: "Company" },
                        { key: "created", label: "Created at" }
                ]} limit={5} isHome={true} />

                <div className="absolute right-0 mt-[-30px]">
                    <Image src="/Home/Home-decoration_book.svg" alt="Book decoration" width={177} height={138} />
                </div>
            </div>

            <div className="relative mt-[80px]">
                <DatasDisplayer className="titlePage" title="Last contacts" data={ contactsData } columns={[
                        { key: "name", label: "Name" },
                        { key: "phone", label: "Phone" },
                        { key: "mail", label: "Mail" },
                        { key: "company", label: "Company" },
                        { key: "created", label: "Created at" }
                    ]} limit={5} isHome={true} />

                <div className="absolute left-[-55px] top-full mt-[-30px] transform rotate-[30deg]">
                    <Image src="/Home/e8f22fa8e9926850f515778113c009c2-2.png" alt="Lightbulb decoration" width={181} height={141.25} />
                </div>
            </div>

            <div className="mt-[80px]">
            <DatasDisplayer className="titlePage" title="Last companies" data={ companiesData } columns={[
                    { key: "name", label: "Name" },
                    { key: "tva", label: "TVA" },
                    { key: "country", label: "Country" },
                    { key: "type", label: "Type" },
                    { key: "created", label: "Created at" }
                ]} limit={5} isHome={true} />
            </div>

            <Home_slogan />
            <Footer />
        </main>
    );
}