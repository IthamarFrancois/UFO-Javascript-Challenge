// Declare variables
// The data from data.js

var tableData = data;
//console.log(data);

// Gets a reference to the HTML table body
var tbodyTable = d3.select("tbody");
var tableBody = d3.select("#table-body");

// Set up initial table
// Loop and append each table row and data 
data.forEach((ufoReports) => {
    
    //console.log(ufoReports); 
    let trRow = tbodyTable.append('tr');
    Object.values(ufoReports).forEach((value) => {

        //console.log(key, value);    
        var tdCell = trRow.append("td");
        tdCell.text(value);

    });
});

// Internal progress marker/checkpoint
//console.log("Checkpoint 0 Complete")



////////////////// "Reset Button/Table" Function //////////////////
// Set up the filter button event
var ResetButton = d3.select("#StartOver")
// Trigger used to call the 'FilteredResults' function whenever the RESET buttons are clicked
ResetButton.on("click", StartOver);

function StartOver() {
    // Clear shown results and refresh/display initial table
    tbodyTable.html("");
    createTable(tableData);

    // Set all input fields to ""/empty
    document.getElementById("datetime").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
    document.getElementById("shape").value = "";
}


////////////////// "Create Table" Function //////////////////
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

    })

}


////////////////// "Filter" Button Trigger Event //////////////////

// Set up the filter button event
var FilterButton = d3.selectAll("#filter-btn")
// Trigger used to call the 'FilteredResults' function whenever the SEARCH buttons are clicked
FilterButton.on("click", FilteredResults);


// Function executed when Filter button is used
function FilteredResults() {

    // Stop page refresh
    d3.event.preventDefault();

    // Make copy of data table to manipulate and display
    var dataFiltered = tableData;
    
    // Initialize the variable to represent the "#datetime" input field
    var datetimeInput = d3.select("#datetime").property("value");

    // Initialize the variable to represent the "#city" input field
    var cityInput = d3.select("#city").property("value").toLowerCase();
    
    // Initialize the variable to represent the "#state" input field
    var stateInput = d3.select("#state").property("value").toLowerCase();

    // Initialize the variable to represent the "#country" input field
    var countryInput = d3.select("#country").property("value").toLowerCase();

    // Initialize the variable to represent the "#shape" input field
    var shapeInput = d3.select("#shape").property("value").toLowerCase();


    // Initialize the variable to represent all/any of the user data that's inputted
    var UserInput = datetimeInput || cityInput || stateInput || countryInput || shapeInput;




    //  If user enters in the Date field, then check for a result match in table and display just those matching rows
    if(datetimeInput) {

        dataFiltered = dataFiltered.filter((trRow) => trRow.datetime === UserInput);
        createTable(dataFiltered);
    }

    //  If user enters in the City field, then check for a result match in table and display just those matching rows
    if(cityInput) {

        dataFiltered = dataFiltered.filter((trRow) => trRow.city === UserInput);
        createTable(dataFiltered);
    }

    //  If user enters in the State field, then check for a result match in table and display just those matching rows
    if(stateInput) {

        dataFiltered = dataFiltered.filter((trRow) => trRow.state === UserInput);
        createTable(dataFiltered);
    }

    //  If user enters in the Country field, then check for a result match in table and display just those matching rows
    if(countryInput) {

        dataFiltered = dataFiltered.filter((trRow) => trRow.country === UserInput);
        createTable(dataFiltered);
    }

    //  If user enters in the Shape field, then check for a result match in table and display just those matching rows
    if(shapeInput) {

        dataFiltered = dataFiltered.filter((trRow) => trRow.shape === UserInput);
        createTable(dataFiltered);
    }
}



////////////////////////////    Ithamar Francois  ////////////////////////////
