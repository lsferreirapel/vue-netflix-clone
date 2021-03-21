import { RouteConfig } from 'vue-router';

import { routes as home } from '../views/home';
import { routes as auth } from '../modules/auth';

const routes: Array<RouteConfig> = [
  ...home,
  ...auth,
];

export default routes;
