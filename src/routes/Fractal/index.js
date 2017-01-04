import { formRouteWithReducer } from 'store/reducers';

import Fractal from './component';
import { fractal } from './reducer';

import SubRoute from './SubRoute';

export const fractalRouteCreator = (store) => ([
  formRouteWithReducer(store)({ path: 'fractal', Component: Fractal, reducer: fractal }),
  { path: 'fractal/subroute', component: SubRoute }
]);

export default fractalRouteCreator;
