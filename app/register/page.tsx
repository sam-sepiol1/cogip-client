import Login_register_header from "@/app/components/Login_register_header";

export default function Register() {
    return (
        <main>
            <Login_register_header />

            <section className="flex flex-col items-center pt-24 h-[800px] bg-[#F5F5FB]">
                <h1 className="font-semibold font-logo-header">Bienvenue chez Cogip !</h1>

                <section className="flex flex-col bg-white">
                    <form>
                        <label htmlFor="firstname">Nom :</label>
                        <input type="text" name="firstname" placeholder="firstname" required/>

                        <label htmlFor="lastname">Prénom :</label>
                        <input type="text" name="firstname" placeholder="firstname" required/>

                        <label htmlFor="email">Email :</label>
                        <input type="text" name="email" placeholder="email@example.com" required/>

                        <label htmlFor="password">Name</label>
                        <input type="text" name="password" placeholder="Choose your password" required/>

                        <button type="submit">C&#39;est parti !</button>
                    </form>
                </section>

            </section>


        </main>
    )
}
