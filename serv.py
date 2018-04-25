#!/usr/bin/env python3

from flask import Flask, render_template
import sqlite3

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html', name='index')


if __name__ == "__main__":
    app.run(host='0.0.0.0')