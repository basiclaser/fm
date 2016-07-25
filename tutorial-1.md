Let’s build a javascript web application framework To younger developers, please learn to program ( with this tutorial ) before using big framework and ctools. 
I speak from experience, this will make your life more enjoyable. 

To more experienced developers, if you can think of any ways of improving this tutorial, or find mistakes please let me know!

Many starting web developers are being duped into thinking that knowing frameworks is knowing how to program. Upon beginning the web development journey, people are rarely presented with a structured computer science course. Its up to the beginner to glean an understanding of the languages, the business, the tools and so on from scattered out of date blog posts and sponsored articles. 

Typically people will go from learning basic javascript types and tricks on codecademy, and then get caught in the hype of huge frameworks like angular and redux that abstract everything else away. 

This can impede longterm learning and job prospects as a developer. 
Even if every job posting seems to ask for some handful of the latest shiny toys like redux and react, It’s up to us developers to own our profession and not let HR people that might not know better dictate the way we think of our jobs.  A lot of this trouble also comes from people marketing their frameworks or sponsored training courses as magic bullets ( launch your first app in one hour with X framework ! No brain required ! ) . 

Frameworks ( and design patterns ) cannot solve every problem and are not always appropriate. They are like real-world structures. Hospitals are great, but if your client asked you to build a bicycle, you wouldn’t want a hospital to be the starting point for your work right? Frameworks are like this too, they are diverse ideas that solve very different problems.

While learning the intricacies of any one framework or tool is certainly valuable, and I’m not knocking specialization which is pretty desirable, it’s far more valuable to expose yourself to programming in some sort of structured way, starting off with the simplest concept, and then gradually combining until you reach a complete solution for a project ( this is a good way to learn, not necessarily for designing a project though ) . Most applications can be built with their own solutions in a more efficient way when you know the fundamentals of design.

What are we going to achieve?  We will acknowledge design patterns and inheritance,  the two major lessons generally missing between ‘programming day 1’ and ‘junior fullstack meteor developer for hire’. 

Then after that, we’ll reason about the most common problems javascript web frameworks solve and build our sample framework solution. We will pick a small project and analyse the requirements.

Just for some perspective, here’s a matrix of common problems that frameworks try to solve: 



Let’s go:  I want to build a simple webapp to help me make decisions. I’m going to base it on the Eisenhower principal, which looks like this > 




This little app will require some different features.

maintaining a list of to do items ( let’s call them tasks ).
keeping the right order and category for the tasks
keeping different parts of the app synchronised
efficiently updating the list when things change.





Before looking at the following list, you should think  about ways that you could improve the framework… … … now try implementing some changes or improvements, based on your needs.

a way to get just a single value for a single field without using the callback method
imperative API interface, for clearer usage (fm.listen, fm.emit, fm.set)
separation of store and event emitter into separate components
allow for multiple instances / stores

If you’d like to extend your new little framework with more useful features, check out my following tutorials: 

part 2 - templating
part 3 - let’s build this thing!
part 4 - testing
part 5 - routing / history 

Further Reading - 

“A boat might be really good at crossing water, but it can’t plough a field.” https://www.sitepoint.com/mvc-problem-solution/
what’s bad about having a global space to store stuff? http://stackoverflow.com/questions/137975/what-is-so-bad-about-singletons
