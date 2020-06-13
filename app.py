import os

from flask import Flask
from flask import render_template
from flask import request
from flask import Flask, request, url_for, redirect, render_template

from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    
    return render_template("home.html")


@app.route("/ro", methods=["GET", "POST"])
def ro():
    
    return render_template("ro.html")

@app.route("/lillian", methods=["GET", "POST"])
def lillian():
    
    return render_template("lillian.html")


@app.route("/simon", methods=["GET", "POST"])
def simon():
    
    return render_template("simon.html")


@app.route("/map", methods=["GET", "POST"])
def map():
    
    return render_template("map.html")


  
if __name__ == "__main__":
    app.run(debug=True)