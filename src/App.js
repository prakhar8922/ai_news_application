import React, { useEffect } from "react";
// Import the 'alanBtn' function from the "@alan-ai/alan-sdk-web" package.
import alanBtn from "@alan-ai/alan-sdk-web";
// Define the API key for Alan AI. This key is used to authenticate and interact with the Alan AI service.
const alanKey =
  "a1dd3ceefd30ba292496f1daf1bdbd482e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  // The useEffect hook is a fundamental part of React's hooks API, and it's used to manage side effects in functional components. Side effects in React refer to actions that are performed in response to changes in the component's state, props, or the overall environment. These effects might include things like data fetching, DOM manipulation, subscriptions, and more.

  // useEffect takes two arguments:

  // The first argument is a function that contains the code to be executed as the side effect.
  // The second argument is an optional dependency array that specifies when the effect should run. If this array is not provided, the effect will run after every render. If it's an empty array ([]), the effect will only run after the initial render.
  useEffect(() => {
    // Initialize the Alan AI voice assistant using the 'alanBtn' function.
    alanBtn({
      // Provide the Alan AI API key.
      key: alanKey,
      // Set up a callback function to handle commands received from Alan AI.
      onCommand: ({ command }) => {
        // Check if the received command is "testcommand".
        if (command === "testcommand") {
          // If the command is "testcommand", show an alert.
          alert("This code was executed");
        }
      },
    });
  }, []); // The empty dependency array [] means this effect runs only once after the initial render.
  return (
    <div>
      <h1>Alan news AI Application</h1>
    </div>
  );
};

export default App;
