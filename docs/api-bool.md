---
id: bool
title: bool
sidebar_label: bool
---

Adds description for **Boolean** field in `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
bool(originName, options = {})
```

> `options` is an object that can be omitted. To get more about options see [Fields](basics#fields) section

## Example

```javascript
const dc = new DataCaster()
  .int('id')
  .string('name')
  .bool('is_active');
	
const result = dc.adapt(serverObject);
```

```javascript
// before
{
  id: 1,
  name: 'John Snow',
  is_active: 1,
}

// after
{
  id: 1,
  name: 'John Snow',
  isActive: true,
}
```
