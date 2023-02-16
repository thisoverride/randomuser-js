# RandomUser-JS
RandomUser-JS is a JavaScript module that allows you to generate random users from the RandomUser.me API.

Installation
You can install RandomUser-JS using NPM by running the following command:


```bash
yarn install randomuser-js
```

Usage
To use RandomUser-JS in your project, simply import the module and call the getRandomUser function:

```js
import randomUser from 'randomuser-js';

// Generate a random user
const user = randomUser.getRandomUser();

console.log(user);

```
getRandomUser returns a promise that resolves to a random user object, with the following properties:

gender: the user's gender (male or female)
name: an object containing the user's full name (title, first, and last)
email: the user's email address
dob: the user's date of birth
phone: the user's phone number
cell: the user's cell phone number
location: an object containing the user's address (street, city, state, postcode, and country)
picture: an object containing the URL of the user's profile picture (large, medium, and thumbnail)
