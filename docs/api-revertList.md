---
id: revertList
title: revertList
sidebar_label: revertList
---

An opposite operation to [`adaptList()`](api-adaptList.md).

Under the hood this method just iterates input collection
and invokes for every item the [`revert()`](api-revert.md) method.

> This method is NOT chainable: it produces an array of plane objects.

## Signature

```javascript
revertList(rawData = [])
```

> If `rawData` is not an Array instance the result will be an empty array: []

## Example

```javascript
import { DataCaster } from '@daminort/data-caster';

const users = [
  { id: '1', name: 'John Snow', is_active: '1' },
  { id: '2', name: 'Arya Stark', is_active: '0' },
];

const dc = new DataCaster()
  .int('id')
  .string('name')
  .bool('is_active');
	
// ...
// somewhere in codebase 
const adaptedUsers = dc.adaptList(users);
const originUsers = dc.revertList(adaptedUsers);
```

```javascript
// adaptedUsers
[
  { id: 1, name: 'John Snow', isActive: true },
  { id: 2, name: 'Arya Stark', isActive: false },
]

// originUsers
[
  { id: 1, name: 'John Snow', is_active: true },
  { id: 2, name: 'Arya Stark', is_active: false },
]
```
