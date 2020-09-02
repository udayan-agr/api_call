import React from "react";

function TableData(props) {
	return (
		<tr>
			<td>{props.row.name}</td>
			<td>{props.row.profession}</td>
			<td>{props.row.actor}</td>
			<td>{props.row.rating}</td>
		</tr>
	);
}

function Table(props) {
	return (
		<div className="table">
			<h1>Movie Characters</h1>
			<table style={{ margin: "auto", padding: "1.5rem" }}>
				<thead>
					<tr>
						<th>Character Name</th>
						<th>Profession</th>
						<th>Actor</th>
						<th>Rating</th>
					</tr>
				</thead>
				<tbody>
					{props.tableData.map((ele, index) => {
						return <TableData key={index} row={ele}></TableData>;
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
