import numpy as np

import sqlite3
from flask import Flask, jsonify, render_template
# ----------------------------------------------
## Ask if sqlite and sqlalchemy conflict (line 7-12)
# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine, func

# from flask_sqlalchemy import SQLAlchemy
# ----------------------------------------------

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

# ----------------------------------------------
## Lines 25-37 reate to SQLAlchemy
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite://db/vax_data_db.sqlite"
# db = SQLAlchemy(app)


# reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(db.engine, reflect=True)

## Line 36-37 relate to SQLAlchemy. Save references to each table
# Samples_2017 = Base.classes.df2017_Alex
# Samples_2018 = Base.classes.df2018_Alex
# ----------------------------------------------
@app.route("/")
def welcome():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/api/v1.0/map")
def map():
    # Step 1: Create connection
    conn_map = sqlite3.connect("db/vax_data_db.sqlite")
    # Step 2: Cursor the connection.
    cur_map = conn_map.cursor()
    # Step 3: execute sql statement via cursor
    cur_map.execute("SELECT * from syl_map_data")
    # Step 4: Fetch step3 and save sql results in rows.
    rows_map = cur_map.fetchall()
    # Step 5: create empty list and dictionary for multiple lists.
    mapList_1 = []
    mapList_2 = []
    mapList_3 = []


    # Step 6: literate each row of the data and append data to list.
    for row in rows_map:
        mapList_1.append(row[0])
        mapList_2.append(row[1])
        mapList_3.append(row[2])


    column_map = dict()
    column_map["Code"] = mapList_1
    column_map["Count"] = mapList_2
    column_map["State"] = mapList_3
    # Step 7: Jsonify the dictionary or list. 
    return jsonify(column_map)



@app.route("/api/v1.0/parallel")
def parallel():
    # Step 1: Create connection
    conn_parallel = sqlite3.connect("db/vax_data_db.sqlite")
    # Step 2: Cursor the connection.
    cur_parallel = conn_parallel.cursor()
    # Step 3: execute sql statement via cursor
    cur_parallel.execute("SELECT * from df2018_FloraUpdated")
    # Step 4: Fetch step3 and save sql results in rows.
    rows_parallel = cur_parallel.fetchall()
    # Step 5: create empty list and dictionary for multiple lists.
    parallelList_1 = []
    parallelList_2 = []
    parallelList_3 = []
    parallelList_4 = []
    parallelList_5 = []
    parallelList_6 = []
    parallelList_7 = []
    parallelList_8 = []
    parallelList_9 = []
    parallelList_10 = []

    # Step 6: literate each row of the data and append data to list.
    for row in rows_parallel:
        parallelList_1.append(row[2])
        parallelList_2.append(row[13])
        parallelList_3.append(row[4])
        parallelList_4.append(row[5])
        parallelList_5.append(row[7])
        parallelList_6.append(row[8])
        parallelList_7.append(row[14])
        parallelList_8.append(row[10])
        parallelList_9.append(row[11])
        parallelList_10.append(row[12])


    column_parallel = dict()
    column_parallel["SEX"] = parallelList_1
    column_parallel["Division"] = parallelList_2
    column_parallel["AGE_YRS"] = parallelList_3
    column_parallel["Vaccine_Name"] = parallelList_4
    column_parallel["Vaccine_Category"] = parallelList_5
    column_parallel["Sex2"] = parallelList_6
    column_parallel["Division2"] = parallelList_7
    column_parallel["Vaccine_Name2"] = parallelList_8
    column_parallel["Age_Categories2"] = parallelList_9
    column_parallel["Vaccine_Category2"] = parallelList_10
    # Step 7: Jsonify the dictionary or list. 
    return jsonify(column_parallel)

# ----------------------------------------------
## Line 128-146 relate to SQLAlchemy. 
# @app.route("/bar")
# def bar():
#    """Return the MetaData for a given sample."""

#    results_2017 = db.session.query(Samples_2017.Vaccine_Category, func.count(Samples_2017.Vaccine_Category)).group_by(Samples_2017.Vaccine_Category).all()
#    results_2018 = db.session.query(Samples_2018.Vaccine_Category, func.count(Samples_2018.Vaccine_Category)).group_by(Samples_2018.Vaccine_Category).all()
   
#    vax = {}
#    vax["Category"] = []
#    vax["count_2017"] = []
#    vax["count_2018"] = []
#    for result in results_2017:
#        vax["Category"].append(result[0])
#        vax["count_2017"].append(result[1])
#    for result in results_2018:
#        vax["count_2018"].append(result[1])

