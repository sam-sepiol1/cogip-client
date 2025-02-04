import Login_register_header from "@/app/components/Login_register_header";

export default function Register() {
    return (
        <main>
            <Login_register_header />

            <section id="form-section" className="flex flex-col items-center justify-center h-[100vh] bg-[#F5F5FB]">
                <h1 className="font-semibold font-logo-header">Commençons par créer votre compte !</h1>

                <section className="flex flex-col w-[450px] bg-white mt-14 p-6 rounded-lg shadow-md">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Prénom :</label>
                            <input type="text" name="lastname" placeholder="John" required className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                        </div>

                        <div>
                            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">Nom :</label>
                            <input type="text" name="firstname" placeholder="Doe" required className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email :</label>
                            <input type="email" name="email" placeholder="email@example.com" required className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe :</label>
                            <input type="password" name="password" placeholder="Choisissez votre mot de passe" required className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">C&#39;est parti !</button>
                    </form>
                </section>
            </section>
        </main>
    )
}
