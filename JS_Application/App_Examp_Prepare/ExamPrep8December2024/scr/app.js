import page from '../node_modules/page/page.mjs';

import solutionCreatePage from './views/create.js';
import solutionDashboardPage from './views/dashboard.js';
import solutionDetailsPage from './views/details.js';
import solutionEditPage from './views/edit.js';
import solutionHomePage from './views/home.js';
import solutionLoginPage from './views/login.js';
import solutionRegisterPage from './views/register.js';
//import solutionSearchPage from './views/search.js';
import solutionNavigation from './middlewares/navigation.js';

page(solutionNavigation);
page('/', solutionHomePage);
page('/register', solutionRegisterPage);
page('/login', solutionLoginPage);

page('/dashboard', solutionDashboardPage);
page('/create', solutionCreatePage);
page('/details/:id', solutionDetailsPage);
page('/edit/:id', solutionEditPage);
//page('/search', solutionSearchPage);

page.start();