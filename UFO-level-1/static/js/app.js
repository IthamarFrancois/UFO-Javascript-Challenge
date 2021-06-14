// Declare variables

// The data from data.js
var tableData = data;
//console.log(data);

// Gets a reference to the HTML table body
var tbodyTable = d3.select("tbody");
var tableBody = d3.select("#table-body");

// Internal progress marker/checkpoint
//console.log("Checkpoint 0 Complete")


////////////////// Initalize Table //////////////////
function createTable(data) {

    // Clear any results first
    tbodyTable.html("");

    // Set up table loop and append each table row and data 
    data.forEach((ufoReports) => {
    
        //console.log(ufoReports); 
        var trRow = tbodyTable.append('tr');
        Object.values(ufoReports).forEach((value) => {

            //console.log(key, value);    
            var tdCell = trRow.append("td");
            tdCell.text(value);
    
        });

    });

}

//////////////////  Trigger Events  /////////////////////////////

// Function executed when Filter button is used
function FilteredResults() {

    // Stop page refresh
    d3.event.preventDefault();

    // User input string of a date to search by
    var dateUserInput = d3.select("#datetime").property("value");
    // Copy of the overall dataset to search for and manipulate
    var dataFiltered = tableData;

    // If user input date is correct/a match
    if(dateUserInput) {

        // Applies filter conditions to table display to show only the correct fields that match date
        dataFiltered = dataFiltered.filter((trRow) => trRow.datetime === dateUserInput);

        // Creates new filterd table
    }; createTable(dataFiltered);
}
//console.log("Checkpoint 2 Complete")


// Function that attaches click 'event' to filter button function
d3.selectAll("#filter-btn").on("click", FilteredResults); 

// Default table build
createTable(data);
//console.log("Checkpoint 3 Complete")


////////////////////////////    Ithamar Francois  ////////////////////////////
