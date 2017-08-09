#!/usr/bin/perl

use 5.014;
use File::Spec;

my $dir = File::Spec->catpath( 'C:', '/Node/BCaoFitbit/data/', 'BCaoFitbit.csv');

# Import data from .csv file.
system ("mongoimport --db BCaoFitbit --collection fitbitdata --type csv --drop --file C:$dir --headerline");

# This totally would work on Windows or Unix systems, but since I am using Cygwin on Windows like a maniac, there is too much
# fixin' in order to make the path compatible due to /cygdrive/c/... format.
#system ("mongoimport --db BCaoFitbit --collection fitbitdata --type csv --drop --file $dir --headerline");

print "\nConverting Date to ISO-Date type:";

# To convert date from MM/DD/YYYY to MongoDB Date type:
system ('mongo BCaoFitbit --eval "db.fitbitdata.find().forEach(function(doc) { doc.Date = new Date(doc.Date); doc.Date.getHours(); doc.Date.setHours(23,0,0,0); db.fitbitdata.save(doc);})"');