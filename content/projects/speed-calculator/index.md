+++
lastmod = '2025-06-11T14:55:36-04:00'
title = 'Speed Calculator'
draft = false
+++

For the challenge of figuring out how fast cars were going by my house, I was leaning heavily on freely available speed calculators on the internet. There were a couple of issues I had with them:

- They are all server-side
    - For some things server-side programming is great. But for something simple that you want to work even if the website is offline, it's not that great.
    - Let's face it, client devices are a lot more powerful than they used to be. So there's no reason to just clog up your server's resources handling requests for stupid reasons when it should only have to handle one, sending the app bundle.
- Interfaces can be busy for mobile
    - For instance, many of them have a different dropdown option for each unit of speed, even if it goes along with another one. This makes mobile navigation difficult.
    - When dealing with input units they can be grouped together with corresponding units. An example = Feet and Inches together, KM and meters together. No need to have 50 different options on the dropdown.

<!--more-->

{{< webapplink speed-calculator >}}

The app should render in the iframe below:

{{< webapp speed-calculator >}}
