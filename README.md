# apollo-two-render
Showing the multiple render bug

Try it out:

`yarn install`

`npm run dev`

Notice the `console.log("Rendering App");` inside of the `App` component. You will see this being called twice on each side (see server logs and client logs).