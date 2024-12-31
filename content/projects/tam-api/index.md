+++
lastmod = 2024-10-16T15:20:33-04:00
title = 'Ticket Auction Manager'
draft = false
+++

Before publishing this I decided to entirely rewrite Ticket Auction Manager, from scratch, using Python and FastAPI.

After some initial performance testing between sending DB traffic over the network and using an API, the API is a lot faster. So I decided to transition Ticket Auction Manager to it altogether.

[Link to project on GitHub](https://www.github.com/dbob16/tam-api)