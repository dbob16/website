+++
title = 'Oppose Age Verification'
date = '2025-10-29T10:58:55-04:00'
draft = false
[params]
comments = true
+++

Sometimes it seems as though with every new day there is a new government overreach. In this case it comes at the hands of some new Digital ID legislation which is passing in mostly-red states.

The way that it's currently being drafted, signed, and enforced is the most problematic part of it.

<!--more-->

## The issues

The issues with currently drafted age-verification laws, in which companies would be required to force their users to upload their ID and possibly save them for future age-verifications:

- **Unauthorized Access**: Just like with many other things, breaches have become the norm. And they likely will for databases holding age verification ID scans. Shoot, they already have, in the [Tea app "leak" (was more of a leak than a breach, as the data was openly available due to grave security mistakes)](https://www.npr.org/2025/08/02/nx-s1-5483886/tea-app-breach-hacked-whisper-networks), among others. This opens the door for the following:
    - **Blackmail**: Individuals involved in politics, corporate espionage, or other social wills not defined; could hire hackers to intentionally seek adversaries' ID's in databases of websites they don't agree with. And as Texas expands its age-verification requirement to App Stores, it isn't limited to just adult content anymore.
    - **Fake Profiles**: These databases will open up a world where anyone would be able to access anyone else's ID's to open up accounts in their name. Imagine someone creating a duplicate Facebook account in your name while they have access to a picture of your ID. It would not matter if you and your friends reported them. They'd be able to pass Facebook's verification check.
    - **Stalking and SA**: These requirements would give would-be and acting stalkers access to the address of anyone they desire. Possibly inspiring them to go further and get more heinous in their crimes. All they'd have to do to get started is to start buying caches of leaked ID verification scans.
- **Reliability**: It will come at the cost of reliability. As companies are looking to streamline processes with AI this will be one of the things that they'll use it for the most. Once most services are required to age-verify, then there will be times when AI won't recognize your ID because your state decided to change their ID format right before you had it renewed (seen it happen with ID verification on healthcare portals before).
- **Won't achieve its intended goal**: Despite the obvious ways around it, kids will still be able to get around age verification by "borrowing" their parents or a family member's ID. Or by finding one which is available online as well. Meaning that the entire legislation will fall flat on its face.
- **Political or social ammunition**: Even without being unauthorized, ID's of certain individuals could be associated with shameful or illegal content even by the legal subpoena or complaint process. All someone would have to do is accuse a content provider of not adhering to the policy and they'd likely be able to subpoena for certain individuals' ID's
- **More monopolization of content**: Many small content providers will be forced to go under or assimilate into the new age of technofeudalism, because the larger organizations are more likely to have the resources to implement such technology.

## The job of age verification

In my opinion, it shouldn't be up to the government much to keep kids out of places where they aren't supposed to be. It should be up to the parents and guardians of each child to enact parental controls on their childrens' devices.

Maybe some legislation should be in order to require client devices to support certain parental controls out of the box at least. That way it'd make sure that the tools are available to parents.

And maybe have common block lists available to parents as well, as some may not be connected to the internet often enough to know of all of the dangers present on the internet.

## Clear violations

There are also situations that there are clear violations of current laws which aren't enforced, because the government needs a reason to pass more.

Such as [Roblox banning, and sending a Cease and Desist to a user who was helping police catch predators on their platform](https://www.nbcchicago.com/news/local/roblox-faces-scrutiny-after-banning-youtuber-schlep-amid-ongoing-controversy/3813124/).

But why utilize laws currently on the books when you can use a situation at hand to gain more power?

## Magic word, Delegate

In my opinion we should stop letting 60+ year old politicians legislate on matters they know nothing about. For most of them that includes technology and the internet.

Just like building codes, I believe that there should be a panel of vetted tech experts whose job it is to contribute to a list of recommendations to mitigate certain risks. And have politicians select from said list when enacting codes on the matter.

## My proposed solutions

I figured that instead of being a sour sport and just criticizing the currently drafted solution at hand, that I should come up with my own as a professional in technology.

So I'll jot them down here in the order in which I think they should be implemented with a year or two in between to assess whether or not that step was effective. If it isn't effective, move on to the next step:

1. Work with device manufacturers and mainstream OS vendors (such as Apple, Microsoft, and Google) to see about hardening and improving current parental control technology.
    - Get CISA involved in the process of setting up and maintaining a list or few of content providers and content which parents should block by default.
    - Set up a bounty for Open Source contributors to develop and maintain parental control options for non-mainstream OS's like Linux (some families do prefer to run Linux). Or if any already exist, contribute some funds to help them maintain them.
2. Collaborate with OS vendors to allow a read-only flag be set on the user accounts of the OS which would block the device from accessing adult sites.
3. (If age verification is a must): Allow a standard to be set to allow companies (or non-profit organizations) to be started just for the purpose of age verification.
    - Said organizations could act as certificate signers. They would then receive scan copies of ID's and possibly picture verification, to sign a certificate, which can be uploaded or checked with a sort of keypair authorization for each age verification process
    - Once verified, users would be able to request more signed certificates for different aliases. Which would preserve anonymity and security to a reasonable extent