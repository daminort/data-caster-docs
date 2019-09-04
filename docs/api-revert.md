---
id: revert
title: revert
sidebar_label: revert
---

An opposite operation to [`adapt()`](api-adapt.md).

> This method is NOT chainable: it produces a plane object.

## Signature

```javascript
revert(rawData = {})
```

## Example
```javascript
import { DataCaster } from '@daminort/data-caster';

// user data from server
const serverUser = {
  id: 1,
  name: 'John Snow',
  is_active: '1',
};

const dc = new DataCaster()
  .int('id')
  .string('name')
  .bool('is_active', {
    resultName: 'active',
    adapter: (value) => Boolean(+value),
    reverter: (value) => value ? '1' : '0',
  });
	
// ...
// somewhere in codebase 
const clientUser = dc.adapt(serverUser);
const originUser = dc.revert(clientUser);
```

```javascript
// clientUser
{
  id: 1,
  name: 'John Snow',
  active: true,
}

// originUser
{
  id: 1,
  name: 'John Snow',
  is_active: '1',
}
```
