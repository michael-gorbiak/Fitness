# Gulp

>Gulp 4

## Start

gulp      # Basic command, which launches the build for development, using browser-sync

gulp build      # Command for production build of the project. All assets are compressed and optimized for hosting.

gulp cache      # Command to run after `gulp build` if you need to upload new files to hosting without caching.

gulp backend      # Command for backend build of the project. It excludes unnecessary things from the dev build but is not compressed for backend convenience.

gulp zip      # Command to pack your finished code into a zip archive.


## Структура папок и файлов

```
├── src/                          # Source files
│   ├── js                        # Scripts
│   │   └── main.js               # Main script
│   │   ├── _vars.js              # file with project variables
│   │   ├── _vendor.js            # file with library imports
│   │   ├── _functions.js         # file with ready-made js functions
│   │   ├── _components.js        # file with component imports
│   │   ├── components            # js components
│   │   ├── vendor                # folder for loading local library versions
│   ├── scss                      # Site styles (scss syntax for sass preprocessor)
│   │   └── main.scss             # Main style file
│   │   └── vendor.scss           # File for importing styles of libraries from the vendor folder
│   │   └── _fonts.scss           # File for font imports (you can use mixins)
│   │   └── _mixins.scss          # File for importing mixins from the mixins folder
│   │   └── _vars.scss            # File for writing css or scss variables
│   │   └── _settings.scss        # File for writing global styles
│   │   ├── components            # scss components
│   │   ├── mixins                # folder to save ready-made scss components
│   │   ├── vendor                # folder to store local css styles of libraries
│   ├── partials                  # folder to store html page parts
│   ├── img                       # folder to store images
│   │   ├── svg                   # special folder for converting svg to sprite
│   ├── resources                 # folder to store other assets - php, video files, favicon, etc.
│   │   ├── fonts                 # folder to store fonts in woff2 format
│   └── index.html                # Main html file
└── gulpfile.js                   # Gulp settings file
└── package.json                  # Build settings and installed packages file
└── .editorconfig                 # Code formatting settings file
└── .ecrc                         # editorconfig-checker package settings file (excludes unnecessary folders)
└── .stylelintrc                  # stylelint settings file
└── README.md                     # Build documentation

```

