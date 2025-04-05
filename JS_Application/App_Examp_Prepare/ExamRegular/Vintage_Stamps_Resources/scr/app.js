import page from '../node_modules/page/page.mjs';

import stampCreatePage from './views/create.js';
import stampDashboardPage from './views/dashboard.js';
import stampDetailsPage from './views/details.js';
import stampEditPage from './views/edit.js';
import stampHomePage from './views/home.js';
import stampLoginPage from './views/login.js';
import stampRegisterPage from './views/register.js';
import stampNavigation from './middlewares/navigation.js';

page(stampNavigation);
page('/', stampHomePage);
page('/register', stampRegisterPage);
page('/login', stampLoginPage);

page('/dashboard', stampDashboardPage);
page('/create', stampCreatePage);
page('/details/:id', stampDetailsPage);
page('/edit/:id', stampEditPage);

page.start();