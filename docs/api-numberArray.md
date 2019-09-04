---
id: numberArray
title: numberArray
sidebar_label: numberArray
---

Adds description for **Array of Numbers** field in `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
numberArray(originName, options = {})
```

> `options` is an object that can be omitted. To get more about options see [Fields](basics#fields) section

## Example

```javascript
const dc = new DataCaster()
  .int('id')
  .string('name')
  .numberArray('coords')
  .numberArray('positions');
	
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
  coords: [16.22, 40.51],
  positions: [1, 6, 0],
}
```
