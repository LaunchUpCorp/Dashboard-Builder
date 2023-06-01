# Dashboard-Builder

Dashboard Builder is an open-source project that allows you to upload a csv file and customize your own dashboard with various data charts, bars, and graphs displaying your data.
This repository is the Front End of the website, it leverages Vue 3, Pinia, TypeScript, and Tailwindcss.

## Getting Started

Ensure `NodeJs` is installed.
In the project directory, run the command:

### `npm run dev`

Runs the app in development mode.
Open <http://127.0.0.1:5173/>

The page will reload when you make changes.

You may also see any lint errors in the console.

## Folder Structure

The following is a high level overview of relevant files and folders. Note: You might not need all of the filea and folders listed below.

### `src`

Contains all the source code.

### `src/components`

Contains all the components used in the application. Each component has its own folder with the following files:

- `index.vue` - Contains the component code.
- any other files that are required by the component.

**example of component folder structure**

> src
> ├── components
> │ ├── Button
> │ │ └── index.vue
> │ ├── Card
> │ │ ├── index.vue
> │ │ ├── CardImageContainer.vue
> │ │ ├── CardBody.vue
> │ │ └── CardFooter.vue
> │ └── ...

### `src/pages`

Contains all the pages used in the application. Each page has its own folder with the following file:

- `index.vue` - Contains the page code.

### `src/utils`

Contains all the utility functions used in the application.

### `src/assets`

Contains all the static assets used in the application, such as images, fonts, etc. Should be separated into subfolders based on the type of asset and the groupings that make sense for the application. For example, if the application has a lot of images for backgrounds, they can be grouped into a `backgrounds` folder.

## Semantic Commit Messages

All commit messages and PR titles need to follow Conventional Commits semantics.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

### Example

> feat: add hat wobble
> ^--^ ^------------^
> | |
> | +-> Summary in present tense.
> |
> +-------> Type: chore, docs, feat, fix, refactor, style, or test.

#### More Examples

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)
