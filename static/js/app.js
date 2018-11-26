// from data.js
var tableData = data;

// YOUR CODE HERE
// remove table row for filtered table
function Table1(){
    // Get a reference to the table body
    var tbody = d3.select("tbody");
    // Use d3 to update each cell's text with
    tableData.forEach((UFO) => {
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(([key, value]) => {
        // For each row, Append a cell to the row for each value in the report object
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

//call function table to display the table in HTML 
Table1();


// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
  
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // Get the filtered data
  var filterUFO = tableData.filter(date => date.datetime === inputValue);

  function Table2(){
    d3.selectAll("tbody tr").remove();
    // Get a reference to the table body
    var tbody = d3.select("tbody");
    // Use d3 to update each cell's text with
    filterUFO.forEach((UFO) => {
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(([key, value]) => {
        // Append a cell to the row for each value in the report object
        var cell = row.append("td");
        cell.text(value);
        });
    });
  };
  
  //Call function but with filterdata as the input data 
  Table2();

});
