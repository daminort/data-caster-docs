---
id: clone
title: clone
sidebar_label: clone
---

Makes clone of `DataCaster` instance.

> This method is chainable: it returns the new instance.

## Signature

```javascript
clone()
```

## Example

```javascript
import { DataCaster } from '@daminort/data-caster';

const serverUser = {
  id: 1,
  name: 'John Snow',
  createdAt: '2019-08-22T16:40:24',
  updatedAt: '2019-09-02T10:45:37',
};

const adapter = new DataCaster()
  .int('id')
  .string('name')
  .date('createdAt')
  .date('updatedAt');

const reverter = adapter
  .clone()
  .exclude('createdAt')
  .exclude('updatedAt');
	
// ...
// somewhere in codebase 
const clientUser = adapter.adapt(serverUser);
const preparedUser = reverter.revert(clientUser);
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
