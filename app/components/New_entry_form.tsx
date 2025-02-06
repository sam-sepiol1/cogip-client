import React from "react";

interface Props {
    title: string;
    fields: string[];
    submitText: string;
    onChange: (name : string, value : string) => void;
    onSubmit: (e : React.FormEvent<HTMLFormElement>) => void;
}

export default function New_entry_form({ title, fields, onChange, onSubmit, submitText }: Props) {
    return (
        <main className="flex flex-col justify-center items-center w-full p-7 dashboard_form mr-12 bg-white rounded-lg mb-14 ">
            <h1 className="text-xl font-bold mb-4">{title}</h1>
            <hr className="w-[95%] mb-12"/>
            <form action="" method="post" className="flex flex-col gap-8 " onSubmit={onSubmit}>
                {fields.map((field) => {
                    return (
                        <div key={field} className="w-[95%]">
                            <input className="dashboard_background p-4 w-[650px] font-light text-xl rounded-md" type="text" name={field} id={field} placeholder={field} onChange={(e => onChange(field.toLowerCase(), e.target.value))}  required />
                        </div>
                    );
                })}
                <button className="bg-[#9698D6] text-white p-4 w-[35%] self-center" type="submit" >{submitText}</button>
            </form>
        </main>
    );
}