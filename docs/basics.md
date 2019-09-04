---
id: basics
title: Basics
sidebar_label: Basics
---
## Options

`Data Caster` has only two general options that you can set to change basic behavior:
- forceCamelCase
- ignoreExcluded

#### forceCamelCase

This option is used to determine whether transform object's properties into `camelCase`-notation
or not.

Default value: `true`

If its value is `false` no transformations will be applyed to properties names.
This option can be changed only with initialization.

> Note:
> If object's property ends with `_id` or `_Id` and `forceCamelCase === true` the result will be
> `<property>ID`. For example, `user_id` -> 'userID'

#### ignoreExcluded

This option allows temporarily switch off and on using excluded fields. This is useful for
preparing data for server: if you don't want to send everything.

But, of course, it can be used during adapting phase as well via `ignoreExcluded()` method.

So, you can set your own options by using `init()` method:

```javascript
import { DataCaster } from '@daminort/data-caster';

const dc = new DataCaster()
  .init({
    forceCamelCase: false,
    ignoreExcluded: true,
  });
```

> Be careful if you are going to use `init()` during using DataCaster instance: this one
> cleans up all data you might set before.

## Fields

In order to use `DataCaster` you need to describe every field you want to see in the result.
To do it `DataCaster` offer special methods that named by types of fields they add.

For example, `string()`, `int()`, `objectArray()` and so on.

But all fields you are defining have certain set of properties:
- type: type of field
- originName: the name of property in origin object
- resultName: the name of property in resulting object
- adapter: will be invoked to coerce value during `adapting phase`
- preAdapter: will be invoked before coercion during `adapting phase`
- postAdapter: will be invoked right after coercion during `adapting phase`
- reverter: will be invoked to coerce value during `reverting phase`
- preReverter: will be invoked before coercion during `reverting phase`
- postReverter: will be invoked right after coercion during `reverting phase`

Example:

```javascript
import { DataCaster } from '@daminort/data-caster';

const serverData = {
  active_status: '-1',
};

const dc = new DataCaster()
  .bool('active_status', {
    resultName: 'isActive',
    adapter: (value) => +value > 0,
    reverter: (value) => value ? '1' : '-1',
  });

const result = dc.adapt(serverData);
```

```javascript
// result
{
  isActive: false,
}
```

More examples you can get in the [API reference](api-init) section.
