## chapter 1


In the first chapter we will:

1. Talk about design patterns and inheritance, the two major lessons generally missing between ‘programming day 1’ and ‘junior javascript developer for hire’. 

2. We’ll quickly look at the most common problems popular javascript web frameworks solve.

3. Then we will pick a small project and analyse the requirements, and make our first simple attempt at providing a small framework for that project.

4. Make our first attempt at making a quick framework under 60 lines.
---

Just for some perspective, here’s a matrix of common problems that frameworks try to solve: 

---

## Let’s go
Here's our goal for an end product - I want to build a simple web application to help me organise my work. We will evaluate the needs of the application and then decide what kind of framework features would be required to build this app.
I’m going to base the app on something called the Eisenhower principal.
The Eisenhower principal uses 4 boxes with lists inside, and each box has a different importance. It looks like this >

[matrix]: https://upload.wikimedia.org/wikipedia/commons/3/32/MerrillCoveyMatrix.png "Eisenhower decision matrix"

From a technical viewpoint, this little app will require some different features.

* creating lists and tasks,
* keeping the lists up to date  ( let’s call them tasks ).
* keeping the right order and category for the tasks
* keeping different parts of the app synchronised
* efficiently updating the list when things change.

## code code code

---
## problems with this so far

Before looking at the following list, you should think about ways that you could improve our framework… now try implementing some changes or improvements, based on your needs.

* A way to get just a single value for a single field without using the callback method
* A neater API interface, for clearer usage (fm.listen, fm.emit, fm.set)
* A separate store with better control over access so we don't accidentally delete things. ( We'll cover this in the next chapter)

We currently allow any part of our codebase to manipulate any part of the store. Global unfettered access is a big no no, as it opens your apps to a world of avoidable bugs.

---

## Further Reading 

* what’s bad about our global object for storing stuff? http://stackoverflow.com/questions/137975/what-is-so-bad-about-singletons

* “A boat might be really good at crossing water, but it can’t plough a field.” https://www.sitepoint.com/mvc-problem-solution/
