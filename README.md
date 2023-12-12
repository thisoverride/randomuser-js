# RandomUser JS

RandomUser-JS is a JavaScript module designed to facilitate the generation of random user data from the RandomUser.me API.

## Overview
RandomUser-JS allows you to easily retrieve random user data from the RandomUser.me API. Simply call the randomUser() function to obtain a random user object containing various attributes like name, location, contact information, and more.

## Installation

You can install RandomUser-JS using either yarn or npm :

### Yarn
```bash
yarn add randomuser-js
```
### Npm
```bash
npm install randomuser-js
```
## Usage

```js
import randomuserme from 'randomuser-js';

// Generate a random user
const user = await randomuserme.randomUser();

console.log(user);
```

### Output

```json
{
  "gender": "female",
  "name": {
    "title": "Miss",
    "first": "Faith",
    "last": "Osullivan"
  },
  "location": {
    "street": {
      "number": 6100,
      "name": "Albert Road"
    },
    "city": "Bandon",
    "state": "Limerick",
    "country": "Ireland",
    "postcode": 70963,
    "coordinates": {
      "latitude": "-2.1054",
      "longitude": "60.1352"
    },
    "timezone": {
      "offset": "-10:00",
      "description": "Hawaii"
    }
  },
  "email": "faith.osullivan@example.com",
  "login": {
    "uuid": "6a419018-a6eb-465c-b6b7-e1437182aa2b",
    "username": "heavywolf187",
    "password": "poppop",
    "salt": "z4SxxWUz",
    "md5": "f1502a72ed3488d31652826a7646838b",
    "sha1": "ce9bc4bec0e5a596aa49be041e8b2f46e45c6784",
    "sha256": "16fe95d7a383c40c39f0d98ffe00244a65790e2935ca3efb2face8f8e5443074"
  },
  "dob": {
    "date": "1962-05-19T22:18:27.526Z",
    "age": 61
  },
  "registered": {
    "date": "2006-03-22T13:50:14.850Z",
    "age": 17
  },
  "phone": "011-516-6175",
  "cell": "081-186-9802",
  "id": {
    "name": "PPS",
    "value": "2526235T"
  },
  "picture": {
    "large": "https://randomuser.me/api/portraits/women/43.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/43.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
  },
  "nat": "IE"
}
```

## Methods
Returns a single random user identity.
```js
RandomUserMe.randomUser()
```
Returns a single random user identity filtered by country nationality.
```js
RandomUserMe.randomUserByNationality()
```
Filters random user identities by specified attributes.
```js
RandomUserMe.randomAttributeFilter()
```
Returns multiple random user identities (maximum 5000).
```js
RandomUserMe.manyRandomUser()
```