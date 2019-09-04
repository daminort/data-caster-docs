---
id: dateArray
title: dateArray
sidebar_label: dateArray
---

Adds description for **Array of Dates** field in `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
dateArray(originName, options = {})
```

> `options` is an object that can be omitted. To get more about options see [Fields](basics#fields) section

## Example

```javascript
import { DataCaster } from '@daminort/data-caster';

const dc = new DataCaster()
  .int('id')
  .string('name')
  .dateArray('wins');
	
const result = dc.adapt(serverObject);
```

```javascript
// before
{
  id: 1,
  name: 'John Snow',
  wins: [
    '2000-01-01T10:40:00',
    '2001-05-12',
    null,
  ],
}

// after
{
  id: 1,
  name: 'John Snow',
  wins: [
    Sat Jan 01 2000 10:40:00 GMT+0200,
    Sat May 12 2001 03:00:00 GMT+0300,
    Thu Jan 01 1970 03:00:00 GMT+0300,
  ],
}
```
