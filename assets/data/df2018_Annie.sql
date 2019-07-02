-- Grab the table.
SELECT * FROM project_2.df2018_annie2 ;

-- Grab the STATE column from table and list the distict states.
SELECT DISTINCT STATE FROM project_2.df2018_annie2 ;

-- Grab the STATE column from table and count the distict states (there are 56).
SELECT COUNT(DISTINCT STATE) FROM project_2.df2018_annie2 ;

-- Vaccination count according to state.
SELECT DISTINCT STATE, COUNT(STATE) AS "State Count" 
	FROM project_2.df2018_annie2 GROUP BY STATE;
    
-- Vaccination count, by age group, according to state.
SELECT DISTINCT Age_Categories, COUNT(DISTINCT STATE) 
	FROM project_2.df2018_annie2
	GROUP BY Age_Categories;
    
-- List distinct sex (F = female, M = male, U = undefined)
SELECT DISTINCT SEX FROM project_2.df2018_annie2;

-- Count of vaccinations according to distinct sex (F = female, M = male, U = undefined)
SELECT COUNT(SEX) FROM project_2.df2018_annie2
	GROUP BY SEX;
    
-- Georgia sex count.
SELECT * FROM STATE, COUNT(STATE) 
	FROM project_2.df2018_annie2;