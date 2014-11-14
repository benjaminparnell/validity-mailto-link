# validity-mailto-link

Validate the current property is a mailto link

E.g it is in the format mailto:123@example.com

## Installation

```
npm install validity-mailto-link --save
```

## Usage

Below is a simple example for usage with schemata and save:

``` js
var validity = require('validity')
  , schemata = require('schemata')
  , save = require('save')
  , collection = save('author')
  , validateMailtoLink = require('validity-mailto-link')

var schema = schemata(
    { type:
      { type: String
      }
    , email:
      { type: String
      , validators: { all: [ validateMailtoLink() ] }
      }
    })

```

## Credits
[Ben Parnell](https://github.com/benjaminparnell/)