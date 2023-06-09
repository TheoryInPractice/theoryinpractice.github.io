# Developer's Guide for TiP

## Technologies

Theory in Practice WWW is built on [Angular](https://angularjs.org/) v1.6.2. The main purpose behind
choosing Angular is to fulfill the requirement of having a website which can be hosted over an http
server (i.e. NCSU weblocker) while being able to update site content without editing html.

[Bower](https://bower.io/) is used to manage dependencies, and are stored in `bower_components`.

## Why Is `bower_components` Committed?

In most situations it is never recommended to commit a dependency directory. Instead, projects
should be built by running install during deployment. `bower_components` is committed to
TiP.www due to a limitation of NCSU's weblocker. Users do not have permissions to install and
run tools like `bower`, and building on a remote machine and deploying via sftp is overly
complicated for our use case.

## Why Not Use Angular v2 + Yarn + Webpack?

Simplicity. Angular v2 is written in typescript, and Yarn works with Node modules. Using these
in a front-end environment, while it is quickly becoming the norm, requires an extra compilation
and build step for future maintainers. The purpose of rewriting TiP.www is easing maintenance
tasks, and flat javascript files do not require additional configuration.

## How Do I Run Locally?

TiP.www makes XmlHttpRequests to dynamically load resources from the server as they are requested.
Most browsers will not allow requests using the `file://` protocol when running a local html file.
There are two ways around this.

1. Override the browser settings to allow the file protocol
2. Serve TiP.www using a development http server.

The second option is the preferred method. There are several ways to achieve this.

1. [http-server](https://www.npmjs.com/package/http-server). Install with
   `npm install -g http-server`. Then run `http-server` from the TiP.www directory.
2. Use an IDE like [IntelliJ](https://www.jetbrains.com/idea/), which has built in support for
   Angular and comes with an http server. Licenses for the Ultimate edition are free with an NCSU
   email through their education pricing. To run TiP.www from IntelliJ, right click on index.html
   and select `Open in Browser`.
3. Atom.io [express server](https://atom.io/packages/local-server-express). Once installed,
   activate `cmd+shift+p` or `ctrl+shift-p`, depending on platform, and search for express.
   Select `Local Server Express: Run`.

## Content Files

All content files are located in `src/contents/**/*.yml`. The [YAML](http://yaml.org/) standard
was chosen for readability. The following sections describe the structure of each file and
any associated objects.


### About

Located at `src/contents/about/about.yml`.

```yaml
About:
  type: object
  description: |
    This object contains all information about the principal investigator found on the
    About view.
  properties:
    overview:
      type: object
      description: An introduction to the principal investigator
      schema: markdownAndImageObject
    researchInterests:
      type: object
      description: All research interests of the principal investigator
      schema: markdownObject
    teaching:
      type: object
      description: The teaching history of the principal investigator
      schema: markdownAndImageObject
    service:
      type: object
      description: The service history of the principal investigator
      schema: markdownAndImageObject
    awards:
      type: object
      description: Awards given to the principal investigator
      schema: markdownAndImageObject
    funding:
      type: object
      description: Funding received by the principal investigator
      schema: markdownObject
    talks:
      type: object
      description: Talks given by the principal investigator
      schema: markdownObject
```

### Events

Located at `src/contents/events/events.yml`.

```yaml
Events:
  type: array
  description: |
    This array contains a list of all events that Theory in Practice has hosted, participated
    in, or wants the world to know about.
  items:
    type: object
    description: An event item that describes event information
    properties:
      start:
        description: The date which the event occurs on
        schema: date
      end:
        description: An optional end date for events which last more than one day
        schema: date
      image:
        description: Event image
        schema: image
      markdown:
        description: A description of the event
        schema: markdown
```

### Home

Located at `src/contents/home/home.yml`.

```yaml
Home:
  type: object
  description: |
    This object describes the content that is unique to the home page.
  properties:
    groupInfo:
      type: object
      description: Genral information about Theory in Practice
      schema: markdownAndImageObject
    featuredContent:
      type: array
      description: A list of content items to be displayed under the group information
      items:
        properties:
          header:
            type: string
            description: A short title for the content item panel
          image:
            description: Image for the content item
            schema: image
          link:
            description: Link the user can follow to learn more
            schema: link
          markdown:
            description: Body text for the content item
            schema: markdown
```

### News

Located at `src/contents/news/news.yml`.

```yaml
News:
  type: array
  description: List of news items
  items:
    properties:
      posted:
        description: Date the news item was posted
        schema: date
      image:
        description: Image for the news item
        schema: image
      featured:
        type: boolean
        description: If the news item should be featured on the home page
      markdown:
        description: A description of the news item
        schema: mardown
```

### Join

Located at `src/contents/people/join.yml`.

```yaml
Join:
  type: object
  description: This object describes the join text located at People page
  schema: markdownObject
```

### People

Located at `src/contents/people/people.yml`.

```yaml
People:
  type: object
  description: This object describes the members of Theory in Practice
  properties:
    principal:
      description: The lab's principal investigator
      schema: person
    postDocs:
      type: array
      description: A list of post docs working with Theory in Practice
      items:
        schema: person
    phdStudents:
      type: array
      description: A list of phd students working with Theory in Practice
      items:
        schema: person
    undergraduates:
      type: array
      description: A list of undergraduates working with Theory in Practice
      items:
        schema: person
    alumni:
      type: array
      description: a list of people who have previously worked with Theory in Practice
      items:
        schema: person
```

### Publications

Located at `src/contents/publications/publications.yml`.

```yaml
Publications:
  type: array
  description: |
    This array describes all publications which live on the publications page,
    grouped by year
  items:
    type: object
    properties:
      year:
        type: string
        description: The year(s) of publication
      publications:
        type: array
        description: A list of all publications within this time period
        items:
          description: A description of the publication
          schema: markdownObject
```

### Software

Located at `src/contents/software/software.yml`.

```yaml
Software:
  type: array
  description: This array describes all software items produced by Theory in Practice
  items:
    type: object
    description: A software item
    properties:
      image:
        description: An image for the software package
        schema: image
      name:
        type: string
        description: The name of the software package
      shortDescription:
        type: string
        description: A one line description of the software package
      fullDescription:
        description: A full description of the software package
        schema: markdownObject
      link:
        description: A link to a software repo for the package
        schema: link
      featured:
        type: boolean
        description: If the software package should be given prominent display as a featured item
```

### Date

```yaml
date:
  type: string
  description: A date in the format MMMM dd, yyyy (ex August 1, 2000)
```

### image

```yaml
image:
  type: string
  description: A file path to an image file relative to the project root
```

### link

```yaml
link:
  type: object
  description: An object which links to an internal or external page
  properties:
    oneOf:
      state:
        type: string
        description: The name of a page within Theory in Practice
      href:
        type: string
        description: A fully qualified url
```

### markdown

```yaml
markdown:
  type: string
  description: A string formatted in Github Flavored Markdown
```

### markdownAndImageObject

```yaml
markdownAndImageObject:
  type: object
  description: An object holding markdown content and an image path
  properties:
    image:
      schema: image
    markdown:
      schema: markdown
```

### markdownObject

```yaml
markdownObject:
  type: object
  description: An object wrapper containing a markdown field
  properties:
    markdown:
      schema: markdown
```

### person

```yaml
person:
  type: object
  description: A summary of a person
  properties:
    image:
      description: A picture of this person
      schema: image
    name:
      type: string
      description: The person's name
    email:
      type: string
      description: The person's email
    about:
      description: An optional link to this person's website.
      schema: link
    markdown:
      description: A description of the person
      schema: markdown
```

## Index.html

Index is the root html page for Theory in Practice. It declares all css and script tags that get loaded and
serves as a common declaration for the header, department info, and copyright. Angular injects the templates
for each of the views into the `<ui-view></ui-view>` directive located on the index page.

## App.js

App is the declaration for the Theory in Practice Angular module. It configures ui-router with each of the
states, which represent pages internal to the site. It also configures Showdown, the markdown provider, to
use GitHub Flavored Markdown (GFM).

## Templates

Templates are located at `src/templates`. Each template describes the content of a state that will be
injected into `<ui-view></ui-view>` on the index page when the view is activated.

## Controllers

Controllers are located in `src/js/controllers` and map 1:1 to Theory in Practice pages. Each controller
declares a set of dependencies that are injected by Angular or resolved by ui-router. Included in
this list are the content files which need to be loaded from the server so that the contents can
be displayed on the page.

## Directives

Directives are located in `src/js/directives`. Each directive represents a snippet of html that can be
reused in various locations. For example, the `<markdown></markdown>` directive is used wherever there
is markdown text that needs to be rendered into html.

## Common Angular Problems

_**I've added <directive|controller|angular-component>, but it doesn't run**_

Verify that the script file is loaded in `index.html` with a script tag. I.E.
`<script src="path/to/file"></script>`. A script will never run if it is not loaded.

_**I want to link to a TiP page from markdown content, but there's only one html page**_

Ui-Router determines which page to show based on the current state of the application. In most cases,
the state is resolved from the url. For example, the state `#!/` resolves to `index` and `#!/people`
resolves to `people`.

GFM compiles links of the format `[link text](link address)` into the html anchor tag
`<a href="link address">link text</a>`. You _can_ insert a link to a page with `[link text](#!/state)`.
However, this is not recommended. In the event that a state's url is changed, the link will break. It
is safer to use the `<a ui-sref="state">link text</a>` directive to directly link to a state by name.
The directive will be compiled by angular into a proper link before being placed on the page.

## Other Common Problems

_**I tried to push to the development deployment, but it was rejected**_

Git rejects a push if your branch is behind what the remote repo already has. If you can, do a git pull
to update. If that doesn't work, or isn't feasible, then you can overwrite the remote repo with
`git push <remote> +development`. WARNING! This is dangerous. It will overwrite the remote branch.
This is acceptable for a development server someone else may have worked with, but do not run it on
`origin`.

## Updating Site Content - Process and Workflow

To update site content, edit the appropriate content file and submit a pull request. The updated content
will be pushed to NCSU's weblocker.

Pushing code to shrubbery can be done with git.

```
git remote add shrubbery <username>@shrubbery.csc.ncsu.edu:/tipwww/tipwww.git
git push shrubbery development
```

### Example

Let's say we want to update the lab description on the home page. The current description is good, but
we think we can do better. We're going to update it to say `Theory in Practice is the best research lab.`

1. Ask for permissions to view the TiP.www repo
2. Fork the repo to create your own copy and clone
3. Open the file `src/contents/home/home.yml`
4. Replace the contents of `Home.groupInfo.markdown` with the new text
5. Launch TiP.www locally to verify the change
6. Commit, push, and open a pull request back to TiP.www
7. The pull request will be approved, and updates pushed to NCSU's weblocker

## Adding Site Pages

Adding a new page takes a few extra steps with Angular. 

1. Create the html template and any content files
2. Create the Angular controller
3. Add the controller to `index.html`
4. Add the page to `app.js`

### Example

Let's say we want to add a page called NEW. The first step is to create the html template `src/templates/NEW.html`.
We'll just add a header for now.
```html
<h1>{{ content.title }}</h1>
```

We're also going to create a content file `src/contents/NEW/NEW.yml` with
```yaml
title: NEW PAGE
```

Next, define an angular controller for the view in `src/js/controllers/NEW-controller.js`.
```js
angular.module('theory-in-practice')
    .controller('NEWController', ['$scope', 'content', function($scope, content) {
        $scope.content = content;
    }]);
```

A little bit about what's going on when defining a controller. `angular.module()` is being called to request the
`theory-in-practice` module registered with angular. This module is declared in `app.js` and defines global
configuration. `.controller` registers a controller with `theory-in-practice` called `NEWController`. The second
argument to `.controller` is the controller itself, a javascript function. This controller declares that it takes
two parameters, `$scope` and `content`. Angular will perform auto-injection when the controller is activated to
make both available. `$scope.content = content` attaches the content variable to scope, this is how it is provided
to the template in `{{ content.title }}`.

The web browser will not load the controller file unless told to do so, so we're going to tell it to in `index.html`
under the heading `<!-- Controllers -->`.
```html
<script src="src/js/controllers/NEW-controller.js"></script>
```

Now that the pieces are in place, we'll tell Angular to create a new page using this template/controller. In `app.js`,
add the following to the config block.
```js
// NEW Page
$stateProvider.state('NEW', {
    url: '/new',
    templateUrl: 'src/templates/NEW.html',
    controller: 'NEWController',
    resolve: {
        content: resolveResource('src/contents/NEW.yml')
    }
});
```

The `resolve` block is how our YAML files are being provided to the controller. It declares a resource name and a
function that will be used to return the resource. In this case, the helper function `resolveResource` abstracts
the loading process.

If testing locally, `localhost:<port>#!/new` now displays the newly created page.