## Оглавление
1. [npm-скрипты](#npm-скрипты)
2. [Работа с html](#работа-с-html)
3. [Работа с CSS](#работа-с-css)
4. [Работа с JavaScript](#работа-с-javascript)
5. [Работа со шрифтами](#работа-со-шрифтами)
6. [Работа с изображениями](#работа-с-изображениями)
7. [Работа с иными ресурсами](#работа-с-иными-ресурсами)
8. [Типограф](#типограф)
9. [Рекомендуемые плагины VS Code](#рекомендуемые-плагины-для-vs-code)
10. [Локальные сниппеты](#локальные-сниппеты)
11. [Готовые модули](#готовые-модули)
12. [Заключение](#заключение)

## Работа с html

Thanks to the __gulp-file-include__ plugin, you can split the html file into different templates, which should be stored in the __partials__ folder. It is convenient to divide an HTML page into sections.

> Для вставки html-частей в главный файл используйте `@include('partials/filename.html')`

If you want to create a multi-page website, copy __index.html__, rename it as you need, and use it.

When you use the `gulp build` command, you will get minified html code in one line for all html files.

## Working with CSS

The assembly uses the __sass__ preprocessor in the __scss__ syntax.

Styles written in __components__ should be included in __main.scss__.
__IMPORTANT:__ Be sure to remove the styles that are written in __main.scss__ for `.page__body`.

To connect third-party css files (libraries) - put them in the __vendor__ folder and include them in the file ___vendor.scss__

If you want to create your own mixin, do it in the __mixins__ folder, and then include it in the ___mixins.scss__ file.

If you want to use scss variables, include ___vars.scss__ also in main.scss or any other place where it is needed, but be sure to remove __:root__.

> To include css files, use the `@import` directive

Two files are created in the final __app/css__ folder: <br> __main.css__ - for page styles, <br> __vendor.css__ - for styles of all libraries used in the project.

When you use the `gulp build` command, you will get minified css code in one line for all css files.

## Working with JavaScript

Webpack is used to build JS code.

It is better to divide JS code into components - small JS files that contain their own implementation, isolated from each other. Place such files in the __components__ folder, and then import them into the ___components.js__ file

The __vars.js__ file should contain basic project variables, such as where elements are located, etc.

There is no need to change anything in the __main.js__ file, it is made simply as a result file.

You can connect third-party libraries via npm, for this there is a file ___vendor.js__. Import connections there.

If some library is not in npm or you just need to include something with a local file, put it in the __vendor__ folder and import it in the same way, but with the path to the file.

When using the `gulp build` command, you will get minified js code in one line for all js files.

## Working with fonts

Because the author does not support IE11; the assembly only supports the __woff2__ format (this means that the font connection mixin uses only this format).

Load the __woff2__ files into the __resources/fonts__ folder and then call the `@font-face` mixin in the ___fonts.scss__ file.

Also, do not forget to include the same fonts in `<link preload>` in html.
## Working with images

Place any images other than __favicon__ in the __img__ folder.

If you need to make an svg sprite, put the svg files needed for the sprite in the __img/svg__ folder. In this case, attributes such as fill, stroke, style will be automatically deleted. Just leave other svg files in the __img__ folder.

When using the `gulp build` command, you will get minified images in the resulting __img__ folder.

The assembly supports __webp__ and __avif__ formats. You can connect them via the `picture` tag. For background you can use regular __jpg__ or __png__, or use `image-set` where possible.

## Working with other resources

Any project resources (assets) that do not have a corresponding folder assigned to them should be stored in the __resources__ folder. These can be video files, php files (such as a form submission file), favicon and others.

## Typographer

To correctly display the text on the page, the typograph plugin was connected, which will automatically add non-breaking spaces and other symbols so that the text is displayed everywhere according to all the rules of the Russian language.

## Recommended plugins for VS Code

I recommend using VS Code, and the assembly implements interaction with this editor. So, when you open a folder with an assembly in VS Code, the editor will offer you previously uninstalled plugins that are suitable for the assembly to work correctly.

The most important of them is __projects snippets__, this plugin “enables” locally written snippets for the build.

## Local snippets

For convenience and speed of development, local snippets were added (located in the .vscode/snippets folder), which work thanks to the plugin described above. All snippets begin with the prefix __g-__. So far, the snippets contain only html (quick creation of navigation, social networks, the correct picture tag with webp and avif, and so on).

Some snippets are closely related to scss mixins, for example the burger button. The __g-burger__ snippet will create your html markup for the burger, and connecting the __@include burger__ mixin will add styles for it, which is extremely convenient.

A full list of snippets with mixin support will be published later.
## Ready modules

Ready-made, frequently used modules for various tasks are gradually added to the assembly. The already added functionality will be listed below.

__Attention!__ The file _functions.js_ describes only the connections of all necessary modules. It is recommended to use all this in separate files. For example, if you need to create a modal window, create a file _modal.js_ in the components folder, connect it to the components.js file and use the connection code in the _modal.js_ file.

### Burger menu

You can very quickly add a working burger to your page, for this you need:

1. Call the `g-burger` snippet in html
2. Add the `data-menu` attribute to your potential menu in html
3. In scss call the `burger` mixin

```
.burger { @include burger }
```

4. Go to the js/_functions.js file and uncomment the line with the inclusion of the burger js file
5. Customize menu display styles for yourself using the `menu--active` class

### Modal window

You can very quickly add a working modal window to your page, for this you need:

1. In html, call the snippet `g-graph-btn`. It will create a button for the modal window, your only task is to fill in the `data-graph-path` attribute
2. Next, call the `g-graph-modal` snippet. It will create the basic window layout. Your task is to make a window according to the layout, fill in the content and be sure to designate the `data-graph-target` attribute with the same value as `data-graph-path`
3. Go to the vendor.scss file and uncomment the line with the connection of the graph-modal.min.css file
4. Go to the js/_functions.js file and uncomment the line with import and connection of the `GraphModal` library

### Scroll control

You can disable/enable scrolling on the page (works even on iPhone). To do this you need:

1. Go to the js/_functions.js file and uncomment the line with the import of the `disableScroll`, `enableScroll` functions.
__Important!__. If there are blocks with fixed positioning on the page (for example, a header), add the `fixed-block` class to it so that this block does not jump when the scroll is disabled.

It is not necessary to use functions specifically in the __functions__ file, do what is convenient for you.

### Tabs

You can very quickly add working tabs to your page, for this you need:

1. In html, call the `g-tabs` snippet. It will create the markup for the tabs, your only task is to fill in the `data-tabs` attribute
2. For the `.tabs` class, call the `tabs` mixin in scss (or use the library script connection from npm in the vendor.scss file)
4. Go to the js/_functions.js file and uncomment the line with import and connection of the `GraphTabs` library

### Validation and sending data by email

You can quickly set up validation and send data by email (currently working in test mode). How to use it:

1. Create a form, specifying its unique class. Also specify unique classes for input fields.
2. Create an array in which the plugin rules <a href="https://github.com/horprogs/Just-validate" target="_blank">just-validate</a> will be passed, for example:
```
const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill name!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Enter correct phone number',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill the phone number!'
      }
    ]
  },
];
```
__IMPORTANT__. If your form has a field with a phone number, be sure to add new fields to the array with the rules: `tel: true, telError: 'Error when entering phone number'`.
3. Connect the `validateForms` function, it is located in _functions.js_, passing three parameters there:
3.1. A string with the form class
3.2. Array of rules
3.3. If necessary, you can create your own function that will be executed after submission, then it will also need to be passed as an argument to the `validateForms` function.

Sample code:
```
import { validateForms } from './functions/validate-forms';
const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill name!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Enter correct phone number',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill the phone number!'
      }
    ]
  },
];

const afterForm = () => {
  console.log('Sent');
};

validateForms('.form-1', rules1, afterForm);
```
### Throttle function

To smooth out the management of frequently used events, you can use the ready-made __throttle__ function. To do this you need:

1. Import the __throttle()__ function in the right place
2. Write the function you need, for example, __func()__
3. Create a variable in which to place the call to your function inside throttle, for example: `let f = throttle(func)`
4. Use this variable as a function in a call, for example: `window.addEventListener('resize', f)`

### Fix fullscreen blocks

It is not uncommon for blocks with a height of 100vh to cause problems in mobile browsers. The ready-made fix-fullheight module will help solve this:

1. Uncomment the line with import of the file __fix-fullheight.js__
2. Assign the height to the block you need not 100vh, but `var(--vh)`

The previously mentioned throttle is used for this function. You can remove it, or change the time inside the __fix-fullheight.js__ file.

### Getting the header height

Sometimes you need to get the exact height of a header if it is made by absolute or fixed positioning, and there is a `getHeaderHeght` function for this. How to use it:

1. Uncomment the line with import of the __header-height.js__ file
2. Use the css variable `--header-height` in the place you need

It is not necessary to use functions specifically in the __functions__ file, do what is convenient for you.

### Custom scroll

To implement custom scrolling, the __simplebar.js__ plugin is installed in the assembly. How to use it:

1. Uncomment the line with import of the __simplebar__ plugin
2. Add a maximum height and a `data-simplebar` attribute to the desired block

### Viewport definition functions

You can run scripts at a specific width (resize support is not yet implemented) using the ready-made functions `isMobile()`, `isTablet()`, `isDesktop()`. To do this, you just need to connect the desired one from the file, and then use `if` inside the condition.

### Tooltips

You can quickly create a working, accessible tooltip, which will also calculate the indentation itself using js. How to use it:

1. In html, call the `g-tooltip` snippet. It will create a button for the modal window, your only task is to fill in the `aria-describedby` and `id` attributes.
2. Next, you need to connect tooltips (code in the _functions.js_ file), and instead of el, pass the id or class of the tooltip button, and instead of tooltip, pass the id or class of the tooltip itself.
3. After this, you can style the tooltip as you wish.

### Slider

You can quickly create a working swiper slider. How to use it:

1. In html, call the `g-swiper` snippet. It will create the basic structure of the swipe slider, you need to add your class for the swipe container.
2. Uncomment the line with styles included in the _vendor.scss_ file
3. Connect the swiper itself (code in the _functions.js_ file) and use it, following the documentation.
### Scroll animations

You can quickly sketch out scrolling animations using the plugin. How to use it:

1. Connect the AOS.js library code (code in the _functions.js_ file) and initialize it.
2. Using attributes from the plugin documentation, call certain animations, or write your own.

### Parallax on scroll

You can quickly sketch out the parallax of scrolling elements using the plugin. How to use it:

1. Connect the rellax.js library code (code in the _functions.js_ file) and initialize it by passing the class of the element(s).
2. Set this class to the necessary elements, and also use attributes from the documentation to customize animations.

### Smooth scrolling to anchors

You can make smooth scrolling to anchors that even works in Safari using a plugin. How to use it:

1. Connect the smooth-scroll.js library code (code in the _functions.js_ file) and initialize it by passing the selector of all anchor links.
2. Give all anchor links the `data-scroll` attribute.

### Swipes on mobile devices

You can implement various interactions with the page via swipes on mobile devices using the plugin. How to use it:

1. Connect the swiped-events.js library code (code in the _functions.js_ file).
2. Use various events from the plugin library.

### Mixin for Flex-layout (test version)

In the latest version of the build, I added a flex-layout mixin (can be found in the mixins folder), which implements a typical grid for cards. You can choose the settings you need to make a mesh quickly and without problems. For example:

```

<div class="cards">
  <div class="cards__item">Текст</div>
  <div class="cards__item">Текст</div>
  <div class="cards__item">Текст</div>
  <div class="cards__item">Текст</div>
  <div class="cards__item">Текст</div>
  <div class="cards__item">Текст</div>
</div>

$options: (
  parentClass: "cards",
  itemsClass: "cards__item",
  desktopGap: 30px,
  desktopElems: 3,
  tablet: "1024px",
  tabletElems: 2,
  tabletGap:  30px,
  mobile: "600px",
  mobileElems: 1,
  mobileGap: 20px
);

@include flex-layout($options);

```
In the options, you can select the parent class (or a flex container, a class for descendants, what indentation they will have, at what resolutions the number of elements will change).
For now, the mixin is in test form, I’ll see how it performs. Offer your options on how this can be improved, made more flexible, etc.

## Conclusion

Thanks to everyone who uses the build! If you notice any error, please send an issue with a detailed description of the problem, I will look at everything and try to solve it. Thank you!
