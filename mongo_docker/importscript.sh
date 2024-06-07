#!/bin/bash
mongoimport --uri="mongodb://localhost:27017/main?authSource=admin" -u root -p secret --collection=products --file=/tmp/products.json --jsonArray