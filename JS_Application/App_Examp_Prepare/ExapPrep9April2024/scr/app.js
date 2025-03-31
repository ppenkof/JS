import page from '../node_modules/page/page.mjs';

import tattooCreatePage from './views/create.js';
import tattooDashboardPage from './views/dashboard.js';
import tattooDetailsPage from './views/details.js';
import tattooEditPage from './views/edit.js';
import tattooHomePage from './views/home.js';
import tattooLoginPage from './views/login.js';
import tattooRegisterPage from './views/register.js';
//import tattooSearchPage from './views/search.js';
import tattooNavigation from './middlewares/navigation.js';

page(tattooNavigation);
page('/', tattooHomePage);
page('/register', tattooRegisterPage);
page('/login', tattooLoginPage);

page('/dashboard', tattooDashboardPage);
page('/create', tattooCreatePage);
page('/details/:id', tattooDetailsPage);
page('/edit/:id', tattooEditPage);
//page('/search', tattooSearchPage);

page.start();