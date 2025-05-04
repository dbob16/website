+++
title = 'Tariff Calculator'
date = '2025-05-03T15:15:07-04:00'
draft = false
[params]
comments = true
+++

This post is to introduce my new tariff calculator web app, a small project I just created in an hour or two, to practice what I have been learning about web-app development.

One of the reasons I made it is to correct a couple of pitfalls I have seen with tariff calculators thus far:

- Distribution Factor: Calling it this for now because I'm not sure if this already has a technical name. But this is a percentage of the price that accounts for USA-side costs and profit margins; including but not limited to:
  - Final assembly: Some products may source parts or assemblies from the origin country, but the entire product's final assembly may take place here in the USA (I'm a citizen of the USA).
  - Transportation: Naturally, some of the cost of transporting the item to the warehouse from the port is built into the retail price of an item.
  - Profit Margins: Importers typically build a profit margin into the final retail price of an item.
- Total Cost: While it's a disclaimer for now (I may play around with toggling it), at some point in the future retailers will build tariffs into the retail price. While the tariff cost result of this calculator will still be somewhat accurate, you can disregard the total price if the tariff is already included in the price of the item.

Feel free to comment and correct me if I'm wrong about any of this. I'll issue corrections when I have time.

<!--more-->

[Page with tariff-calculator webapp](/projects/tariff-calculator/)