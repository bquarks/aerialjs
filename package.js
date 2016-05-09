Package.describe({
  name: 'bquarks:aerialjs',
  version: '0.1.2',
  // Brief, one-line summary of the package.
  summary: 'Suite Aerialjs to connect Meteor applications with Corble Platform.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bquarks/aerialjs.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use(['ecmascript', 'bquarks:aerial-mongo@0.0.13']);
  api.mainModule('aerialjs.js');
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('bquarks:aerialjs');
//   api.mainModule('aerialjs-tests.js');
// });
