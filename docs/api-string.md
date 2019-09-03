---
id: string
title: string
sidebar_label: string
---

Adds description for **String** field in `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
string(originName, options = {})
```

> `options` is an object that can be omitted. To get more about options see [Fields](basics#fields) section

## Example

```javascript
const dc = new DataCaster()
  .string('id')
  .string('name')
  .string('place_id');
	
const result = dc.adapt(serverObject);
```

```javascript
// before
{
  id: 1,
  user_name: 'John Snow',
  place_id: 'Winterfell',
}

// after
{
  id: '1',
  userName: 'John Snow',
  placeID: 'Winterfell',
}
```
