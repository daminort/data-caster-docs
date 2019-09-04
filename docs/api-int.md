---
id: int
title: int
sidebar_label: int
---

Adds description for **Integer** field in `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
int(originName, options = {})
```

> `options` is an object that can be omitted. To get more about options see [Fields](basics#fields) section

## Example

```javascript
const dc = new DataCaster()
  .int('id')
  .string('name')
  .int('age')
  .int('balance');
	
const result = dc.adapt(serverObject);
```

```javascript
// before
{
  id: 1,
  name: 'John Snow',
  age: '25',
  balance: '100.57',
}

// after
{
  id: 1,
  name: 'John Snow',
  age: 25,
  balance: 100,
}
```
