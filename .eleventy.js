// Example use for the demo plugin:
// {% codepen "aBcDEf" %}

module.exports = (eleventyConfig, options) => {
  const defaults = {
    height: 256,
    theme: 'dark',
    tabs: 'result',
    user: 'Captain Anonymous',
    title: 'Unknown Pen',
    preview: true,
    editable: false,
    ...options
  };

  eleventyConfig.addShortcode("codepen_js", () => {
    return `<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`;
  });

  eleventyConfig.addShortcode("codepen", (slug, config) => {
    let options = { ...defaults };

    // Log error if slug is missing. Returns an HTML command for debugging reasons.
    if (!slug) {
      console.error('ERROR: CodePen embed is missing required attribute "slug"');
      return `<!-- Error: CodePen embed is missing required attribute "slug" -->`;
    }

    // check if slug is a full URL
    if (slug.substr(0, 4) == 'http' || slug.substr(0, 7) == 'codepen') {
      let p = slug.split('/');
      slug = p[p.length - 1];
    }

    // parse the inline config options
    if (config) {
      config.split(';').map(opt => {
        let parts = opt.split(':');
        options[parts[0]] = parts[1];
      });
    }
    // Return the embed code
    return `<p data-height="${options.height}" data-theme-id="${options.theme}" data-slug-hash="${slug}" data-default-tab="${options.tabs}" data-user="${options.user}" data-embed-version="2" data-pen-title="${options.title}" data-preview="${options.preview}" data-editable="${options.editable}" class="codepen" style="height: ${options.height}px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">See the Pen <a href="https://codepen.io/${options.user}/pen/${slug}/">${options.title}</a> on <a href="https://codepen.io">CodePen</a>.</p>`
  });
};
