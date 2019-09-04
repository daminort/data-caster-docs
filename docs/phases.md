---
id: phases
title: Phases
sidebar_label: Phases
---

`DataCaster` is intended to work in two directions which I call `phases`:
- `adapting`: coercing data that was got from server
- `reverting`: inverse transformation of client's data before sending to the server

## Adapting

This phase of data transformations is intended for the next purposes:
- to cut off unnecessary data
- to coerce properties to certain type

Thank to these operations your client can get as minimal and clean data set as possible.

In this way you can adapt both single objects and lists of them:

```javascript
import { DataCaster } from '@daminort/data-caster';

const serverObject = {
  id: '1220',
  name: 'John Snow',
};

const serverList = [
  { id: '1220', name: 'John Snow' },
  { id: '1330', name: 'Arya Stark' },
  { id: '1440', name: 'Sansa Stark' },
];

const dc = new DataCaster()
  .int('id')
  .string('name');

const single = dc.adapt(serverObject);
const list = dc.adaptList(serverList);
```

> Under the hood `adaptList()` just go through array and invoke `adapt()` for every element.

## Reverting

`revert()` stands for make inverse transformation on the data you have adapted before.
But you can use it just for preparing data for server from scratch as well.

And, of course, feel free to revert both a single object and list:

```javascript
// We took DataCaster instance and data from our earlier example above
const revertedSingle = dc.revert(single);
const revertedList = dc.revertList(list);
```