#    #print(got_deaths)
#    return jsonify(vax)
# ----------------------------------------------

# @app.route("/api/v1.0/bar")
# def bar():
#     # Step 1: Create connection
#     conn_bar = sqlite3.connect("db/vax_data_db.sqlite")
#     # Step 2: Cursor the connection.
#     cur_bar_2017 = conn_bar.cursor()
#     cur_bar_2018 = conn_bar.cursor()
#     # Step 3: execute sql statement via cursor
#     cur_bar_2017.execute("SELECT * from df2017_Alex")
#     cur_bar_2018.execute("SELECT * from df2018_Alex")
#     # Step 4: Fetch step3 and save sql results in rows.
#     rows_bar_2017 = cur_bar_2017.fetchall()
#     rows_bar_2018 = cur_bar_2018.fetchall()
#     # Step 5: create empty list and dictionary for multiple lists.
#     barList_1 = []
#     barList_2 = []
#     barList_3 = []
#     barList_4 = []
#     barList_5 = []
#     barList_6 = []
#     barList_7 = []
#     barList_8 = []
#     barList_9 = []
#     barList_10 = []
#     barList_11 = []
#     barList_12 = []
#     barList_13 = []
#     barList_14 = []

#     # Step 6: literate each row of the data and append data to list.
#     for row in rows_bar_2017:
#         barList_1.append(row[1])
#         barList_2.append(row[2])
#         barList_3.append(row[3])
#         barList_4.append(row[4])
#         barList_5.append(row[5])
#         barList_6.append(row[6])
#         barList_7.append(row[7])

#     for row in rows_bar_2018:
#         barList_8.append(row[1])
#         barList_9.append(row[3])
#         barList_10.append(row[4])
#         barList_11.append(row[2])
#         barList_12.append(row[5])
#         barList_13.append(row[6])
#         barList_14.append(row[7])


#     column_bar = dict()
#     column_bar["VAERS_ID_2017"] = barList_1
#     column_bar["STATE_2017"] = barList_2
#     column_bar["AGE_YRS_2017"] = barList_3
#     column_bar["SEX_2017"] = barList_4
#     column_bar["Vaccine_Name_2017"] = barList_5
#     column_bar["Age_Categories_2017"] = barList_6
#     column_bar["Vaccine_Category_2017"] = barList_7
#     column_bar["VAERS_ID_2018"] = barList_8
#     column_bar["STATE_2018"] = barList_9
#     column_bar["AGE_YRS_2018"] = barList_10
#     column_bar["SEX_2018"] = barList_11
#     column_bar["Vaccine_Name_2018"] = barList_12
#     column_bar["Age_Categories_2018"] = barList_13
#     column_bar["Vaccine_Category_2018"] = barList_14

#     # Step 7: Jsonify the dictionary or list. 
#     return jsonify(column_bar)


# @app.route("/api/v1.0/donut")
# def donut():
#     # Step 1: Create connection
#     conn_donut = sqlite3.connect("projectName.sqlite")
#     # Step 2: Cursor the connection.
#     cur_donut = conn_donut.cursor()
#     # Step 3: execute sql statement via cursor
#     cur_donut.execute("SELECT * from donuttable")
#     # Step 4: Fetch step3 and save sql results in rows.
#     rows_donut = cur_donut.fetchall()
#     # Step 5: create empty list and dictionary for multiple lists.
#     donutList_1 = []
#     donutList_2 = []
#     donutList_3 = []
#     donutList_4 = []
#     donutList_5 = []
#     donutList_6 = []
#     donutList_7 = []

#     # Step 6: literate each row of the data and append data to list.
#     for row in rows_donut:
#         donutList_1.append(row[0])
#         donutList_2.append(row[1])
#         donutList_3.append(row[2])
#         donutList_4.append(row[3])
#         donutList_5.append(row[4])
#         donutList_6.append(row[5])
#         donutList_7.append(row[6])


#     column_donut = dict()
#     column_donut["column name"] = donutList_1
#     column_donut["column name"] = donutList_2
#     column_donut["column name"] = donutList_3
#     column_donut["column name"] = donutList_4
#     column_donut["column name"] = donutList_5
#     column_donut["column name"] = donutList_6
#     column_donut["column name"] = donutList_7
#     # Step 7: Jsonify the dictionary or list. 
#     return jsonify(column_donut)



if __name__ == "__main__":
    
    app.run(host ="127.0.0.1", port = 443, debug=True)
