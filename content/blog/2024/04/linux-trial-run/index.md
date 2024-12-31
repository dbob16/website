---
title: "Doing another Linux trial run"
date: '2024-04-09T15:29:25-04:00'
draft: false
---

After I noticed some more changes to Microsoft's Windows lately I decided to give Linux another go. Currently on Debian for my laptop, though that may change in the future, and I selected EndeavorOS on my desktop due to my graphics card being too new for Debian.

So far, so good. For the first part I will highlight what has gotten me to the point of trying Linux again after a year and a half of going back to Windows.

## Being shut out

Even though it's something that Microsoft claims that they would never do, locking someone out of their own computer which they've purchased, I've seen it happen in one particular situation.

A user that I do side work for changed their phone number and forgot to update it on their Microsoft account, until they forgot their computer's PIN and went to reset that.

I helped them with changing the phone number on their account, but there was an arbitrary 30 day wait from the change of the phone number to be able to use said phone number to change the PIN number of the computer.

Keep in mind the user was there, probably had some sort of ID card and was willing to send it to Microsoft to prove that the computer was in their name. So you're talking a company that does an odd 300 points of data collection on said Windows 11 Home computer, can't do a simple name verification and instead prompts to do a 30 day waiting period because they're too cheap to hire a few humans to review ID cards.

Then to add insult to injury, once we did wait out that 30 days, suddenly the Reset PIN link up and disappeared from the laptop. So I had to break into it using recovery mode and by replacing utilman with an instance of cmd to be able to add a user via command-line.

This to me demonstrates that Microsoft not only has the ability, they also have the willingness to shut someone out for something as petty as not giving them an up-to-date phone number.

## Wacky update policies

Something must have changed on the update policies regarding Windows because I have been getting a lot of bricked installs due to Windows updating at the worst times, like when there's 10% battery left and the laptop is not plugged into a charger.

Like a multibillion dollar company can't introduce a little bit of logic when it comes to deploying updates. Let's not do them if the laptop has less than 50% battery left and it's **not** plugged into a charger. That would be great if someone in charge of the update policies over there at Redmond reads this, please do this. It'll save a lot of people the costs, frustration, and data loss of having to reinstall Windows.

## Forced online accounts and Bitlocker

To complicate the first two reasons, forced online accounts and Bitlocker just adds insult to injury.

It seems like with every release Windows 11 gets closer and closer to not allowing users to add offline users at all to the Operating System. This is a horrible idea, especially for customers in rural or otherwise slow internet zones, and yes these places still exist. I live near one of them.

Forcing Bitlocker upon unsuspecting users is another thing because this one leads to data loss practically direct. Because there are no good WinPE or Linux-based utilities to decrypt it with the device's recovery-key (available from said users' Microsoft account), so if something happens to say the CPU or motherboard, that data is irrecoverable.

Unless you can plug that drive into a different machine, try to boot off of it, then enter the recovery key and pray that the machine is similar enough to allow you to go into Settings and turn it off.

## Nags and Crap

Also at the top of my list is the nags and crap they seem to be pushing day-by-day. Whether it's getting nagged to use Edge because I as a user decided to use Firefox. Or having Copilot be put on my taskbar after every update, when I explicitly change that setting every time to turn it off.

Now there's talk about Microsoft putting ads on the start menu. I don't get it, am I alone in just wanting a clean experience OS wise and just being free in making my own choices? Are Mac users onto something?

## Conclusion

Maybe I don't understand the value of these things because I have a lot of knowledge in computers. Maybe for people who don't know much about tech and don't care to learn, having "extra help" in using their computers is a good thing for them.

But for this arguable "power user," I'm out at least for now. And unless Microsoft changes course I think I'm staying with Linux.