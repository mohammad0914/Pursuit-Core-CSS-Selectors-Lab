[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

# CSS Selectors Lab

## Getting Started

- Fork this repo
- Clone the forked repository
- `cd` to the directory where you cloned it
- `npm install` to install dependencies
- `npm test` to open the cypress window

> _Note_: Remember to `git add`, `git commit` and `git push` regularly

## Submission Guidelines

- When finished, commit and push your work.
- Make a pull request on github.`
- Submit the link to your pull request on Canvas.

This repo has an `about.html` file inside of it, as well as a `styles.css` file. Edit the HTML and CSS files to implement the changes below.

<details>
<summary>HTML</summary>

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>CSS Intro</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Your Name Here</h1>
    <div>
      <p>
        This is a bunch of information about myself. I'm from here and there and
        discovered my love of programming when this happened. When I'm not
        working I'm busy doing this and that.
      </p>
    </div>

    <img
      src="https://www.breakthrough-pt.com/wp-content/uploads/2014/11/female-default-profile-photo.png"
      alt=""
    />

    <div>
      <h2>Here are some of my Skills!</h2>

      <h3>Languages</h3>
      <ul>
        <li>JavaScript</li>
        <li>SQL</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </ul>

      <h3>Libraries</h3>
      <ol>
        <li>React</li>
        <li>PostgreSQL</li>
        <li>Node</li>
        <li>Bootstrap</li>
      </ol>
    </div>

    <div>
      <h2>Hardest Bug So Far</h2>
      <p>
        My hardest bug I ever came across was this infinite loop I couldn't
        escape.
      </p>
      <p>I came up with a totally sick solution though by doing ...</p>
    </div>

    <h2>Contact Me</h2>
    <div>
      Email me at:
      <a href="mailto:hello@pursuit.org" target="_top">hello@pursuit.org</a>
    </div>

    <ul>
      <li><a href="https://github.com">github link</a></li>
      <li><a href="https://linkedin.com">LinkedIn link</a></li>
      <li><a href="https://angellist.com">Angel list link</a></li>
      <li><a href="https://pursuit.org">Pursuit link</a></li>
    </ul>

    <form action="index.html" method="post">
      <input type="text" name="" value="" />
      <input type="submit" name="submit" value="submit" />
    </form>
  </body>
</html>
```

</details>

![styledpage](./styled_page.png)

## CSS changes:

- Assign a class named `important` to all header tags and make them all underlined and bold.
- Give the h2 header with the text "Here are some of my Skills!" a unique id `skills-header` and make turn it RebeccaPurple in color.
- All links that end in .com should be the color green after the link is visited.
- Give the unordered list of links a class name of `links-list` and make it have a 🌐 symbol (`https://github.githubassets.com/images/icons/emoji/unicode/1f310.png`) as a bullet point.
- In all ordered lists change only the last child element to be bold.
- Give <a> elements with an href ending ".com" a hover effect of turning red.
- Give all other <a> elements with an href a hover effect of turning orange.
- Center all text inside the body.
- Give your languages unordered list an id of `language-list`, and change its font to be in italics.
- Make the second p tag in the div have the a background-color of rgba(0,0,0,.5).

## Extra problems from w3school

### Combinators

- https://www.w3schools.com/css/exercise.asp?filename=exercise_combinators1
- https://www.w3schools.com/css/exercise.asp?filename=exercise_combinators2
- https://www.w3schools.com/css/exercise.asp?filename=exercise_combinators3
- https://www.w3schools.com/css/exercise.asp?filename=exercise_combinators4

### Pseudo-classes

- https://www.w3schools.com/css/exercise.asp?filename=exercise_pseudo_classes1
- https://www.w3schools.com/css/exercise.asp?filename=exercise_pseudo_classes2
- https://www.w3schools.com/css/exercise.asp?filename=exercise_pseudo_classes3
- https://www.w3schools.com/css/exercise.asp?filename=exercise_pseudo_classes4

### Pseudo-elements

- https://www.w3schools.com/css/exercise.asp?filename=exercise_pseudo_elements1
- https://www.w3schools.com/css/exercise.asp?filename=exercise_pseudo_elements2
- https://www.w3schools.com/css/exercise.asp?filename=exercise_pseudo_elements3
