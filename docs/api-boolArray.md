---
id: boolArray
title: boolArray
sidebar_label: boolArray
---

Adds description for **Array of Booleans** field in `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
boolArray(originName, options = {})
```

> `options` is an object that can be omitted. To get more about options see [Fields](basics#fields) section

## Example

```javascript
const dc = new DataCaster()
  .int('id')
  .string('name')
  .boolArray('wins');
	
const result = dc.adapt(serverObject);
```

```javascript
// before
{
  id: 1,
  name: 'John Snow',
  wins: [
    '1',
    'false',
    null,
    'win',
  ],
}

// after
{
  id: 1,
  name: 'John Snow',
  wins: [
    true,
    true,
    false,
    true,
  ],
}
```
