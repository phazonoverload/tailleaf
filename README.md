# Tailleaf :leaves:

An 11ty boilerplate with Tailwind and Netlify Functions.

## Set Up

```
npm install
npm run dev
```

## Create build-ready site

```
npm run build
```

Don't forget to add details to the empty description and open-graph tags in `src/base.liquid` before launching your site!

## Lazysizes

This boilerplate will automatically lazyload any images with the class `lazyload`.

## Netlify Functions

Tailleaf comes with a sample Netlify Function to get you started. You can duplicate `functions/src/hello.js` to create new functions, but you will need to restart the development server.

To call a Netlify Function, use the following code (where `hello` is your function name):

```js
fetch(baseURL() + '/hello')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
```

If you are not using Netlify Functions, comment out the `set-base-url` include in `_layouts/base.liquid`.

## Netlify Redirects

Edit the `src/_redirects` file to use Netlify Redirects. You can read more about using it [here](https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file)

## Netlify Build Plugins

Projects, when deployed on Netlify, will run netlify-plugin-image-optim and netlify-plugin-a11y. Builds will fail if accessibility failures are found.
