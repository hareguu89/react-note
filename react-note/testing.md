jest runs our tests
@testing-library/react adds the ability to render react components inside of our test environment
@testing-library/jest-dom allows us to assert that components are in the DOM and have certain text and classes
@testing-library/user-event allows us to interact with rendered components programmatically
@babel/preset-react, @babel/preset-typescript and @babel/preset-env allow us to use ES6 Modules, JSX, and TypeScript in our tests
identity-obj-proxy is helpful when rendering CSS modules so that we can see the original class names instead of obfuscated ones

## What and Why Storybook?

- A development environment and playground for UI components
- Create components independently
- Showcase those components interactively in an isolated development environment
- Ability to view the different components that have already been developed
- View what are the dirrent porps that those developed components accept
- Ability to visually showcase those components to your stake holders for feedback
- Dynamically change porps, accessibility score

## config

```js
.story
 - main.cjs // the configuration file for storybook itself.
 - preview.cjs // for stories that you write.
```
