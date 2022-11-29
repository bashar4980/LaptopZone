<div className="container p-2 mx-auto sm:p-4 text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col>
				<col>
				<col>
				<col>
				<col>
				<col className="w-24">
			</colgroup>
			<thead className="bg-gray-700">
				<tr className="text-left">
					<th className="p-3">No</th>
					<th className="p-3">Name</th>
					<th className="p-3">Price</th>
					<th className="p-3">Stock</th>
					
					<th className="p-3">Delete</th>
				</tr>
			</thead>
			<tbody>
            {sellerProduct.map((product, i) => {
    return (
      <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900" key={i}>
        <td className="p-3">{i + 1}</td>
        <td className="p-3">{product.ProductName}</td>
        <td className="p-3">{product.ResellPrice}</td>
        <td className="p-3">
          <button className="btn btn-xs btn-success">Sold</button>
        </td>
        <td className="p-3">
          <button className="btn btn-xs btn-warning">Delete</button>
        </td>
      </tr>
    );
  })}
				
			</tbody>
		</table>
	</div>
</div>