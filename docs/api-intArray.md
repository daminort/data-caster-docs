---
id: intArray
title: intArray
sidebar_label: intArray
---

Adds description for **Array of Integers** field in `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
intArray(originName, options = {})
```

> `options` is an object that can be omitted. To get more about options see [Fields](basics#fields) section

## Example

```javascript
import { DataCaster } from '@daminort/data-caster';

const dc = new DataCaster()
  .int('id')
  .string('name')
  .intArray('coords')
  .intArray('positions');
	
const result = dc.adapt(serverObject);
```

```javascript
// before
{
  id: 1,
  name: 'John Snow',
  coords: ['16.22', '40.51'],
  positions: ['1', 6, 'top'],
}

// after
{
  id: 1,
  name: 'John Snow',
  coords: [16, 40],
  positions: [1, 6, 0],
}
```
