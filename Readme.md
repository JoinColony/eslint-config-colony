# eslint-config-colony

The eslint configuration used for Colony OSS projects. Instructions copied from [eslint-config-airbnb](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/README.md)

## Usage

Our default export contains all of our ESLint rules.

**Requirements**

* `eslint`
* `babel-eslint`
* `eslint-config-airbnb-base`
* `eslint-config-prettier`
* `eslint-plugin-import`
* `eslint-plugin-prettier`
* `prettier`

If you use yarn, run `npm info "@colony/eslint-config-colony@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency. See below for npm instructions.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "@colony/eslint-config-colony@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev @colony/eslint-config-colony
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "@colony/eslint-config-colony@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=@colony/eslint-config-colony;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev @colony/eslint-config-colony eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev @colony/eslint-config-colony
  ```
  The cli will produce and run a command like:

  ```sh
  npm install --save-dev @colony/eslint-config-colony eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "@colony/eslint-config-colony"` to your .eslintrc
