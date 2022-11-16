# Synchronous and Asynchronous Code

First of all we need to know that there are synchronous and asynchronous code.

Most of the code is Synchronous code and that mean the code is executed line by line in the exact order that we defined in our our code.
So each line of code wait for previous line to finish

```js
const p = document.querySelector('.p');
p.textContent = 'My Name is Omar!';
alert('Text set!');
p.style.color = 'red'; // will start after alert finish
```

But imagine that execution would have to wait

for example, for a five second timer to finish. That would just be terrible, right?
Because meanwhile, nothing on the page would work during these five seconds.

And so that's where asynchronous code comes into play.

```js
const p = document.querySelector('.p');
setTimeout(function () {
  p.textContent = 'My Name is Omar!';
}, 5000);
p.style.color = 'red';
```

Now, anyway, the first line of code is still synchronous here, and we also move to the second line in a synchronous way.
But here we encountered the set timeout function, which will basically start a timer in an asynchronous way.
So this means that the timer will essentially run in the background without preventing the main code from executing.
We also register a callback function, which will not be executed now, but only after the timer has finished running.
Now this callback function that I just mentioned is asynchronous JavaScript.
And it is asynchronous because it's only going to be executed after a task that is running in the background finishes execution.
And in this case, that is the timer.
So this callback that we just talked about is registered, and then we immediately move on to the next line.
So the main code is not being blocked and execution does not wait for the asynchronous timer to finish its work.
And that's the big difference between synchronous and asynchronous code. So previously we had to wait for the user to click on the alert window to continue execution. And again, that's because alert is blocking synchronous code, but now with this timer, the callback is actually asynchronous. And so it's only going to be executed after the timer has finished. And so therefore we say, that it's non-blocking code because in the meantime, the rest of the code can keep running normally.

## So

- Asynchronous code it is executed **after a task that runs in the "background" finishes**
- Asynchronous code is **non-blocking**.
- Execution doesn't wait for an asynchronous task to finish it's work

So in summary, asynchronous programming is all about coordinating the behavior of our program over a certain period of time. And this is essential to understand.
So asynchronous literally means not occurring at the same time.
And so that's what asynchronous programming is all about.

Callback functions alone do not make code asynchronous, that's essential to keep in mind. Only some of them like setTimeout

```js
[1, 2, 3].map(v => v * 2);
//the call back inside the map dos NOT automatically make code asynchronous
```

---

There's a special syntax to work with promises in a more comfortable fashion, called "async/await". It's surprisingly easy to understand and use.

## Async functions

Let's start with the `async` keyword. It can be placed before a function, like this:

```js
async function functionName() {
  return 1;
}
```

The word "async" before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

For instance, this function returns a resolved promise with the result of `1`; let's test it:

```js run
async function functionName() {
  return 1;
}

functionName().then(alert); // 1
```

...We could explicitly return a promise, which would be the same:

```js run
async function functionName() {
  return Promise.resolve(1);
}

functionName().then(alert); // 1
```

So, `async` ensures that the function returns a promise, and wraps non-promises in it. Simple enough, right? But not only that. There's another keyword, `await`, that works only inside `async` functions, and it's pretty cool.
