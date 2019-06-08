# Explained from First Principles

This repository contains the website
[explained-from-first-principles.com](https://explained-from-first-principles.com),
which is built with [Jekyll](https://jekyllrb.com)
and published with [GitHub Pages](https://pages.github.com).

## Setup

### Instructions for macOS

#### Administrator Rights

You might have to perform some of the following steps with a user
which has administrator rights at the operating system level
but I still need to verify this.

#### Clone Repository

Open the macOS Terminal
located at `/Applications/Utilities/Terminal.app`
and navigate to the directory
in which you would like to store this repository:

```bash
cd path/to/desired/directory
```

Clone this repository
(or a fork thereof)
either using SSH
if you have an account at [GitHub](https://github.com)
with an [SSH key](https://help.github.com/en/articles/connecting-to-github-with-ssh):

```bash
git clone git@github.com:KasparEtter/ef1p.git
```

or using HTTPS otherwise:

```bash
git clone https://github.com/KasparEtter/ef1p.git
```

#### Install Homebrew

Paste the following in a macOS Terminal prompt in order to install [Homebrew](https://brew.sh):

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### Install Ruby

Install (or upgrade) [Ruby](https://www.ruby-lang.org) with Homebrew
in order to avoid [file permission issues](https://stackoverflow.com/questions/14607193/installing-gem-or-updating-rubygems-fails-with-permissions-error):

```bash
brew install ruby
```

Add the paths indicated by the Ruby install script to your `~/.bash_login`:

```bash
export PATH="/usr/local/opt/ruby/bin:/usr/local/lib/ruby/gems/2.6.0/bin:$PATH"
```

Reload your shell for the changes to take effect by opening a new window/tab
or by [entering](https://stackoverflow.com/questions/2518127/how-do-i-reload-bashrc-without-logging-out-and-back-in) `. ~/.bash_login`.

#### Install Bundler

Install [Bundler](https://bundler.io) and replace a potentially existing installation:

```bash
gem install bundler
```

#### Install Dependencies

Navigate to the root directory of this repository:

```bash
cd ef1p
```

and install all Ruby dependencies:

```bash
bundle install
```

In order to run the [same versions](https://pages.github.com/versions/)
as the [GitHub Pages](https://pages.github.com) server,
update the dependencies from time to time:

```bash
bundle update
```

You can check the versions of your local dependencies with:

```bash
gem list
```

#### Serve Website

Serve the website from the root directory of this repository:

```bash
bundle exec jekyll serve --livereload
```

If you got no errors,
you can open the website at [http://localhost:4000](http://localhost:4000).

Use `npm run watch` as described below to also watch for changes in scripts and styles.

## Development

The articles, scripts and styles need to be rebuilt after making changes to them.

### Requirements

Install [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com) with Homebrew:

```bash
brew install node
```

Or simply check whether you already have Node.js and npm installed:

```bash
node -v
npm -v
```

Optionally update npm with:

```bash
npm install -g npm
```

### Dependencies

#### Install

Install the npm dependencies as specified in `package.json` with:

```bash
npm install
```

#### Update

Update all dependencies to their latest version
respecting [Semantic Versioning](https://semver.org):

```bash
npm update
```

If you want to update all dependencies to their latest version ignoring the specified versions,
you can use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates):

```bash
npx npm-check-updates # Shows which dependencies can be updated.
npx npm-check-updates -u # Updates the versions in the package file.
npm install # Installs the new versions according to the package file.
```

#### Check

Show the version of a particular direct or indirect dependency:

```bash
npm show [dependency] version
```

Show the tree of all direct and indirect dependencies:

```bash
npm list
```

### Combined

#### Build

Use the following script to build the articles, scripts and styles:

```bash
npm run build
```

#### Lint

Use the following script to lint the articles, scripts and styles in parallel:

```bash
npm run lint
```

#### Watch

Use the following script to watch the articles, scripts and styles simultaneously:

```bash
npm run watch
```

### Articles

#### Build

If you change a [Markdown](https://guides.github.com/features/mastering-markdown/) file,
it needs to be rerendered as HTML
and copied to the `_site` folder:

```bash
npm run md-build
```

#### Lint

All Markdown files have to pass [markdownlint](https://github.com/DavidAnson/markdownlint)
with the rules specified in `.markdownlint.json`.
If you are using [Visual Studio Code](https://code.visualstudio.com/),
you can install this [extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint).

```bash
npm run md-lint
```

#### Newlines

Please start a new line at least for each sentence.
You can also include more line breaks
according to the [Semantic Line Breaks Specification](https://sembr.org).

#### Watch

If you want the website to reload automatically on any changes to Markdown files,
you can run the following script,
which is defined in `package.json`:

```bash
npm run md-watch
```

### Styles

#### Build

If you change any of the [Sass](https://sass-lang.com) files in `scss`,
you have to compile, prefix and minify the CSS again with:

```bash
npm run css-build
```

The full and minified CSS for both the dark and the light theme are written to `assets/styles`.
You have to run `npm run md-build` to copy the CSS files to the `_site` directory
from which the website is served
in order for them to take effect.

#### Lint

All Sass files have to pass [stylelint](https://stylelint.io)
with the rules specified in `.stylelintrc`.
If you are using [Visual Studio Code](https://code.visualstudio.com/),
you can install this [extension](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint).

```bash
npm run css-lint
```

#### Watch

If you want to rebuild the styles automatically when you change a Sass file,
you can run the following script:

```bash
npm run css-watch
```

Please note that
in order for the rebuilt styles to take effect
you also have to run `npm run md-watch`.

### Scripts

#### Build

If you change any of the [TypeScript](https://www.typescriptlang.org) files in `typescript`
or in one of the article folders,
you have to compile and minify them again with:

```bash
npm run ts-build
```

The minified JavaScript is written to `assets/scripts`.
You have to run `npm run md-build` to copy the JS files to the `_site` directory
from which the website is served
in order for them to take effect.

#### Lint

All TypeScript files have to pass [TSLint](https://palantir.github.io/tslint/)
with the rules specified in `tslint.json`.
If you are using [Visual Studio Code](https://code.visualstudio.com/),
you can install this [extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin).

```bash
npm run ts-lint
```

#### Watch

If you want to rebuild the scripts automatically when you change a TypeScript file,
you can run the following script:

```bash
npm run ts-watch
```

Please note that
in order for the rebuilt scripts to take effect
you also have to run `npm run md-watch`.

### Favicons

The favicons stored in `assets/favicons` were generated with [RealFaviconGenerator](https://realfavicongenerator.net).

You can convert the logo in `assets/images` from SVG to PNG with:

```bash
brew install librsvg
npm run logo-convert
```

## Articles

Articles can have the following variables in their [front matter](https://jekyllrb.com/docs/front-matter/):

- `icon`: The name of the [Font Awesome](https://fontawesome.com) icon used in the navigation.
- `title`: The title of the article as used at the top of the article and in the navigation.
- `category`: The name of the [category](_data/categories.yml) to which the article belongs.
- `published`: The date when the article was first published as YYYY-MM-DD. Omit this variable if the article shall not yet be added to the navigation.
- `modified`: The date when the article was last modified as YYYY-MM-DD. Omit this variable if the article has not been modified since its publication.
- `image`: The path to the image that shall be used when the article is shared on social media. The image should be 1200 x 630 or larger and less than 1 MB in size.
- `teaser`: A short text that shall be used when the article is shared on social media or indexed by search engines.

## Contributions

Please [open an issue](https://github.com/KasparEtter/ef1p/issues/new)
if you found a typographical error, a factual inaccuracy or a logical fallacy.
Please also let me know if an explanation is difficult to follow.
You are welcome to suggest interesting topics for me to write about.
However, unless I explicitly asked for it, I will not accept any pull requests.

## Dependencies

The most important third party projects used by this website are:

- [Ruby](https://www.ruby-lang.org)
- [Jekyll](https://jekyllrb.com)
- [Bootstrap](https://getbootstrap.com)
- [Flatly Theme](https://bootswatch.com/flatly/)
- [npm](https://www.npmjs.com)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [webpack](https://webpack.js.org)
- [jQuery](https://jquery.com)
- [AnchorJS](https://www.bryanbraun.com/anchorjs/)
- [Font Awesome](https://fontawesome.com)

More dependencies are listed in [package.json](package.json) and [Gemfile](Gemfile).

## Copyright

The copyright for the content of this repository,
excluding the aforementioned dependencies,
belongs to [Kaspar Etter](https://www.kasparetter.com).

## License

![Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)

The content of this repository,
excluding the aforementioned dependencies,
is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/).

## Contact

Please [contact me](mailto:contact@ef1p.com)
if you have a suggestion
or need permissions beyond the scope of the above license.
