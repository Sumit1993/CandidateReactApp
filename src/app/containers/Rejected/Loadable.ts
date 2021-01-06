/**
*
* Asynchronously loads the component for Rejected
*
*/

import { lazyLoad } from 'utils/loadable';

export const Rejected = lazyLoad(() => import('./index'), module => module.Rejected);