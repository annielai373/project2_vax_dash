# project2_vax_dash

VAX-DASH

Introduction

The rise of measles cases in the U.S. has been making recent headline news. From January 1 – April 26, 2019, the CDC reported 704 cases (1). For a highly contageous disease that was eliminated in the U.S. in 2000, the number of reported cases has now reached the highest it has been since 1994(1). Of these reported cases, 503 (71%) involved unvaccinated persons and most 689 (98%) were residents in the U.S.(1). This year alone, there had been thirteen outbreaks, comprising 663 (94%) of all reported cases(1). Six of the thirteen outbreaks were associated with underimmunized, close-knit communities which made up 88% of all cases(1). As of June 17, 2019, cases now reach 1,044 as reported by CNN (2).

Method

These headlines sparked our interest in looking further into vaccines and vaccinations in the U.S. For this project, we sourced two 2018 datasets and one 2017 dataset from VAERS (Vaccine Adverse Event Reporting System)(3). The goal of VAERS is early detection of potential safety problems in U.S.-licensed vaccines(4) as reported primarily by healthcare professionals and vaccine manufacturers. For this project, we chose to visualize these factors in a dynamic dashboard in hopes to gather some insight on any vaccination patterns.

-- Pre-Aggregation --
We developed an ETL process which merged three related datasets. This process involved downloading and extracting csv data from VAERS, specifically 2018 "VAERS DATA" (49,170 rows, 35 columns), 2018 "VAERS Vaccine" (62,357 rows, 8 columns), and 2017 "VAERS DATA" (38,878 rows, 35 columns) files. Data found within, for instance, contained information on age and sex of persons receiving vaccination, state where vaccination was documented, along with the name of the vaccine. We used Python and Pandas to get a clearer understanding of the datasets. For example, we categorized vaccines according to type (i.e., live-attenuated, inactivated,	combined,	"SRPC", toxoid, and	vaccine not specified) and performed a 'groupby' function. Similarly, we also categorized according to age-groups and by region in the U.S. For ease of access to the data for further analysis, we created a sqlite database, loaded our 3 pre-aggregated dataframes as sqlite tables, and queried from it. These 3 pre-aggregated sqlite tables were later employed through our Flask server.

-- Post-Aggregation --
To create our dynamic dashboard, our index.html and style.css files served as our starting web framework. We utilized plotly.D3 visualization libraries to generate 4 JavaScript plots. Each plot (4 JavaScript files) was referenced in both the index.html file and respective @app routes were created in the app.py file (along with the required files to run our Flask server) that iterated through our sqlite tables. 

Results

The first visualization is an interactive Leaflet map plot of the U.S. It contains a tooltip displaying the total 2018 vaccine count according to selected state upon hover. The second plot is a parallel coordinates plot that displays 3 multivariate factors: vaccine category, sex, and U.S. region. The third visualization is a donut chart that reports on sex (male, female, or unknown) of those vaccinated in both the state of Georgia and in the U.S. The final visualization is an upright bar chart comparing the total vaccination count and (total percentage) based on vaccination category in 2018 compared to 2017.

Limitations

VAERS is a passive reporting system. The reliance on both mandatory and particularly non-mandatory reporting reduces the comprehensiveness of the datasets. VAERS gathers data on adverse reactions to U.S.-licensed vaccines. Vaccination events of people who did not experience an adverse event was perhaps not captured in the VAERS datasets.

Team 4: Sylviane Fezeu, Annie Lai, Alex Motes, Flora Ruan, Krishna Tatineni

Sources:

https://www.cdc.gov/mmwr/volumes/68/wr/mm6817e1.htm#F1_down
https://www.cnn.com/2019/06/17/health/measles-cases-us-outbreak-bn/index.html
https://vaers.hhs.gov/data/datasets.html
https://vaers.hhs.gov/about.html
