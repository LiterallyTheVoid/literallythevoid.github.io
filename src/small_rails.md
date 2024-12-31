## Rails for everything

_Published: _

With a little extra spare time on my hands--and the release of Rails 8--I decided to spin up a new Rails app. After a few days of playing, it's clear that Rails is better than ever. It's the first tool you should reach for when building an application. And if it's your first time using Rails, now is the best time to start.

### Getting started

The latest [Getting Started with Rails](https://guides.rubyonrails.org/getting_started.html#Rails-philosophy) guide is really excellent. There's a bit of hand waving around installing Ruby (more on that later). But if you follow it start to end, you'll have a Rails app **in production**. The magic of seeing something live on the internet for the first time is something I'll never forget. And this isn't just `hello world`. Your app will have authentication, caching, rich text, continuous integration, and a database. That's a real application.

If you're brand new to Rails, this guide will get you up to speed.

### SQLite is all you need (for now)

SQlite is a great tool, but its focus on backwards compatibility means that it isn't exactly ideal for a production database out of the box. You [used to have to add some gems](https://fractaledmind.github.io/2024/04/15/sqlite-on-Rails-the-how-and-why-of-optimal-performance/) to actually get it ready to perform. However [Rails 8](https://fractaledmind.github.io/2024/10/16/sqlite-supercharges-Rails/) deals with that for you, and SQLite is ready for production.

I'm a Rails engineer, but I know my weaknesses. The idea of standing up a new production database is a bit frightening, as it probably should be. This is something I am more than happy to let Rails do for me.

### Easy CI

After I pushed my initial Rails commit, I got an unexpected email: `Run failed: CI - main`. My first thought was actually a malicious actor, but I was wrong. [Rails 8 comes with basic CI config](https://guides.rubyonrails.org/getting_started.html#continuous-integration-with-github-actions) and [Github comes with 2000 free minutes per month](https://docs.github.com/en/billing/managing-billing-for-your-products/managing-billing-for-github-actions/about-billing-for-github-actions) of actions usage.

Aside from it being really cool to have CI with no effort, 2000 minutes of run time is a lot for solo developer!

### Authentication generator

[Devise](https://github.com/heartcombo/devise) is the canonical authentication gem. But it hides a lot of complexity and it's not exactly easy to configure correct, especially if you are a beginner.

Rails 8 adds a new authentication generator. It add a simple sign in flow for existing users. All you need to do is add a user via the Rails console and boom. You can log in.

The generated code is pretty minimal and easy to read about, and it is begging for a lot additional features.

### AI can be really helpful

Because Rails is driven by a [convention over configuration](https://rubyonrails.org/doctrine#convention-over-configuration) doctrine, I think all the Rails questions on the internet are extremely legible to LLMs. Beginner questions have already been asked and answered (probably more than once).

That means if you run into an issue building a Rails app, LLMs are a huge boon to a solo developer.

### Easy and fast deploys with Kamal

Like databases, I am more than happy to leave deploys to my very smart friends in the ops team. To deploy a new Rails app, I just needed to update a few items in `deploy.yml` follow a few directions, and I had an app live! With SSL!

Honestly it took less time to get a web app up than it took me to get SSL on a Github page.

CI + easy deploys might be the best part about Rails 8. Even from the getting started guide, it encourages best practices.

### Where I still want more

I know this isn't Rails' fault, but installing Ruby (especially on windows) is a pain. It should be easy.

The getting started guide is great, the rest of the Rails documentation needs some love. They seem to be aware and working on it.

I want more from authentication. DHH isn't interested in building authentication/authorization for every use case, and I get that. I would love to see a simple admin/user authorization scheme along with a registration controller. Ideally I would be able to make a Hacker News clone with no effort.

All that said, you should just use Rails for everything.
