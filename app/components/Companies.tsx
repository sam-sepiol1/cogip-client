export default function Last_invoices() {
    // Mock data for the table
    // TODO : Delete this when backend is ready and connected
    const testData = [
        {
            id: 1,
            name: "fSociety",
            tva: "123-456-7890",
            country: "USA",
            type: "Private",
            created: "2023-12-30"
        },
        {
            id: 2,
            name: "Heisenberg",
            tva: "987-654-3210",
            country: "USA",
            type: "Client",
            created: "2023-12-30"
        },
        {
            id: 3,
            name: "Dunder Mifflin",
            tva: "555-123-4567",
            country: "USA",
            type: "Client",
            created: "2023-12-30"
        }
    ]

	return (
		<main className="px-20 mt-20">
			<h3 className="text-3xl font-bold mb-16"> Last Companies</h3>
			<table className="table-auto w-full" >
				<thead className="text-2xl font-bold text-left">
					<tr className='background-yellow'>
						<th className="p-4">Name</th>
						<th className="p-4">TVA</th>
						<th className="p-4">Country</th>
						<th className="p-4">Type</th>
						<th className="p-4">Created</th>
					</tr>
				</thead>
				<tbody className="">
					{testData.map(test => (
						<tr key={test.id}>
                            <td className="p-4">{test.name}</td>
                            <td className="p-4">{test.tva}</td>
                            <td className="p-4">{test.country}</td>
                            <td className="p-4">{test.type}</td>
                            <td className="p-4">{test.created}</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
}