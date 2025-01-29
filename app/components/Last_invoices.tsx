export default function Last_invoices() {
    // Mock data for the table
    // TODO : Delete this when backend is ready and connected
    const testData = [
        {
            id: 1,
            invoiceNumber: "123456789",
            dueDates: "2023-12-30",
            company: "fSociety",
            created: "2023-12-30"
        },
        {
            id: 2,
            invoiceNumber: "987654321",
            dueDates: "2023-12-30",
            company: "Heisenberg",
            created: "2023-12-30"
        },        
        {
            id: 3,
            invoiceNumber: "555123456",
            company: "Dunder Mifflin",
            dueDates: "2023-12-30",
            created: "2023-12-30"
        }

    ]

	return (
		<main className="px-20 mt-20">
			<h3 className="text-3xl font-bold mb-16"> Last Invoices</h3>
			<table className="table-auto w-full" >
				<thead className="text-2xl font-bold text-left">
					<tr className='bg-[#F9DE4E]'>
						<th className="p-4">Invoice Number</th>
						<th className="p-4"> Due Dates</th>
						<th className="p-4">Company</th>
						<th className="p-4">Created</th>
					</tr>
				</thead>
				<tbody className="">
					{testData.map(test => (
						<tr key={test.id}>
                            <td className="p-4">{test.invoiceNumber}</td>
                            <td className="p-4">{test.dueDates}</td>
                            <td className="p-4">{test.company}</td>
                            <td className="p-4">{test.created}</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
}