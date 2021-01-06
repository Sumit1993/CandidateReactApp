/**
*
* Asynchronously loads the component for CandidateCard
*
*/

import { lazyLoad } from 'utils/loadable';

export const CandidateCard = lazyLoad(() => import('./index'), module => module.CandidateCard);