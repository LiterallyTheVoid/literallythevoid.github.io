## Daily reading with Bash

I have a few sites that I like to visit every day to see if anything interesting was posted. I used a bookmarks folder where I could open all tabs at once, but managing the bookmarks was a bit of a pain, so I created a small Bash script instead. It's pretty basic. All it does is open all the sites that could have something interesting.

The script below lives in `~/bin/`.

```bash
#!/usr/bin/env bash

open https://news.ycombinator.com/news;
open https://animationobsessive.substack.com/;
open https://lithub.com/category/lit-hub-daily/;
# ... this is an abbreviated list
# ... open whatever else you want

exit 0;
```

Why does my script start with a comma? [I read this article](https://rhodesmill.org/brandon/2009/commands-with-comma/) and it didn't seem like a terrible idea. I get tab completion, and I can see all my other functions.

After opening, I can store relevant articles with [Readwise Reader](https://readwise.io/read) for later.

When I first got into programming, I didn't need to know all that much about bash or the command line. I was able to do everything with basic, rote commands or a GUI. But sometime maturing as a programmer means accepting that the old heads were right--you should just be using bash.
