interface DynamicTableProps {
	title: string;
	columns: string[];
	data: { [key: string]: string | number }[];
}

export default function DynamicTable({ title, columns, data }: DynamicTableProps) {
	return (
		<div className='font-bold text-lg'>
			<h2 className=''>{title}</h2>
			<hr className='w-[95%] mt-4 mb-8' />
			<table className='w-full px-8'>
				<thead>
					<tr>
						{columns.map((column) => (
							<th key={column} className='p-4 text-left'>
								{column}
							</th>
								))}
							</tr>
				</thead>
				<tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
								{Object.entries(row).map(([key, value]) => (
									<td key={key} className={`p-2 text-left font-light ${key === 'country' ? 'uppercase' : ''}`}>
										{value}
									</td>
								))}
                            </tr>
                        ))}
				</tbody>
			</table>
		</div>
	);
}
