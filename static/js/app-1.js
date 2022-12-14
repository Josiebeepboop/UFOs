// import the data from data.js
const tableData=data;

// Reference the HTML table using D3
var tbody=d3.select("tbody");


function buildTable(data){
    // Clear out any existing data
    tbody.html(" ");
    // Loop through each object in the data
    data.forEach((dataRow)=>{
        // append a row to the table body
        let row=tbody.append("tr");
        // Loop through each field in the dataRow
        Object.values(dataRow).forEach((val)=>{
            // add each value as a table cell td
            let cell=row.append("td");
            cell.text(val);
        })
    })
}

function handleClick(){

    //Grab the datetime value from the filter
    let date=d3.select("#datetime").property("value");
    let filteredData=tableData;
    // Check to see if a date was entered and filter the data using that date
    if (date){
        // Apply `filter` to the table data to only keep the rows where
        // the `datetime` value matches the filer value
        filteredData=filteredData.filter(row=>row.datetime===date);
    }
        //Rebuild the table using the filtered data
        //Note: If no date was entered, the filteredData will just be the 
        //Original tableData
        buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click",handleClick);

// Build table when the page loads
buildTable(tableData);