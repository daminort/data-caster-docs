---
id: array
title: array
sidebar_label: array
---

Adds description for **Array** field in `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
array(originName, options = {})
```

> `options` is an object that can be omitted. To get more about options see [Fields](basics#fields) section

## Example

```javascript
import { DataCaster } from '@daminort/data-caster';

const dc = new DataCaster()
  .int('id')
  .string('name')
  .array('places')
  .array('weapons');
	
const result = dc.adapt(serverObject);
```

```javascript
// before
{
  id: 1,
  name: 'John Snow',
  places: ['Winterfell', 'Wall'],
  weapons: undefined,
}

// after
{
  id: 1,
  name: 'John Snow',
  places: ['Winterfell', 'Wall'],
  weapons: [],
}
```
