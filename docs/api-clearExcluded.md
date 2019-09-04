---
id: clearExcluded
title: clearExcluded
sidebar_label: clearExcluded
---

Clears all excluded files in `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
clearExcluded()
```

## Example

```javascript
// user data from server
const serverUser = {
  id: 1,
  name: 'John Snow',
  createdAt: '2019-08-22T16:40:24',
  updatedAt: '2019-09-02T10:45:37',
};

const dc = new DataCaster()
  .int('id')
  .string('name')
  .date('createdAt')
  .date('updatedAt')
	
// ...
// somewhere in codebase
const adapt = (rawData) => dc
  .clearExcluded()
  .adapt(rawData);

const revert = (rawData) => dc
  .exclude('createdAt')
  .exclude('updatedAt')
  .revert(rawData);

const clientUser = adapt(serverUser);
const preparedUser = revert(clientUser);
```

```javascript
// clientUser
{
  id: 1,
  name: 'John Snow',
  createdAt: Thu Aug 22 2019 16:40:24 GMT+0300,
  updatedAt: Mon Sep 02 2019 10:45:37 GMT+0300,
}

// preparedUser
{
  id: 1,
  name: 'John Snow',
}
```
