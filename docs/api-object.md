---
id: object
title: object
sidebar_label: object
---

Adds description for **Object** field in `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
object(originName, options = {})
```

> `options` is an object that can be omitted. To get more about options see [Fields](basics#fields) section

## Example

```javascript
const dc = new DataCaster()
  .int('id')
  .string('name')
  .object('job');
  .object('positions');
	
const result = dc.adapt(serverObject);
```

```javascript
// before
{
  id: 1,
  name: 'John Snow',
  job: {
    id: '13',
    name: 'Warrior',
  },
  positions: null,
}

// after
{
  id: 1,
  name: 'John Snow',
  job: {
    id: '13',
    name: 'Warrior',
  },
  positions: {},
}
```
