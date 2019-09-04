---
id: adaptList
title: adaptList
sidebar_label: adaptList
---

Adapts array of data from server in according to `DataCaster` instance rules.

Under the hood this method just iterates input collection
and invokes for every item the [`adapt()`](api-adapt.md) method.

> This method is NOT chainable: it produces an array of plane objects.

## Signature

```javascript
adaptList(rawData = [])
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
```

```javascript
// adaptedUsers
[
  { id: 1, name: 'John Snow', isActive: true },
  { id: 2, name: 'Arya Stark', isActive: false },
]
```
