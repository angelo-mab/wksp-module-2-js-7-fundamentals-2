# 2.7.2 - JS - Object Methods

---

## Situation

You have an object that you _need_ to iterate over.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

const age = Object.values(friendsAge);
```

---

## [Object.keys()](https://www.geeksforgeeks.org/object-keys-javascript/)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

```

Now I am interested in the average age of my friends.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
```

---

## [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

const friendsName = Object.keys(friendsAge);

friendsName.forEach(friend => {
 console.log(friendsAge[friend]);
})

// Object.keys(friendsAge).forEach(friend => {
//   console.log(friendsAge[friend]);
})
```

---

```js
//sort objects by age

const friendsAge = [ { name: 'Kevin', age: 32}, {name: 'Rick', age: 60}, {name: 'Morty',age: 14}, {name: 'Jerry',age: 35}]


//used the sort method and sorts them by the names key
friends.sort(a, b => a.name - b.name)
```