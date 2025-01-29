import Home_header from "./components/Home_header";
import Invoices from "./components/Invoices";
import Contacts from "./components/Contacts";
import Companies from "./components/Companies";
import Home_slogan from "./components/Home_slogan";

export default function Home() {
  return (
    <main>
      <Home_header />
      <Invoices />
      <Contacts />
      <Companies />
      <Home_slogan />
    </main>
  );
}