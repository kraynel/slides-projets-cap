# Slides "Projets chez Capgemini"

Slides sur Github Pages : http://kraynel.github.io/slides-projets-cap

## Boilerplate reveal.js

### How to use with git and deploy to Github Pages

When you clone this repo, every git information will be downloaded to. So, you have to remove all my git stuff to create yours.

```sh
# Inside of your project runs to remove git folder.
rm -Rf .git
```

Next, initialize your git repository:

```sh
# init the repo
git init
```

Commit all files:

```sh
# add all files to commit
git add .
# create a commit
git commit -m "Initial commit"
```

The first deploy needs to be manual:

```sh
# creates a gh-pages branch
git checkout -b gh-pages

# push and track the gh-pages branch
git push --set-upstream origin gh-pages
```

To do next deploys, you just have to run with gulp:

```sh
# will create a .publish folder with build content
# and push to gh-pages branch.
gulp deploy-pages
```

### Tasks

- `gulp`: Initialize watch for changes and a server(localhost:3000)
- `gulp js`: execute js files
- `gulp notes`: copy speaker notes
- `gulp stylus`: compile stylus files
- `gulp watch`: call for watch files
- `gulp jade`: compile jade files
- `gulp deploy-pages`: deploy compiled files at `build` to `github` on branch `gh-pages`.
