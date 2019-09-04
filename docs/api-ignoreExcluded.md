---
id: ignoreExcluded
title: ignoreExcluded
sidebar_label: ignoreExcluded
---

Lets to ignore or not excluded field during processing.
This method doesn't manipulate by excluded fields, it impacts only on processing.

> This method is chainable.

## Signature

```javascript
ignoreExcluded(ignore: Boolean)
```

## Example

```javascript
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
  .exclude('createdAt')
  .exclude('updatedAt');
	
// ...
// somewhere in codebase 
const adapt = (rawData) => dc
  .ignoreExcluded(true)
  .adapt(rawData);

const revert = (rawData) => dc
  .ignoreExcluded(false)
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
