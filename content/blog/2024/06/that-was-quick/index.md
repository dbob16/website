+++
date = '2024-06-02T23:36:46-04:00'
draft = false
title = 'Well... That Was Quick'
+++

In recent news, Microsoft rolls out a new AI feature which will be available and possibly on by default for devices labelled with the "Copilot+" badging, called Recall. Which saves screenshots every few seconds and uses AI-backed optical character recognition as well as AI identification of images to save descriptors of said activities.

The following linked video is by Eric Parker, where he plays around with the current implementation of Recall, and confirmed some findings by security researchers.

[I enabled Recall: How Creepy is it?](https://youtu.be/N9DnwB02hJw?si=jFHRNx_YjFlLnFoD)

## How it is stored

The way it works, is that it seems to store the data in two different sets.

1. OCR and Image descriptors: Are saved in an unencrypted SQLite DB, which allows access to it by any sort of malware payload that can open it despite some filename obfuscation.
2. Screenshots: Saved with some filename obfuscation but in heavily compressed image formats, which may take a little longer for researchers to reverse, if they hadn't done so yet.

Keep in mind, current testing is done without any sort of Neural Processing Unit (NPU for short), as the Copilot+ PC's with NPU's on board are releasing later this month. Maybe Microsoft plans on using it to do some sort of encryption to keep interested malware developers at bay for the feature's gametime release.

But again, who knows. A major flaw like this isn't necessarily outside of the scope of moves Microsoft has been making lately.

## A facepalm of epic proportions

Even though Recall as a feature is interesting outside of the initial feeling of creepiness, it really needs to be secure out of the gate. If Microsoft releases this as-is, they might as well be handing users' data to scammers on a shiny buffet plate. Even if it's patched in a few days, Microsoft could at least end up with a few hundred cases of data theft on their hands.

As some users pointed out, it might be the reason why Microsoft is going to start enabling Bitlocker out of the gate. The truth is that Bitlocker only really helps keep your data out of the hands of curious computer thieves. When a computer is running and unlocked, any data protected by Bitlocker is pretty easily accessible.

## Time will tell

We'll have to see if this is patched or if some NPU encryption magic is going to happen after the Copilot+ PC after the June 18th launch.

When hedging my bets though I was thinking 2 weeks to a month before researchers and hackers developed a way to get into its data on client PC's. I for one wasn't expecting the implementation to be so sloppy that "before launch" was a valid answer.