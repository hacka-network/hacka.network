# How to start a new Hacka* Node

Starting a new Hacka* Node is a great way to bring together indie-makers, developers, and creators in your area. But we would like you to follow some guidelines.

Follow the steps below to establish your own Node as part of the global network of Hacka* events.

## 1. The Hacka* spirit

Our community is very much tech-first and all about building apps, products and startups. Coding your own product or app is at the heart of what we do. There is always space for the other (very important) pieces that go into building a successful product, such as marketing, sales, etc, but the core is in development/coding.

A typical rhythm/schedule each Thursday:

- Morning intros (9-10am): Start your day with introductions. Share who you are, what you're working on, and your goals for the day. Commit to demoing your progress at the end of the day.
- Optional group lunch
- Afternoon demos (3-5pm): Showcase your creations! Receive valuable feedback on design, functionality, and more.
- Evening hangout: After demos wind down somewhere nearby (drinks, dinner, whatever!)

Feel free to adapt the schedule to best fit your Node's needs, but please keep the individual components intact. They are the essence of Hacka* and a proven concept :)

Commiting to building something an intros is a great motivator for shipping it fast for demos and helps with accountability.

## 2. Connect with the global network

If you like what you read, the next step is to reach out to the Hacka* network organizers to assist with setting up your Telegram group, Node website, and any other resources you might need. You can email us using the Contact button at [hacka.network](https://hacka.network).

We're here to help you and ensure you have the necessary support for a successful Node launch!

## 3. Choose a suitable location

Securing a good location is pretty important. A co-working space or office are amongst the best locations. You'll primarily be working throughout the day together and distractions don't help with that.

We advise to avoid highly public places to maintain a focused environment. The venue should support collaborative working and be able to faciliate the introductions, lunch,  demos, and breakout conversations if individual members want to discuss anything more deeply.

In particular for the demos, it's better to have a projector/screen or large TV and necessary cables and equipment for members to give demos. Meeting rooms are generally good for this. Make sure that it's also sufficiently big so everyone fits. We have first-hand experience with this challenge, which is why we mention it here ;)

You can maybe make a deal with your local coworking space to secure a weekly meeting room for free or for a discount on the day pass. Many of our nodes have done that.

## 4. Establish your Node's presence

Create a dedicated website for your Node, getting inspired by the sites of other nodes at hacka.network. Ideally the site should have a signup form and the weekly schedule. We usually don't give out the exact location until after signup.

Keep public/online promotion minimal to maintain the Node's culture and values (again, we have experience with this, it's the best approach generally). Carefully considering these will help to grow slow, stable and steadily. 
It's best to invite people 1-on-1 if you feel like they're a good fit. Public promotions should be rare and carefully considered to maintain our culture. 
If someone is a bad fit, carries out illegal activities, or harms other participants, you may exclude them from the meetup and communication channels. Try to do so by privately communicating that Hacka* is not a good fit for them.

During step 2 we'll also explain this, but we need you to establish a Telegram group to facilitate communication within your community. This is one of the most essential parts.

## 5. Set a consistent schedule

Plan your Node's weekly Thursday meetups with morning introductions, an informal lunch, afternoon demos, and optional evening activities. 
Consistency helps build a reliable community rhythm, so it's best to decide beforehand and stick to your own schedule/timing.

## 6. Host the first Meetup

First of all, have fun! In the mornings, start with introductions and encourage members to not just introduce themselves, but also share about their companies, projects and goals. 

Prepare the afternoon demo session to ensure everything is ready to go and facilitate it by asking who has a demo at first, setting a maximum time (we suggest 4 to 8 minutes, depending on the amount of demos), and ask who wants to go first. It'll sort itself out afterwards :)!

## 7. Commit to it long-term

Dedicate yourself to the ongoing management of your Node, by making sure both the venue and weekly meetups are consistently organized. 
As you grow, it should naturally begin to self-organize – this is part of the hacker spirit :)

By following these steps, you can successfully launch a Hacka* Node, creating a vibrant community of innovators and independent creators in your area. Hurray! Welcome to the network!

## 8. Add your node to the site

Once you've connected with the network (step 2) and your Node is up and running, add it to the list at [hacka.network](https://hacka.network) by editing [`nodes.json`](https://github.com/hacka-network/hacka.network/blob/main/nodes.json) and submitting a Pull Request.

Add an entry to the `nodes` list with all of these fields:

- `name`: your Node's name (e.g. "Hackalona")
- `emoji`: a flag emoji for your location (e.g. 🇪🇸)
- `established`: the year your Node started (e.g. 2026)
- `location`: the city (e.g. "Barcelona")
- `timezone`: your IANA timezone name (e.g. "Europe/Madrid")
- `signup_url`: your Node's website or signup page (must start with https://)

Once the Pull Request is merged, your Node will appear on hacka.network within a few minutes.

To get the Telegram side working (weekly attendance polls, and attendance and member info on the site), create a Telegram group for your Node, add [@the_hackabot](https://t.me/the_hackabot) to it, and make the bot an admin. It needs admin rights so it can pin the weekly poll. Then contact us so we can connect your group on our side.
