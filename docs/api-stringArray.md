---
id: stringArray
title: stringArray
sidebar_label: stringArray
---

Adds description for **Array of Strings** field in `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
stringArray(originName, options = {})
```

> `options` is an object that can be omitted. To get more about options see [Fields](basics#fields) section

## Example

```javascript
const dc = new DataCaster()
  .int('id')
  .string('name')
  .stringArray('places')
  .stringArray('weapons');
	
const result = dc.adapt(serverObject);
```

```javascript
// before
{
  id: 1,
  name: 'John Snow',
  places: ['Winterfell', 'Wall'],
  weapons: [1, 13, 22],
}

// after
{
  id: 1,
  name: 'John Snow',
  places: ['Winterfell', 'Wall'],
  weapons: ['1', '13', '22'],
}
```
