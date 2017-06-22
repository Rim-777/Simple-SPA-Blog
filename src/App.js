import React from 'react';
import BlogPage from './components/containers/BlogPage';
import MainLayout from 'components/layouts/MainLayout'
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
    <MainLayout>
        <BlogPage />
    </MainLayout>
    </BrowserRouter>
);

export default App;
