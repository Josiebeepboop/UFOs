// import the data from data.js
const tableData=data;

// Reference the HTML table using D3
var tbody=d3.select("tbody");


function buildTable(data){
    // Clear out any existing data
    tbody.html(" ");

    // Loop through each object in the data
    data.forEach((DataRow)=>{
        // append a row to the table body
        let row=tbody.append("tr");
        // Loop through each field in the dataRow
        Object.values(dataRow).forEach((val)=>{
            // add each value as a table cell td
            let cell=row.append("td");
            cell.text(val);
        });
    });
}