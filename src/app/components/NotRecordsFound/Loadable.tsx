/**
 * Asynchronously loads the component for NotRecordsFound
 */

import { lazyLoad } from 'utils/loadable';

export const NotRecordsFound = lazyLoad(
  () => import('./index'),
  module => module.NotRecordsFound,
);
