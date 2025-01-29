export default function Footer() {
    return (
        <footer>
            <div className="w-[1074px] h-[343px] bg-gray-300 mx-auto flex flex-col items-center justify-start">
                <div className="w-full h-2 bg-yellow-400"></div>
                <h2 className="text-5xl font-bold text--color-footer-logo">COGIP</h2>
                <div className="w-full h-2 bg-yellow-400"></div>
                <nav className="w-full h-2 bg-yellow-400">
                    <ul className="text">
                        <li>HOME</li>
                        <li>INVOICES</li>
                        <li>COMPANIES</li>
                        <li>CONTACTS</li>
                        <li>PRIVACY POLICY</li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

