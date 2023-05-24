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
