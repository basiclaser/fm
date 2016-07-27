## Let’s build a javascript web application framework
 ##### This is a totally free and open source tutorial for javascript programmers that have already completed a course like (codecademy)[https://www.codecademy.com/learn/javascript]. If you find mistakes please let me know!
---

This tutorial comes in a few self-contained parts, each covering important ideas. At the end of each part you will have a useful framework for building projects.

Chapters:
1. A simple framework - we implement our first framework, and discuss how to improve it.
* A better model/store component for storing our app state
* Making a small templating component for rendering our application.
* We will finally build an app with our framework!
* Routing / History - we will make our framework use the back/forward browser buttons to control history

## Why should I follow this tutorial?
Many starting web developers are duped into thinking that learning frameworks is learning how to program. There is often no distinction made between the two. However this is untrue.

Upon beginning the web development journey, people are rarely presented with a structured computer science course. Its up to the beginner to piece things together, which is hard. I certainly struggled!

Typically people will go from learning basic javascript types and tricks on codecademy, and then get caught in the hype of huge frameworks like angular and redux that abstract everything else away. 

This can impede longterm learning and job prospects as a developer. 
Even if every job posting seems to ask for some handful of the latest shiny toys like redux and react, It’s up to us developers to own our profession and not let HR people that might not know better dictate the way we think of our jobs.

A lot of this trouble also comes from people marketing their frameworks or sponsored training courses as magic bullets ( launch your first app in one hour with X framework ! No brain required ! ) . 

Frameworks cannot solve every problem and are not always appropriate. They are like real-world things. Bicycles are great, but if somebody asked you to build a hospital, you wouldn’t build it out of bicycles right? Frameworks are like this too, they do different things and solve different problems.

Learning the intricacies of any one framework or tool is certainly valuable, but it’s far more valuable to expose yourself to programming in some sort of structured way first.

Most applications can be built with their own solutions in a more efficient way, when you know the fundamentals of design and a bit more about how your programming language works.

---
## The goal of this chapter


In the first chapter we will:
1. Talk about design patterns and inheritance, the two major lessons generally missing between ‘programming day 1’ and ‘junior javascript developer for hire’. 

2. We’ll quickly look at the most common problems popular javascript web frameworks solve.

3. Then we will pick a small project and analyse the requirements, and make our first simple attempt at providing a small framework for that project.

4. Make our first attempt at making a framework.

5. At the end of each part, there is a small reading list to expose you to some relevant javascript concepts, which I strongly recommend checking out!

---

Just for some perspective, here’s a matrix of common problems that frameworks try to solve: 

---

## Let’s go
Here's our goal for an end product - I want to build a simple web application to help me organise my work. We will evaluate the needs of the application and then decide what kind of framework features would be required to build this app.
I’m going to base the app on something called the Eisenhower principal.
The Eisenhower principal uses 4 boxes with lists inside, and each box has a different importance. It looks like this

[matrix]: https://upload.wikimedia.org/wikipedia/commons/3/32/MerrillCoveyMatrix.png "Eisenhower decision matrix"

To use it, we place our tasks in one of the four sections, which are
This little app will require some different features.

maintaining a list of to do items ( let’s call them tasks ).
keeping the right order and category for the tasks
keeping different parts of the app synchronised
efficiently updating the list when things change.



---
## ways you can improve this framework

Before looking at the following list, you should think about ways that you could improve our framework… now try implementing some changes or improvements, based on your needs.

* A way to get just a single value for a single field without using the callback method
* A neater API interface, for clearer usage (fm.listen, fm.emit, fm.set)
* A separate store with better control over access so we don't accidentally delete things. ( We'll cover this in the next chapter)

---

## Further Reading 

* what’s bad about our global object for storing stuff? http://stackoverflow.com/questions/137975/what-is-so-bad-about-singletons

* “A boat might be really good at crossing water, but it can’t plough a field.” https://www.sitepoint.com/mvc-problem-solution/
