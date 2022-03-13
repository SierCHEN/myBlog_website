import Home from '../pages/Home';
import Writing from '../pages/Writing';
import ArticlePage from '../pages/ArticlePage';
import AuthPage from '../pages/AuthPage';

export default {
    path: '',
    name: 'home',
    childRoutes: [
        { path: '', component: Home },
        { path: 'write', component: Writing },
        { path: 'article/:id', component: ArticlePage },
        { path: 'auth', component: AuthPage },
    ]
}

// childRoutes: [
//     { path: '', component: lazy(() => import('../pages/Home')) },
//     { path: 'write', component: lazy(() => import('../pages/Writing')) },
//     { path: 'article/:id', component: lazy(() => import('../pages/ArticlePage')) },
// ]