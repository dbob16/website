+++
date = '2024-04-23T11:27:50-04:00'
draft = false
title = 'Is Microsoft good for Enterprises?'
url = '/blog/2024/04/microsoft-enterprise.html'
+++

Contrary to my previous article, just wanted to post one to highlight one area where continuing to use Microsoft and Windows for now makes much more sense, Enterprises.

By day, I actually work for an organization with an enterprise-like environment in place, using mostly Windows endpoints and some Windows servers running on a cluster of hypervisors. And in that context Microsoft and Windows is easier and makes a lot of sense.

## Ease of training

Training new users and new technicians can be an expensive headache, especially if said devices aren't intuitive enough to use naturally.

My criticisms aside of Microsoft wanting to make decisions for users on things as simple as wanting to put CoPilot on their taskbars, Windows is still one of the easiest to use desktop Operating Systems. The only other one that comes close are the mobile OS's, such as Android and iOS, as well as Mac OSX. While Linux is easier than ever to use, it's still not user friendly enough for the masses to use, including your typical office employee.

Honestly, if my workplace suddenly said "we're switching to Linux," I'd probably be putting in for a pay raise. At the very least, something like Linux is harder to initially set up on the enterprise level. Nothing I have seen yet competes with Active Directory and Entra as far as ease of administration. So hats off to Microsoft for developing a seemless system to administer end user devices.

I'm thinking for the environment I'm in at least, we'd be paying a lot of dough for continued support from a company like Canonical or Red Hat, arguably more than just sticking with Microsoft.

Honestly, the major reason why I don't use Windows on my home server is that I'm too cheap to buy the version of Windows Server required to run a reverse-proxy. Also for webserver friendly VPS's Linux seems to be the go-to, including for Microsoft's own Azure services. I personally think that has to do with both the licensing cost as well as the fact that command-line versions of Linux take a lot less overhead as far as system resources.

When you have thousands of users requesting VPS's from one datacenter, less is more as far as resource usage.

## Lojack

In an enterprise environment, having some sort of lojack on endpoint devices, particularly laptops, is very important. And this is where I make the case for Microsoft's Intune/Entra ID services.

Intune allows technicians and administrators at said enterprise to wipe data off of a missing/stolen device, as well as disable it. And since Intune is integrated with the OOBE online account setup, it can be very difficult for a theif or person who buys hot laptops, to reinstall Windows on one of our Intuned/Autopiloted devices without it latching on and prompting them to enroll it into the company management.

And what I said in my previous post, about Microsoft having the ability to lock people out of devices, it's actually desired in the enterprise. And it's difficult, if not impossible, to facilitate such a feature to enterprises without having access to it yourself, as an Operating System provider.

I've had a situation where one of my users' laptops got stolen and was nice being able to wipe it and disable it right from Entra.

## Dissonance of policies

My last post was in the context of being a home user, mostly. With that in mind, as far as I've seen, Microsoft hasn't been as pushy in some of their changes for Enterprise versions of Windows.

So far it looks like enterprise clients are **not** having start menu suggestions pushed out to them. And I haven't really seen a CoPilot button on any of the enterprise computers I deal with, other than the one on Edge that can be easily disabled and doesn't seem to come back.

I also don't get a nag when opening Firefox to try Edge like I did on my personal computers.

If Microsoft adopted such "hands off" policy for user decisions on home computers, or a way to activate "professional" or "power user" mode so some of these nags, extra buttons, and such go away, I'd consider switching my personal computers back to Windows.

I just like the autonomy to setup my workflow the way I see fit.

## Conclusion

Triumphs and criticisms aside, I still think it's important to view technology; including products, ecosystems, and services, as a toolbox. At the end of the day we're free to get rid of tools, add other tools, or swap in and out as our needs and desires change.

Aside from occasional jokes, that is why I don't like fanboyism and try not to be a "fanboy" myself. As tempting as it is to grow a neckbeard and going full Linux evangelist.