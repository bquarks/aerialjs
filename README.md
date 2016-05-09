# aerialjs [![Build Status](https://travis-ci.org/bquarks/aerialjs.svg?branch=master)](https://travis-ci.org/bquarks/aerialjs)

[![Join the chat at https://gitter.im/bquarks/aerialjs](https://badges.gitter.im/bquarks/aerialjs.svg)](https://gitter.im/bquarks/aerialjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Meteor package to connect web apps with corbel platform


## JsDoc
*aerialjs* has documentation generated automatically using **meteor-jsdoc**. You need to add two initial files to setup configuration (jsdoc.json & jsdoc-conf.json).

#### Configuration

jsdoc   .json
```
{
  // Execute meteor-jsdoc in debug mode to track down errors.
  "debug": false,
  // node.js install path, default to: "`which node`" on Mac and Linux, "`where node`" on Windows
  "nodePath": "",
  // Project docs path
  "docsPath": "~/path/to/generate/your/doc/project",
  // Project docs Meteor server port, default to: 3333
  "meteorPort": 3333,
  // Copy the Meteor docs server before building the docs (required for the first build)
  // Setting this to false after the first build allows you to customize the Meteor docs server
  // without seeing your changes overridden the next time you build the docs.
  "initMeteor": true,
  // Update Meteor without overwriting your changes to the docs templates.
  "updateMeteor": true,
  // Add a preamble to your project's docs that will appear at the top of the docs.
  "preamble": true,
  // Link to the project repository (used to construct the file path in the docs). Optional.
  "projectRepo": "https://github.com/username/myproject/tree/master",
  // Values to be used in the `<head>` for the docs.
  "docsConfig": {
    "title": "Meteor Project Docs",
    "metas": {
      "description": "Documentation for a meteor project."
    }
  }
}
```

jsdoc-conf.json

```
{
    "tags": {
        "allowUnknownTags": true,
        "dictionaries": ["jsdoc","closure"]
    },
    "source": {
        "includePattern": ".+\\.js(doc)?$",
        "excludePattern": "(^|\\/|\\\\)_"
    },
    "plugins": [],
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false
    }
}
```

#### Build

```
meteor-jsdoc build
```
You will find doc files on path you have defined.