---
id: exclude
title: exclude
sidebar_label: exclude
---

Excludes field with defined `originName` from processing.
Note that a field have to be added in `DataCaster` instance before.

> This method is chainable.

Excluding fields can be useful with scenarios when you don't want to send to server some properties
of objects that you have got from it earlier.

## Signature

```javascript
exclude(fieldName)
```

## Example

Let's imagine that we received from server user with two special fields: `createdAt` and `updatedAt`.
So, these fields we can only read, not edit and change. They are some kind of service data.

Consider the case in which we need to change, let's say, user's name:

```javascript
import { DataCaster } from '@daminort/data-caster';

// user data from server
const serverUser = {
  id: 1,
  name: 'John Snow',
  createdAt: '2019-08-22T16:40:24',
  updatedAt: '2019-09-02T10:45:37',
};

// we can't fully omit service data, so we have to use some extra functions 
const dc = new DataCaster()
  .int('id')
  .string('name')
  .date('createdAt')
  .date('updatedAt')
  .exclude('createdAt')
  .exclude('updatedAt');
	
// ...
// somewhere in codebase 
const adapt = (rawData) => dc
  .ignoreExcluded(true)
  .adapt(rawData);

const clientUser = adapt(serverUser);
```

```javascript
// clientUser
{
  id: 1,
  name: 'John Snow',
  createdAt: Thu Aug 22 2019 16:40:24 GMT+0300,
  updatedAt: Mon Sep 02 2019 10:45:37 GMT+0300,
}
```

Now we are changing user data and send it to server in order to save it in the database,
but without service data:

```javascript
clientUser.name = 'King John Snow';
const preparedUser = dc.revert(clientUser);
```

```javascript
// preparedUser
{
  id: 1,
  name: 'King John Snow',
}
```
