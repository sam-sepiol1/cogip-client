import React from "react";

interface Props {
    title: string;
    fields: string[];
    placeholders: string[];
    submitText: string;
    onChange: (name: string, value: string) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    errorMessage: string;
    formData: { [key: string]: string };
}

export default function New_entry_form({ title, fields, submitText, placeholders, onChange, onSubmit, errorMessage, formData }: Props) {
    return (
        <main id="" className="flex flex-col justify-center items-center w-[50%] p-7 dashboard_form bg-white rounded-lg mb-12 mx-auto h-full">
            <h1 className="text-xl font-bold mb-4">{title}</h1>
            <hr className="w-[95%] mb-12"/>
            <form action="" method="post" className="flex flex-col gap-8 w-full" onSubmit={onSubmit}>
                {fields.map((field, index) => {
                    return (
                        <div key={field} className="">
                            <input
                                className="dashboard-input p-4 w-[650px] font-light text-xl rounded-md"
                                type="text"
                                name={field}
                                id={field}
                                value={formData[field] || ''}
                                placeholder={placeholders[index]}
                                onChange={(e) => onChange(field, e.target.value.toLowerCase())}
                                required />
                        </div>
                    );
                })}
                <button className="bg-[#9698D6] text-white p-4 w-[35%] self-center font-bold rounded-xl" type="submit">{submitText}</button>
                { errorMessage && (
                    <div className="text-center text-xl ">
                        <p className="text-red-500">{errorMessage}</p>
                    </div>
                )}
            </form>
        </main>
    );
}
