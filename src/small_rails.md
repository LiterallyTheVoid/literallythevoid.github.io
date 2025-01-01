## Rails for everything

_Published: 2025-01-01_

After spending part of my holiday building and deploying a new Rails 8 application, It's clearer than ever that Rails is awesome, and it's especially great for small projects with a single developer.

### Guide is good

The latest [Getting Started with Rails](https://guides.rubyonrails.org/getting_started.html#Rails-philosophy) guide is really excellent. There's a bit of hand waving around installing Ruby (which is still more difficult than it needs to be). But if you follow it start to finish, you'll have a Rails app **in production**. And it isn't just `hello world`. Your app will have authentication, caching, rich text, continuous integration, and a database. That's a real application.

If you're brand new to Rails, the guide is the best place to start.

### SQLite is all you need

SQlite is a great tool, but its focus on backwards compatibility means that it wasn't ideal for a production database out of the box. You [had to add some gems](https://fractaledmind.github.io/2024/04/15/sqlite-on-Rails-the-how-and-why-of-optimal-performance/) to get it ready to perform. However [Rails 8](https://fractaledmind.github.io/2024/10/16/sqlite-supercharges-Rails/) deals with that for you, and SQLite is ready for production.

Now that you SQLite is a more robust choice, you don't have to worry about spinning up a PostgreSQL server. On top of that, with tools like [solid cache](https://dev.37signals.com/solid-cache/) you don't need to stand up redis either.

Everything is running under Rails and within SQLite. Superb.

### Easy CI

After I pushed my initial Rails commit, I got an unexpected email: `Run failed: CI - main`. My first thought was actually a malicious actor, but I was wrong. [Rails 8 comes with basic CI config](https://guides.rubyonrails.org/getting_started.html#continuous-integration-with-github-actions) and [Github comes with 2000 free minutes per month](https://docs.github.com/en/billing/managing-billing-for-your-products/managing-billing-for-github-actions/about-billing-for-github-actions) of actions usage.

Aside from it being really cool to have CI with no effort, 2000 minutes of run time is a lot for solo developer!

### Authentication generator

[Devise](https://github.com/heartcombo/devise) is the canonical authentication gem. But it hides a lot of complexity and it's not exactly easy to configure correctly, especially for a beginner.

Rails 8 adds a new authentication generator. It add a simple sign in flow for existing users. All you need to do is add a user via the Rails console and boom. You can log in.

The generated code is pretty minimal and easy to read about.

### Easy and fast deploys with Kamal

I am more than happy to leave deploys to my very smart friends in the ops team. To deploy a new Rails 8 app, I just needed to update a few items in `deploy.yml`, follow a few directions, and I had an app live! With SSL!

Honestly it took less time to get a web app up than it took me to get SSL on a Github page.

CI + easy deploys might be the best part about Rails 8. Even just using the getting started guide, it encourages best practices.

### Conclusion

[Rails is not dead](https://israilsdead.com/); It's better than ever. Try using it to make something new this year.
