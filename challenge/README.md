# Plotly - Belly Button Biodiversity
### Overview 
The request for this challenge involved creating engaging online data visualizations to analyze a given dataset regarding patient research.  There are many subjects that were tested, so the 'ask' was to ensure a way to toggle thru each subject's data on the website, filtering through via Test ID.  As you can see in Figure1, there is a dropdown on the left where users may select a certain patient IDs and get an idea of the demographics of those particular subjects.

## Required Deliverables
1. Create a Horizontal Bar Chart depicting the top 10 bacterial species (OTUs)
2. Create a Bubble Chart displaying Bacteria Cultures per sample when the Test Subjects are selected from the dropdown
3. Create a Gauge Chart that displays the weekly washing frequency per Test Subject, again displaying each from the dropdown

![Figure1.PNG](/img/Figure1.PNG)
#### Figure1

As you select the Test Subjects in the dropdown, in Figure2, you'll also be able to see the Belly Button Washing Frequency on a gauge chart.  This depicts the scrubs per week for each subject.  It's interesting to see the correlation of washing frequency to the amount of OTUs and Bacteria Cultures per sample.

![Figure2.PNG](/img/Figure2.PNG)
#### Figure2

The changes will also be immediately revealed in the other two charts, the OTU Chart and the Bacteria Cultures Per Sample.

### Tools Utilized
This website was designed in HTML and JavaScript code.  Plotly was used to create the charts and the image was taken from this source: https://www.healthing.ca/wellness/know-your-body-belly-buttons-and-their-risks.  D3.js was used to create listeners to help with identifying changes within user interaction on the site.

### Summary
The work here was to create an interactive site, displaying data after some user interaction.  The different charts were utilized to depict different types of graphical data, as well as making the site more fun and interactive.  Customization was added in to give the page a more individual feel and flavor.  An image was added to the jumbotron, the background color of the page was changed, and the layout of the page was moved around a bit to add in the fun. 