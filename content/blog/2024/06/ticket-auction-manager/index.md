+++
date = '2024-06-28T11:13:00-04:00'
draft = false
title = 'Ticket Auction Manager becoming more crossplatform'
+++

Now that I've primarly switched over to Linux, I have been working on another Python version of Ticket Auction Manager. This time under my dbob16/tam-py repo. Because Python is more flexible as a programming language, it has one extra feature compared to the Access-based versions prior.

The ability to add new tablesets, i.e different types of tickets and items, on the fly.

<!--more-->

So if someone is managing a penny social, and they have different names for their tickets and baskets other than "regular" and "specialty," that should no longer be a problem for TAM to accommodate that need.

Which also means that the only table required to get started with it is the Prefixes table which is named prefixes, with one column as a varchar and primary key named prefix, and another as a varchar named bootstyle.

## TTKBootstrap

I wanted to be able to build a modern looking UI relatively quickly. I already had some knowledge of tkinter and ttk. So I came across TTKBootstrap and decided to use it for this project.

## Jinja2

For generating reports I decided for Jinja2. Since I already understood some HTML and CSS, it just made sense. And I really didn't want to employ something cloud-based like ReportLab for a project which has to be able to run in the absence of internet.

## Working pretty smoothly

I introduced the ability to generate random names on the ticket entry forms, by pressing Alt + R. Also for the drawing form, I implemented the same Alt + R shortcut which looks up a random ticket ID on the pertaining tickets form and puts it into the winning ticket box. This allows stress-tests at paces faster than any human can accomplish.

So far I got up to 2,000 tickets and 260 winners entered. It still processed the report and saved it as an HTML file very quickly.

On that note, if you have to do administration of a penny social or chinese auction that's large in scale, and you're on a platform where running Microsoft Access is out of the question completely; you can give [TAM-PY](https://www.github.com/dbob16/tam-py) a shot.