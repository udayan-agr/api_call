import React from "react";

class TableData extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<tr>
				<td>{this.props.row.profession}</td>
				<td>{this.props.row.actor}</td>
				<td>{this.props.row.name}</td>
				<td>{this.props.row.rating}</td>
			</tr>
		);
	}
}

class Table extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
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
						{this.props.tableData.map((ele, index) => {
							return <TableData key={index} row={ele}></TableData>;
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

// function Table(props) {
// 	return (
// 		<div className="table">
// 			<h1>Movie Characters</h1>
// 			<table style={{ margin: "auto", padding: "1.5rem" }}>
// 				<thead>
// 					<tr>
// 						<th>Character Name</th>
// 						<th>Profession</th>
// 						<th>Actor</th>
// 						<th>Rating</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{props.tableData.map((ele, index) => {
// 						return <TableData key={index} row={ele}></TableData>;
// 					})}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// }

export default Table;
