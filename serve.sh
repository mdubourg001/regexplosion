#!/usr/bin/env bash

. ./.env/bin/activate

export FLASK_APP=./serv.py
flask run