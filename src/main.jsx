import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ConferenceQASystem from "./components/ConferenceQASystem.jsx";
import App from "./App.jsx";
import Apps from "./Apps.jsx";
import Changes from "./Changes.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ModeratorView from "./components/ModeratorView.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import ConferenceQASystems from "./components/QuestionBox.jsx";
import TopicQuestions from "./components/QuestionBox.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <App /> */}
//     {/* <ConferenceQASystem /> */}
//     <ModeratorView />

//     {/* <Apps /> */}
//     {/* <Changes /> */}
//   </StrictMode>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/conferenceQASystem/",
    element: <ConferenceQASystem />,
  },
  {
    path: "/moderatorView/",
    element: <ModeratorView />,
  },
  {
    path: "/topicQuestion/",
    element: <TopicQuestions />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
