+++
lastmod = 2023-11-25T16:30:00-05:00
title = 'Ticket Auction Manager'
draft = false
+++

Ticket Auction Manager is a project that I work on for an annual Theme Basket Auction I help out at for my local SPCA. The current version features highly optimized VBA code on the front end especially for entering ticket buyers' names and phone numbers. I currently have it on GitHub with the link below:

[Github Link](https://www.github.com/dbob16/ticket-auction-manager/)

Some documentation is below:

## Backends

For the backend, you can either use Access's built in DB engine with the version marked "Standalone" if you only need to enter from one computer at a time. Or you can connect it to an ODBC data source by naming the machine data source, in Windows' ODBC Data Sources command applet. I have throughly tested it with a MariaDB backend mapped through ODBC with up to three volunteers entering data at one time. 

By default the "Connected" version looks for the ODBC data source named "tam".

## Videos

I have a videos where I show how to use it, and another where I show how to setup the connected version of it. They are linked below:

* [How to use TAM](https://odysee.com/@Dilan:c/Ticket-Auction-Manager---How-to-use:3)
* [Setting up TAM for connected entry](https://odysee.com/@Dilan:c/Ticket-Auction-Manager---How-to-setup-Connected-version:3)

## Precompiled Releases

If you prefer not to download the source file and installer script and manage dependencies for yourself, I have compiled ACCDE versions of the front-end as well as an installer for the backend, which will work for MySQL or MariaDB. Those are available below:

* [Github Releases page](https://github.com/dbob16/ticket-auction-manager/releases)

## Future Python version

I'm making another page for it, but I have been working on a Python-only version of it so that individuals who don't like using Microsoft products will have an option. To be fair, it may not be as polished as this Access version.