import page from '../node_modules/page/page.mjs';

import droneCreatePage from './views/create.js';
import droneDashboardPage from './views/dashboard.js';
import droneDetailsPage from './views/details.js';
import droneEditPage from './views/edit.js';
import droneHomePage from './views/home.js';
import droneLoginPage from './views/login.js';
import droneRegisterPage from './views/register.js';
import droneNavigation from './middlewares/navigation.js';

page(droneNavigation);

page('/', droneHomePage);
page('/register', droneRegisterPage);
page('/login', droneLoginPage);

page('/dashboard', droneDashboardPage);
page('/create', droneCreatePage);
page('/details/:id', droneDetailsPage);
page('/edit/:id', droneEditPage);

page.start();