---
title: 'Progress Updates'
date: '2024-01-27T12:32:38-05:00'
draft: false
---

I figured I'd write a progress update about some of the projects I had been working on since this is one of the few weekends I'm bored at home due to having to do a medical test.

<!--more-->

## Ticket Auction Manager - Python Edition

For a little while I have been working on an edition of Ticket Auction Manager which is written in Python to make it available to those who don't have access to Microsoft products and those who wish not to use them.

So far so good, but I have been learning a little bit at a time about writing programs in Python. So here's what I learned and implemented so far.

* TTKBootstrap - Program controls as similar to the Access version as I could get them.
* SQLAlchemy - After playing around with various connectors of different SQL server providers I landed on SQLAlchemy for two reasons.
    * The ability to implement different SQL engines/servers based on user input.
    * Manipulating DB records as if they're Python Objects.
        * Honestly, I didn't think I'd need this as justification until I played around with it to realize how much easier it is.
* Jinja2 - Considering other options, Jinja2 was about the best templating engine to use for this project because:
    * Offline - Some other frameworks, despite being free, need online accounts to work. Jinja2 does not (one of the specs for TAM as a project is the ability to be airgapped for security and cost)
    * Simplicity - Jinja2 seemed to have some of the best and simple commands I'd seen over others.

Now that the forms are working, and the project can generate some semblance of reports, my next step is to implement some form of user controls to allow users to select what sort of SQL engine they want to use for the backend as well as what server they want to connect to if they do want to use a remote server.

That one might take a little doing as I don't know where to start on that, honestly.

[TAM-Python on GitHub](https://github.com/dbob16/ticket-auction-manager-py)

## Passphrase Dice

This one is a little program I wrote to allow folks to generate passphrases using EFF's long wordlist which can be used with 5 6-sided dice to generate passphrases.

I'm not sure what the future holds if I don't pause work on the project (It's mostly functional currently) currently. Maybe it will be trying to get it whitelisted when compiled by something like PyInstaller (even Defender seems to think it's malware), which is why I don't keep up-to-date releases available. It's much easier for people to learn how to download .py installers, to install dependencies, and run; than it is to get them to make exceptions in 5-10 different antimalware suites.

If I were to guess maybe some sort of permanent DB solution for the entries, which would boost launch times, with the ability to "refresh" it with custom wordlists or EFF's other wordlists.

[Passphrase Dice on GitHub](https://github.com/dbob16/passphrase-dice)

## Startup and Medical Issues

Since I'm currently involved with classes starting up where I work, my time will be limited enough to not work any of these projects in the coming weeks. So don't be alarmed if I go a few weeks without posting any repo updates.

On top of that I'm finally at the bottom of the waitlist for getting some more tests to see why I have uncontrollable heartburn and pain while breathing, so I'll see if that will get in the way as well.