import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Home } from './pages';
import Form from './pages/Form/Form';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/add",
        element: <Form />,
    },
    {
        path: "/:id/edit",
        element: <Form />,
    },
  ]);