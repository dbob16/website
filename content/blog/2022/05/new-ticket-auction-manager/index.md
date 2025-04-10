+++
date = '2022-05-06'
draft = false
title = 'New Ticket Auction Manager Version'
+++

 I released a new version of the Access database I use to manage the annual SPCA Theme Basket Auction for the SPCA Serving Allegany County. The changes are below:

 <!--more-->

* Built from the ground up to be more streamlined to fit smaller screens better.
* New script based (VBA) row creation method. Which means no more tally table, essentially eliminating multiple problems.
    * Hard row limit - With the prior tally table, since I filled it up to 1 million rows, anything past that it wouldn't be able to create rows for it. The new method is only limited by VBA's Long Integer datatype, which I tested up to the 30 million range.
    * Filesize overhead - With the tally table, the database while functionally empty was 26MB. Now with this new method, it's only around 1MB. Hashtag 24 times smaller.
    * No more Yes/No prompts when creating rows - Just click the button, and the rows automatically appear.
    * Single button to do multiple actions - If data already exists it will show that existing data instead. And if it doesn't, the same Update button will create the rows needed to enter new data.
* Reports have an additional phone number sort layer. Which means if you have two people with the same first and last name but different phone numbers, they'll be easier to differentiate on the final report.

Originally I had a OneDrive link to it when I posted it to my Blogger page. Now that I have converted this article to my new Hugo-based site, I'll link to my [GitHub Repo](https://www.github.com/dbob16/ticket-auction-manager).