+++
date = '2025-03-29T20:40:44-04:00'
draft = false
title = 'Microsoft Removing Bypassnro'
[params]
  comments = true
+++

In recent news, Microsoft is removing bypassnro from its new Windows 11 images moving forward. A move that will effect users of Windows 11 Home mostly.

<!--more-->

[News article from TheVerge here](https://www.theverge.com/news/638967/microsoft-windows-11-account-internet-bypass-blocked)

As per the article, the functionality can be added back in (for now) by running the following command before running `oobe\bypassnro`:

```
reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\OOBE /v BypassNRO /t REG_DWORD /d 1 /f shutdown /r /t 0
```

Microsoft does cite that it is for security reasons. The only reason I could see that being a legit reason is due to online installations having Bitlocker enabled by default.

My experience says otherwise though.

## Password Management

The more people are required to create accounts, the more they're going to use insecure passwords. Even though I get that it shouldn't be Microsoft's problem, but it's just reality.

If a malicious actor guesses into someone's Microsoft account; they can do more than just access the user's Desktop, Documents, and Pictures. They can perform a remote wipe on the user's computer, track their location, or more.

## Other issues

Requiring online access can introduce a slew of other issues.

One of the reasons I switched to Linux personally, is the fact that the last time I tried to use it for the annual Theme Basket Auction I participate in, the location didn't have internet. Within minutes, my computers were required to connect to the internet.

I had to take one of them outside with my cell phone to get enough signal with the wifi tether to be able to log them back in.

Not to mention, the online login process introduces more of an attack surface than 

## Linux Advocacy

Even though I am now a Linux user, will this have me advising others to use it as well? Maybe, I guess it depends on how many issues I see with this decision moving forward.

But I can tell you this move makes me take one step closer to being a full-blown Linux evangelist.