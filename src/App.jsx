import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./pages/layout/Layout";
import ResumeBuilder from "./components/resume-builder/ResumeBuilder";
import Resume from "./pages/resume/Resume";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Resume />,
            },
            {
                path: "/watch",
                element: <ResumeBuilder />,
            },
            {
                path: "/*",
                element: <>Not found</>,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
