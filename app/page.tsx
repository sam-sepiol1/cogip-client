import Footer from "@/app/components/Footer";
import Home_header from "./components/Home_header";
import Invoices from "./components/Invoices";
import Contacts from "./components/Contacts";
import Companies from "./components/Companies";
import Home_slogan from "./components/Home_slogan";
import Image from "next/image";

export default function Home() {
  return (
      <main>
          <Home_header/>
          <div className="relative">
              <Invoices/>
              <div className="absolute right-0 mt-[-30px]">
                  <Image src="/Home/Home-decoration_book.svg" alt="Book decoration"
                         width={177} height={138}/>
              </div>
          </div>
          <div className="relative">
              <Contacts/>
              <div className="absolute left-[-55px] top-full mt-[-30px] transform rotate-[30deg]">
                  <Image src="/Home/e8f22fa8e9926850f515778113c009c2-2.png" alt="Lightbulb decoration"
                         width={181} height={141.25}/>
              </div>
          </div>
          <Companies/>
          <Home_slogan/>
          <Footer/>
      </main>
  );
}