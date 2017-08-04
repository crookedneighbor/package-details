# package-details

A thin wrapper around the npm registry

## Installation

```
npm install package-details
```

## Usage

```
// get latest version of a package
var pkg = require('package-details');

pkg('mocha').then(function (details) {
  console.log(details['dist-tags'].latest);
});
```
