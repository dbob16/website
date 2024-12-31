---
title: "Crowdstrike Outage: Technician's Explanation"
date: '2024-07-28T12:19:49-04:00'
draft: false
---

One of the things that was big in the news was the CrowdStrike global outage which effected Windows computers which were running CrowdStrike's Falcon sensor. [News article here](https://www.techtarget.com/whatis/feature/Explaining-the-largest-IT-outage-in-history-and-whats-next).

Linux heads, you're not impervious to issues like this as [this article here](https://www.tomshardware.com/software/linux/crowdstrike-issues-go-beyond-windows-companys-security-software-has-reportedly-been-causing-kernel-panics-since-at-least-april) points out.

## Not a breach

One thing I want to make clear before I get too involved is that this problem is not a breach or other cybersecurity incident. It was simply a botched content update file at the end of the day.

## Malware that goes deep

Since 2006-07 to now, combatting malware (commonly called "viruses" even though a virus is one subset of malware) has been one of the major things I've done for the tech sector. Even though I'm more of a behind the scenes guy. My job is generally to remove it from people's computers, since I don't have all the programming know-how necessary to reverse compile and analyze it.

Between 2008 and 2012, malware made a major shift from just causing damage and disruptions to trying to monetize every aspect of an infection. At first it was mostly file downloads and confiscation but it shifted into ransom as well, hence the term ransomware is pretty common. Anyway, during this shift, malware also sophisticated its ways of infecting computers.

One method that's utilized by malware developers is rootkitting. That is the process of writing malware in a way that it plugs in as a kernel module to make it more difficult for us good guys to remove. Even though rootkitting has been a thing since 1999, it's definitely gotten more sophisticated since I started.

For those who aren't very well versed in tech terminology, the kernel is the part of an Operating System (think of this as a big program that runs your whole computer or device) that is closest to the hardware. There's two primary levels to an OS, kernel mode (closest to the hardware, does process scheduling and memory management, as well as several other things) and user mode (also called the "shell", and is the part that we as users interact with).

Some software we interact with on top of an Operating System is user-mode software. This includes things like Netflix and Snapchat. Software that interacts both on the kernel-mode and user-mode is more common for complex tasks like hosting content or interacting with specific peripherals. These kernel-mode applications have more room to cause more issues like BSOD's and kernel panics if something is coded wrong.

For instance, a rootkit is like these deeper kernel-mode applications but written with a malicious intent.

## Security goes deep as well

Because of this malware that goes deep to make sure the user stays "infected," security software companies have to write their software to go deep as well. So hooking into the Operating System as a kernel module or driver is pretty common among security software which is written to detect rootkits. CrowdStrike is no exception.

The specific file which caused the problem was a rootkit definition file which is loaded in as a module or driver, into the kernel at boot-time. My best guess is that some sort of limit or safety was overridden which was causing said BSOD (Blue Screen Of Death) issues.

To CrowdStrike's credit they got the workaround out pretty fast as well as stopping the further deployment of the offending definition file, which is getting in someway and deleting definition file 291.

It's still a recent example of how things can go wrong while loading in as a kernel module or driver.

## Lessons learned in the future

While I do hope that CrowdStrike learns from this experience and tests their updates a little more, some of it is on the effected companies too.

One of the things that complicated the recovery for some companies is the fact that some of the effected Windows installs were hosted on a hypervisor cluster, which introduced a lot of complexity to the disaster recovery equation.

Another thing I personally think should be considered at an organizational standpoint is multiplatform redundancy of core functions like DHCP and DNS at least, as well as authentication if at all possible (logging in to get recovery keys is problematic if you don't have a valid token and your authentication server is also down). That way if there is a widespread issue effecting one platform, the other one could keep things working enough to make the recovery easier.

Disaster Recovery plans should account for a complete outage due to BSOD's or kernel panic too. And backups should include an occasional full image or snapshot of the system working in optimal condition. That way, when the worse comes to worst, the image or snapshot can be restored. Data should be on its own partition for that reason so that it wouldn't be effected by a restoration of the OS.