---
id: any
title: any
sidebar_label: any
---

Adds description for **Any** field in `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
any(originName, options = {})
```

> `options` is an object that can be omitted. To get more about options see [Fields](basics#fields) section

## Example

```javascript
const dc = new DataCaster()
  .int('id')
  .string('name')
  .any('place'),
  .any('wins');
  .any('position');
  .any('weapon');
	
const result = dc.adapt(serverObject);
```

```javascript
// before
{
  id: 1,
  name: 'John Snow',
  place: 'Wall',
  wins: [
    '2001-05-12',
    null,
  ],
  position: {
    top: 40,
    left: 22,
  },
  weapon: null,
}

// after
{
  id: 1,
  name: 'John Snow',
  place: 'Wall',
  wins: [
    '2001-05-12',
    null,
  ],
  position: {
    top: 40,
    left: 22,
  },
  weapon: null,
}
```
