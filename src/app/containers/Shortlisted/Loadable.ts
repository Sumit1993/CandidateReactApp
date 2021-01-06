/**
*
* Asynchronously loads the component for Shortlisted
*
*/

import { lazyLoad } from 'utils/loadable';

export const Shortlisted = lazyLoad(() => import('./index'), module => module.Shortlisted);