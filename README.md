# rspack `enforce` issue

- Run `pnpm rspack build`, then we can see the output

```js
export default {
  __name: 'App',
  setup(__props) {
    console.log('HelloWorld')

    return { __sfc: true }
  },
}
```

- Run `pnpm webpack build`

```js
<script setup>
console.log('HelloWorld')
</script>

<template>
  <div id="app">hello</div>
</template>
```


They're different, but the configuration is the same. 

If we remove the `enforce` option in `webpack.config.js`, the output will be the same. So the `enforce` option is not working as expected in Rspack.
