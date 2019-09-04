---
id: init
title: init
sidebar_label: init
---

Makes initialization of `DataCaster` instance.

> This method is chainable.

## Signature

```javascript
init(options = {})
```

`options` is an object that can be omitted and thus it will use options by default:

```javascript
const defaultOptions = {
  forceCamelCase: true,  // transform object's properties into 'camelCase'-notation
  ignoreExcluded: false, // allowing temporarily switch off and on using excluded fields
};
```

If you don't need to replace default options you can omit using this method at all.

## Example

```javascript
import { DataCaster } from '@daminort/data-caster';

const dc = new DataCaster()
  .init({
    forceCamelCase: false,
   })
  .int('id')
  .string('user_name');
	
const result = dc.adapt(serverObject);
```

```javascript
// before
{
  id: 1,
  user_name: 'John Snow',
}

// after
{
  id: 1,
  user_name: 'John Snow',
}
```
