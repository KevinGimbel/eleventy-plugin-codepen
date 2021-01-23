# eleventy-plugin-codepen
> Embed CodePen.io Pens into your eleventy website

<!-- BEGIN mktoc -->
- [Usage](#usage)
  - [Install via npm](#install-via-npm)
  - [Load the plugin in .eleventy.js](#load-the-plugin-in-eleventyjs)
  - [Load the CodePen javascript library](#load-the-codepen-javascript-library)
  - [Use the shortcode!](#use-the-shortcode)
- [Config Options](#config-options)
  - [Overwriting options inline](#overwriting-options-inline)
- [Credits](#credits)
<!-- END mktoc -->

## Usage

### Install via npm


```bash
npm install @kevingimbel/eleventy-plugin-codepen --save
```

### Load the plugin in .eleventy.js

Include it in your .eleventy.js config file:
```js
const canIuse = require("@kevingimbel/eleventy-plugin-caniuse");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(canIuse);
};
```

### Load the CodePen javascript library

The embed requires the CodePen JavaScript library to work. For convenience the library can be loaded with a shortcode. This is best done near the closing body tag and only needs to be done once!

```html
...
{% codepen_js %}
</body>
</html>
```

### Use the shortcode!

The only required arguments is the CodePen full URL of the Pen or the "slug". This is the random letters in the URL, for example the Pen https://codepen.io/kevingimbel/pen/LXxoEL has the slug "LXxoEL".

It is up to you what you want to specify, although the full URL may be more future proof (e.g. if you want to replace this Plugin with a plugin that prints the URL instead of creating an embed.).

```
{% codepen "https://codepen.io/kevingimbel/pen/LXxoEL" %}
```

## Config Options

All of these can be set in the `.eleventy.js` config as well as inline (see below).

| Option      | Type | Default       | Comment | 
| ----------- | ---- | ------------- | ------- | 
| height | Number | 256 | The height of the embed iframe | 
| theme | String | dark | Free codepen users can use `light` or `dark`, CodePen Pro users may use additional themes | 
| tabs | String | result | possible values: `html`, `css`, `js`, `result`. Combine with comma like `html,result` |
| user | String | Captain Anonymous | name of the user who created the pen |
| title | String | Unknown Pen | The title of the pen, used when embed can't be rendered |
| preview | Boolean | true | If true, shows a "run pen" button instead of automatically running code |
| editable | Boolean | false | Makes pen editable, requires CodePen Pro |

### Overwriting options inline

All options can also be overwritten "inline" when the shortcode is used. Because 11ty doesn't support names parameters, and there are quite a lot of options, all options are specified in one string. 

The config string is split at each semicolon (`;`) and each colon (`:`) to create key-value pairs, as shown in the following table

| Option String | Parsed object |
| ------------- | ------------- |
|`tabs:html,result;title:single-div Link from Legend of Zelda`| `{tabs: "html,result", title: "single-div Link from Legend of Zelda" }` |

Setting all options looks like:

```
"height:256;theme:dark;tabs:result;user:Captain Anonymous;title:Unknown Pen;preview: true;editable: false"
```

## Credits

- Huge thanks to [CodePen.io](https://codepen.io/) for providing a great embed script. This plugin is only a wrapper around the existing functionality.
