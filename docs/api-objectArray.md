---
id: objectArray
title: objectArray
sidebar_label: objectArray
---

Adds description for **Array of Objects** field in `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
objectArray(originName, options = {})
```

> `options` is an object that can be omitted. To get more about options see [Fields](basics#fields) section

## Example

```javascript
import { DataCaster } from '@daminort/data-caster';

const dc = new DataCaster()
  .int('id')
  .string('name')
  .objectArray('sisters');
	
const result = dc.adapt(serverObject);
```

```javascript
// before
{
  id: 1,
  name: 'John Snow',
  sisters: [
    { id: 2, name: 'Sansa Stark' },
    { id: 3, name: 'Arya Stark' },
    null,
    'Rob Stark',
  ],
}

// after
{
  id: 1,
  name: 'John Snow',
  sisters: [
    { id: 2, name: 'Sansa Stark' },
    { id: 3, name: 'Arya Stark' },
    {},
    {},
  ],
}
```
