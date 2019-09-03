---
id: number
title: number
sidebar_label: number
---

Adds description for **Number** field in `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
number(originName, options = {})
```

> `options` is an object that can be omitted. To get more about options see [Fields](basics#fields) section

## Example

```javascript
const dc = new DataCaster()
  .number('id')
  .string('name')
  .number('age')
  .number('balance');
	
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
  balance: 100.57,
}
```
