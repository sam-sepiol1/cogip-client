export default function Last_invoices() {
    // Mock data for the table
    // TODO : Delete this when backend is ready and connected
    const testData = [
        {
            id: 1,
            name: "Sam Sepiol",
            phone: "123-456-7890",
            mail: "samespiol@example.com",
            company: "fSociety",
            created: "2023-12-30"
        },
        {
            id: 2,
            name: "Walter White",
            phone: "987-654-3210",
            mail: "walterwhite@example.com",
            company: "Heisenberg",
            created: "2023-12-30"
        },
        {
            id: 3,
            name: "Michael Scott",
            phone: "555-123-4567",
            mail: "michaelscott@example.com",
            company: "Dunder Mifflin",
            created: "2023-12-30"
        }
    ]

	return (
		<main className="px-20 mt-20">
			<h3 className="text-3xl font-bold mb-16"> Last Contacts</h3>
			<table className="table-auto w-full" >
				<thead className="text-2xl font-bold text-left">
					<tr className='background-yellow'>
						<th className="p-4">Name</th>
						<th className="p-4">Phone </th>
						<th className="p-4">Mail</th>
						<th className="p-4">Company</th>
						<th className="p-4">Created</th>
					</tr>
				</thead>
				<tbody className="">
					{testData.map(test => (
						<tr key={test.id}>
                            <td className="p-4">{test.name}</td>
                            <td className="p-4">{test.phone}</td>
                            <td className="p-4">{test.mail}</td>
                            <td className="p-4">{test.company}</td>
                            <td className="p-4">{test.created}</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
}