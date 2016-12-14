#!/usr/bin/perl

use 5.014;

exec ('mongoimport --db BCaoFitbit --collection fitbitdata --type csv --drop --file C:/Node/BCaoFitbit/data/BCaoFitbit.csv --headerline');