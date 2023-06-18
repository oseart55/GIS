async function loadIntoTable(url, table){
	const tableHead = table.querySelector("thead");
	const tableBody = table.querySelector("tbody");
	const response = await fetch(url);
	const { fields, features } = await response.json();
	
	headers = ["Incident ID", "Date", "Type", "Disposition", "Block Address", "City", "Location"]
	
	tableHead.innerHTML = "<tr></tr>";
	tableBody.innerHTML = "";
	
	for (const headerText of headers){
		const headerElement = document.createElement("th");
		
		headerElement.textContent = headerText;
		tableHead.querySelector("tr").appendChild(headerElement);
	}
	for (const feature of features){
		const featureElement = document.createElement("tr");
		
		const IncidentId = document.createElement("td");
		const IncidentDate = document.createElement("td");
		const Category = document.createElement("td");
		const Disposition = document.createElement("td");
		const BlkAddress = document.createElement("td");
		const City = document.createElement("td");
		const Location = document.createElement("td");
		
		IncidentId.textContent = feature.attributes.IncidentId;
		var date = new Date(feature.attributes.IncidentDate * 1000)
		IncidentDate.textContent = date;
		Category.textContent = feature.attributes.Category;
		Disposition.textContent = feature.attributes.CadDisposition;
		BlkAddress.textContent = feature.attributes.BlkAddress;
		City.textContent = feature.attributes.City;
		Location.textContent = String(feature.geometry.y) +","+ String(feature.geometry.x)
		
		
		featureElement.appendChild(IncidentId)
		featureElement.appendChild(IncidentDate)
		featureElement.appendChild(Category)
		featureElement.appendChild(Disposition)
		featureElement.appendChild(BlkAddress)
		featureElement.appendChild(City)
		featureElement.appendChild(Location)
		
		tableBody.appendChild(featureElement)
		
	}
	
}


loadIntoTable("https://geodata.sarpy.gov/arcgis/rest/services/PublicSafety/PublicCrimeMap/FeatureServer/1/query?where=1%3D1&outFields=IncidentId,IncidentDate,Category,CadDisposition,BlkAddress,City&returnGeometry=true&outSR=4326&f=json",document.querySelector("table"));

