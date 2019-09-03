---
id: date
title: date
sidebar_label: date
---

Adds description for **Date** field in `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
date(originName, options = {})
```

> `options` is an object that can be omitted. To get more about options see [Fields](basics#fields) section

## Example

```javascript
const dc = new DataCaster()
  .int('id')
  .string('name')
  .date('birthday');
	
const result = dc.adapt(serverObject);
```

```javascript
// before
{
  id: 1,
  name: 'John Snow',
  birthday: '2000-01-01T00:00:00',
}

// after
{
  id: 1,
  name: 'John Snow',
  birthday: Sat Jan 01 2000 00:00:00 GMT+0200,
}
```
