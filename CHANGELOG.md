## Changelog

### v8.0.1
* Version mixup, normalize

### v8.0.0
* Remove flow assumption and relevant packages
* Switch to npm as the package manger
* Use default parser
* Add eslint-comments plugin
* Add exceptions for long import/export statements
* Use `block` annotation style for flow annotations

### v7.0.0
* Update "eslint" to 5.8.0
* Update "eslint-plugin-flowtype" to 3.1.1
* Update "eslint-plugin-prettier" to 3.0.0
* Update "flow-bin" to 0.84.0
* Add `'no-console': ['error', { allow: ['warn', 'error', 'info'] }]` rule

### v6.0.0
* Update "babel-eslint" to v10.0.1
* Update "eslint" to v5.6.0
* Update "eslint-config-airbnb-base" to v13.1.0
* Update "eslint-config-prettier" to v3.1.0
* Update "eslint-plugin-flowtype" to v2.50.1
* Update "eslint-plugin-import" to v2.14.0
* Update "eslint-plugin-prettier" to v2.6.2
* Update "flow-bin" to v0.81.0
* Update "prettier" to v1.14.3

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
