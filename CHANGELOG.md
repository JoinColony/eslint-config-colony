## Changelog

### v5.0.0

* Update peerDependencies (most notably eslint-airbnb-config-base to v13.0.1)
* Add dependency to `flow-bin`
* Add `"no-use-before-define": ["error", { "functions": false, "classes": true }]` rule
* Add `"no-warning-comments": ["error", { "terms": ["fixme"], "location": "start" }]` rule

### v4.0.0

* Fix peerDependencies (add eslint)
* Bump peerDependencies versions
* Add `'flowtype/require-valid-file-annotation': [1, 'always']` rule

#### Migrating from v3.x

`flowtype/require-valid-file-annotation` requires you to have flow annotations in all your source files (otherwise it will warn). If you don't use flow this shouldn't concern you.

To disable this rule for certain files (you might want to exclude tests), add this to your `.eslintrc` file overrides:

```json
"overrides": [
    {
        "files": "*.test.js",
        "rules": {
            "flowtype/require-valid-file-annotation": "off"
        }
    }
]
```

The pattern `*.test.js` being an example for matchting your test files.

### < v4

This seems to be a great mystery.