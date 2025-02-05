interface Props {
    title: string;
    fields: string[]
}

export default function New_entry_form({ title, fields }: Props) {
    return (
        <main className="flex flex-col ml-12 p-7 dashboard_form mr-12 bg-white">
            <h1 className="text-xl font-bold mb-4">{title}</h1>
            <hr className="w-[95%] mb-12"/>
            <form action="" method="post" className="flex flex-col gap-8">
                {fields.map((field) => {
                    return (
                        <div key={field} className="w-[95%]">
                            <input className="dashboard_background p-4 w-full font-light text-xl" type="text" name={field} id={field} placeholder={field} required />
                        </div>
                    );
                })}
                <button className="bg-[#9698D6] text-white p-4 w-[95%]" type="submit">Save</button>
            </form>
        </main>
    );
}