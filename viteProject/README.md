# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## How the file works together
### How They Work Together:
- main.jsx: Loads the app into the HTML. <br>
- App.jsx: Defines the UI components. <br>
- index.css: Applies global styles. <br>
- App.css: Styles specific to the App.jsx component.
<br>
In short:

App.jsx: UI logic. <br>
main.jsx: The entry point, linking React to the DOM.<br>
index.css: Global styles.<br>
App.css: Component-specific styles for App.jsx.