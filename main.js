async function loadIntoTable(url, table){
	const tableHead = table.querySelector("thead");
	const tableBody = table.querySelector("tbody");
	const response = await fetch(url);
	const { headers, rows } = await response.json();
}


loadIntoTable("./data.json",document.querySelector("table"));

