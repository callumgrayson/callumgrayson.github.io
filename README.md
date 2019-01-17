# Project Title - Template for Simple JS App with Webpack Build
Project description - This is a template for developing simple, single page html, css and vanilla Javascript applications. It provides a setup to transpile, autoprefix, minify and bundle your assets for a production-like build.

## Installation
In your terminal:
1. `git clone https://github.com/callumgrayson/project-template.git`
2. `cd project-template`
3. `npm i`

The last command will install the dependecies needed for the webpack build.

## Development
Open **`index.html`** in your editor's live server to see 'changes on save' as you develop your project. Please note the following points:
- In **`index.html`** uncomment the css and js tags: 
```html
<link rel="stylesheet" href="../src/main.css">
<script src="../src/app.js"></script>
```
- In **`index.html`** comment out the bundle tag:
```html
<!-- <script src="./bundle.min.js" defer></script> -->
```
- Edit the **`index.html`** file in place.
- Develop your project and place any assests in the **`src`** folder.
- If you rename any folders the build will not work unless you also change the relevant names in the **`webpack.config.js`** file.

## Build
- Run **`npm run build`** in your terminal. Webpack will transpile, autoprefix, minify and bundle your css, image, font, and javascript assests in the **`build`** folder.
- In **`index.html`** toggle the commenting from the Development section above.
- Upload/deploy the contents of the **`build`** folder to your site.

## Demo
See a build of the 
[Template](https://callumgrayson.github.io/project-template/).






