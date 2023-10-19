# tarava

Avatar builder using Canvas

⚠️ work in progress ⚠️

![Avatar gif](https://user-images.githubusercontent.com/92366070/275830191-959d999c-056e-4f5b-b52c-3c7ad9584264.gif)


## Development

`yarn dev` -> to start development command on all projects.

`yarn build` -> to build all projects.

`yarn lint` -> to lint all projects

## Structure

`./dev/vue` and `./dev/react` are the environments to develop and try the integrations for each framework.

`./packages/core` is the main library which handles majority of logic.

`./packages/vue` and `./packages/react` are the framework-specific implementations of `@tarava/core`.

`./packages/types` has all the types shared across all projects.
