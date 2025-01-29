import Home_header from "./components/Home_header";
import Last_invoices from "./components/Last_invoices";
import Last_contacts from "./components/Last_contacts";
import Last_companies from "./components/Last_companies";
import Home_slogan from "./components/Home_slogan";

export default function Home() {
  return (
    <main>
      <Home_header />
      <Last_invoices />
      <Last_contacts />
      <Last_companies />
      <Home_slogan />
    </main>
  );
}