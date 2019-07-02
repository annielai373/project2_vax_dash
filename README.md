# project2_visualization_proposal

VAX-DASH

Introduction

The rise of measles cases in the U.S. has been making recent headline news. From January 1 – April 26, 2019, the CDC reported 704 cases (1). For a highly contageous disease that was eliminated in the U.S. in 2000, the number of reported cases has now reached the highest it has been since 1994(1). Of these reported cases, 503 (71%) involved unvaccinated persons and most 689 (98%) were residents in the U.S.(1). This year alone, there had been thirteen outbreaks, comprising 663 (94%) of all reported cases(1). Six of the thirteen outbreaks were associated with underimmunized, close-knit communities which made up 88% of all cases(1). As of June 17, 2019, cases now reach 1,044 as reported by CNN (2).

Method

These headlines sparked our interest in looking further into vaccines and vaccinations in the U.S. For this project, we sourced 2018 datasets from VAERS (Vaccine Adverse Event Reporting System)(3). The goal of VAERS is early detection of potential safety problems in U.S.-licensed vaccines(4) as reported primarily by healthcare professionals and vaccine manufacturers. Specifically, we looked at the publically available "VAERS DATA" (49170 rows, 35 columns) and "VAERS Vaccine" (62,357 rows, 8 columns) CSV files. Data found within the CSV files contains, for instance, useful information on age and sex of persons receiving vaccination, state where vaccination was reported, along with the name of the vaccine. For this project, we chose to visualize these factors in hopes to gather some insight into visualizing any vaccination patterns. To get a clearer understanding of the data, we 'ETLed' the datasets using Python and Pandas and generated a readable dataframe. From this, we created a dynamic dashboard using JavaScript and HTML/CSS, and we utilized D3 visualization libraries to generate our 4 plots. 

Results

The first plot is a pie chart that reports on sex (male, female, or unknown). The second plot is a bar chart that reports on age groups. Another bar chart compares the total count of vaccinations in 2018 compared to 2017. The third plot is an interactive Leaflet map plot of the U.S. The final plot is a parralel coordinates plot.

Limitations

VAERS is a passive reporting system. The reliance on both mandatory and particularly non-mandatory reporting reduces the comprehensiveness of the datasets.
VAERS gathers data on adverse reactions to U.S.-licensed vaccines. Vaccination events of people who did not experience an adverse event was not captured in the VAERS datasets. 

---
Team 4: Sylviane Fezeu, Annie Lai, Alex Motes, Flora Ruan, Krishna Tatineni

Sources:
1. https://www.cdc.gov/mmwr/volumes/68/wr/mm6817e1.htm#F1_down
2. https://www.cnn.com/2019/06/17/health/measles-cases-us-outbreak-bn/index.html
3. https://vaers.hhs.gov/data/datasets.html
4. https://vaers.hhs.gov/about.html
