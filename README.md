# Grapesjs Style Border

Separate border property to `border`, `border-left`, `border-top`, `border-bottom`, `border-right`

[DEMO](##)

### HTML
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-style-border"></script>

<div id="gjs"></div>
```

### JS
```js
const editor = grapesjs.init({
	container: '#gjs',
  height: '100%',
  fromElement: true,
  storageManager: false,
  plugins: ['grapesjs-style-border'],
});
```

### CSS
```css
body, html {
  margin: 0;
  height: 100%;
}
```


## Summary

* Plugin name: `grapesjs-style-border`



## Options

| Option | Description | Default |
|-|-|-
| `sector` | Sector to append property | `decorations` |
| `originalBorder` | Sector and id/name of original border property so it can be removed | `{ sector: 'decorations', name: 'border' }` |
| `at` | Optionally add index to append property | `false` |
| `extendType` | Extend border type property | `{}` |
| `extendWidth` | Extend `border-width` property | `{}` |
| `extendStyle` | Extend `border-style` property | `{}` |
| `extendColor` | Extend `border-color` property | `{}` |
| `extendBorder` | Extend `border` property | `{}` |
| `extendBorderTop` | Extend `border-top` property | `{}` |
| `extendBorderRight` | Extend `border-right` property | `{}` |
| `extendBorderBottom` | Extend `border-bottom` property | `{}` |
| `extendBorderLeft` | Extend `border-left` property | `{}` |



## Download

* CDN
  * `https://unpkg.com/grapesjs-style-border`
* NPM
  * `npm i grapesjs-style-border`
* GIT
  * `git clone https://github.com/Ju99ernaut/grapesjs-style-border.git`



## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-style-border.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      // ...
      plugins: ['grapesjs-style-border'],
      pluginsOpts: {
        'grapesjs-style-border': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-style-border';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```



## Development

Clone the repository

```sh
$ git clone https://github.com/Ju99ernaut/grapesjs-style-border.git
$ cd grapesjs-style-border
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```



## License

MIT
