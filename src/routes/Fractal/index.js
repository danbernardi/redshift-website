import { formRouteWithReducer } from 'store/reducers';

import Fractal from './component';
import { fractal } from './reducer';

import SubComponent from './SubComponent';

export const fractalRouteCreator = (store) => ([
  formRouteWithReducer(store)({ path: 'fractal', Component: Fractal, reducer: fractal }),
  { path: 'fractal/subroute', component: SubComponent }
]);

export default fractalRouteCreator;
