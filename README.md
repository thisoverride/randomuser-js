# RandomUser JS
RandomUser-JS is a JavaScript module that allows you to generate random users from the RandomUser.me API.

Installation
You can install RandomUser-JS using NPM by running the following command:


```bash
yarn install randomuser-js
```
or
```bash
npm install randomuser-js
```

Usage
To use RandomUser-JS in your project, simply import the module and call the getRandomUser function:

```js
import randomuserme from 'randomuser-js';

// Generate a random user
const user = await randomuserme.randomUser();

console.log(user);

```

````json
{
  gender: 'female',
  name: { title: 'Miss', first: 'Faith', last: 'Osullivan' },
  location: {
    street: { number: 6100, name: 'Albert Road' },
    city: 'Bandon',
    state: 'Limerick',
    country: 'Ireland',
    postcode: 70963,
    coordinates: { latitude: '-2.1054', longitude: '60.1352' },
    timezone: { offset: '-10:00', description: 'Hawaii' }
  },
  email: 'faith.osullivan@example.com',
  login: {
    uuid: '6a419018-a6eb-465c-b6b7-e1437182aa2b',
    username: 'heavywolf187',
    password: 'poppop',
    salt: 'z4SxxWUz',
    md5: 'f1502a72ed3488d31652826a7646838b',
    sha1: 'ce9bc4bec0e5a596aa49be041e8b2f46e45c6784',
    sha256: '16fe95d7a383c40c39f0d98ffe00244a65790e2935ca3efb2face8f8e5443074'
  },
  dob: { date: '1962-05-19T22:18:27.526Z', age: 61 },
  registered: { date: '2006-03-22T13:50:14.850Z', age: 17 },
  phone: '011-516-6175',
  cell: '081-186-9802',
  id: { name: 'PPS', value: '2526235T' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/43.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/43.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/43.jpg'
  },
  nat: 'IE'
}
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
