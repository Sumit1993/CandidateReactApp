/**
*
* Asynchronously loads the component for CandidateDetails
*
*/

import { lazyLoad } from 'utils/loadable';

export const CandidateDetails = lazyLoad(() => import('./index'), module => module.CandidateDetails);