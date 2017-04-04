#!/usr/bin/perl

use 5.014;

#Import data from .csv file.
system ('mongoimport --db BCaoFitbit --collection fitbitdata --type csv --drop --file C:/Node/BCaoFitbit/data/BCaoFitbit.csv --headerline');

print "\nConverting Date to ISO-Date type:";

# To convert date from MM/DD/YYYY to MongoDB Date type:
system ('mongo BCaoFitbit --eval "db.fitbitdata.find().forEach(function(doc) { doc.Date = new Date(doc.Date); db.fitbitdata.save(doc);})"');