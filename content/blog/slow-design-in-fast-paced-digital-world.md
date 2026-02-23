---
title: Slow down think and read more
description: Slow down think and read more!
date: 2025-03-15
image: https://walledculture.org/wp-content/uploads/2023/05/blindjustice.jpg
minRead: 5
author:
  name: Steven Hobbs
  avatar:
    src: https://lh3.googleusercontent.com/-QRAiPVdySR4/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfknRT9DEmbfmkVyTNf8PnhgW0LPdAA/photo.jpg?sz=80
    alt: Steven Hobbs
---

On Friday, the European Union effectively drew a line in the digital sand. By classifying TikTok’s infinite scroll and auto-play features as "addictive design," regulators are asking a question that sits right at the intersection of my work in computer networks and bioethics: At what point does "smart engineering" become "illegal manipulation"?

As the founder of MYCALLA INC. here in Puerto Rico, my mission is to use technology to connect communities. But as a bioengineer and former STEM tutor, I look at the "TikTok debate" and see a collision between human biology and machine efficiency.

Here is a breakdown of the controversy, the technology, and what it means for the future of digital interaction.

1. The Engineering of "Instant" (The Technical View)

To understand why the EU is worried, you have to respect the engineering. In recent discussions among tech professionals, the "secret sauce" of TikTok isn't just what it shows you, but how fast it learns.

Observers have noted that TikTok’s recommendation engine likely operates on a sub-second streaming pipeline (utilizing technologies like Flink or Kafka). In simple terms, when you linger on a video, that data doesn't just go into a database to be analyzed overnight. It is processed in real-time, updating the model immediately.

When I tutored students in Computer Networks at UCSC, we talked about latency—the delay between an action and a response. TikTok has reduced the "latency of desire" to near zero. It mimics a biological feedback loop. It feels "intelligent" because it reacts as fast as a nervous system.

The EU argues this speed is the problem. They claim the system is designed to bypass executive function, keeping the brain in a reactive loop rather than a reflective one.

2. The "Digital Cigarette" Debate (The Bioethical View)

The core of the EU’s argument under the Digital Services Act (DSA) is that these design patterns—infinite scroll and auto-play—create "behavioral addiction."

This has sparked a massive debate comparing social media to Big Tobacco or the gambling industry. Is the "infinite scroll" the modern equivalent of removing the clocks from a casino floor?

Critics of the ban argue that "infinite scroll" is just good User Experience (UX). It removes friction. Banning it, they say, creates a slippery slope where governments dictate how software should function.

Supporters of the ban argue that these are "dark patterns"—design choices specifically engineered to exploit psychological vulnerabilities, particularly in minors.

From a bioethics perspective, this is distinct from substance addiction, but the "dopamine loop" mechanism is strikingly similar. The controversy lies in whether we treat the product (the app) or the user (personal responsibility).

3. Regulation vs. Agency

As someone involved in Civil Rights and poll working, I am wary of over-regulation, but I also believe in protecting the vulnerable. The debate is split:

The "Personal Responsibility" Camp: Adults should be able to manage their own screen time. If we ban "addictive" features, do we also ban sugary foods or binge-worthy TV shows?

The "Structural" Camp: You cannot exercise "personal responsibility" against a supercomputer trained to outsmart you. The economic incentive for these platforms is Time on Device. As long as ad revenue is tied to dwell time, companies will optimize for addiction unless the law intervenes.

4. What This Means for Us (The MYCALLA Perspective)

In Puerto Rico, we often struggle with the "Digital Divide." At MYCALLA INC., we fight to get people online because connectivity drives economic and social progress.

However, there is a difference between connectivity and compulsion.

Connectivity is active: It’s sending a message, learning a skill, or organizing a community event.

Compulsion is passive: It’s scrolling for two hours and forgetting what you saw.

The EU ruling is a wake-up call. We don't need to destroy these platforms—the underlying technology is brilliant. But we may need to reclaim our agency.

5. The Path Forward: Re-Engineering Agency

The debate highlights several technical and design remedies that can restore user agency without banning apps entirely. Here is how they work in practice:

A. Friction by Design (The "Speed Bump" Approach)

The most direct implementation is reintroducing the "latency" that TikTok worked so hard to remove.

Stopping Cues: Instead of an infinite stream, the feed could require a manual "Load More" click after every 20 videos. This creates a psychological "stop sign" that allows the user's executive function to kick in.

Disable Auto-Play Defaults: Video players should default to "pause" or require a tap to proceed. This shifts the interaction from passive consumption (watching TV) to active selection (browsing a library).

B. Third-Party "Unhooking" Tools (The Network Approach)

If platforms won't regulate themselves, users can intervene at the device or network level.

Client-Side Injection: Browser extensions like "Unhook" or "News Feed Eradicator" use simple CSS/JavaScript injection to hide the recommendation feed entirely, leaving only the search bar. This turns the tool into a utility (pull) rather than a distraction (push).

DNS Filtering: For mobile devices where extensions are harder to install, configuring a custom DNS (like NextDNS) can block the specific tracking domains that power the recommendation engine, effectively lobotomizing the "addictive" part of the algorithm while keeping the content accessible.

C. Algorithmic Transparency (The "White Box" Approach)

Drawing from my background in analyzing neural networks, the biggest issue is the "black box" nature of the feed.

"Why Am I Seeing This?": Platforms should be required to implement a feature that explains the specific weights used for a recommendation (e.g., "You are seeing this because you watched video X for 10 seconds").

Adjustable Weights: Instead of a passive feed, give users a "mixing board." Let them adjust sliders for Educational, Local News, or Entertainment. This transforms the user from a passive subject of the algorithm into its active manager.

Technology should be a tool we wield, not a current that sweeps us away. Whether through regulation or better design, the goal is the same: to ensure we remain the pilots of our own attention.
