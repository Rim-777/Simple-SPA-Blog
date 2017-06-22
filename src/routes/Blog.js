import Mailayout from '../components/layouts/MainLayout'
import BlogPage from '../components/containers/BlogPage'

const Index = {
    path: '/',
    component: BlogPage

};


export default {
    component: Mailayout,
    childRoutes: [
        Index
    ]
}