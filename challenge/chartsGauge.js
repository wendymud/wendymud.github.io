function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample); 
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
// 2. Use d3.json to load and retrieve the samples.json file 
d3.json("samples.json").then((data) => {

    // 3. Create a variable that holds the samples array. 
    var samples = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var filteredSamples = samples.filter(sampleObj => sampleObj.id == sample);
  
    //  5. Create a variable that holds the first sample in the array.
    var result1 = filteredSamples[0];
    console.log(result1)
    
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = result1.otu_ids;
    var otu_labels = result1.otu_labels;
    var otu_values = result1.sample_values;
    console.log(otu_ids);
    console.log(otu_labels);
    console.log(otu_values);

    // 3. Create a variable that holds the washing frequency.
    //var washing = parseFloat(result.wfreq);
    //console.log(washing)

    // Create the yticks for the bar chart.
    var yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
  
    //4. Create the trace for the gauge chart.
    var gaugeData = [{
        domain: { x: [0, 1], y: [0, 1] },
        //value: washing,
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          axis: {range : [null,10],tickwidth:1},
          steps: [
            { range: [0, 2], color: "red" },
            { range: [2, 4], color: "orange" },
            { range: [4, 6], color: "yellow" },
            { range: [6, 8], color: "limegreen" },
            { range: [8, 10], color: "green" }]
        },
        title: {text : "Belly Button Washing Frequency <br> <sup>Scrubs Per Week</sup>"},
        "titlefont": {
          "size": 28,
        },
      }];
  
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { width: 600, height: 500, margin: { t: 0, b: 0 } 
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout)
    });
  }