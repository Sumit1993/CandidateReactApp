/**
 *
 * Shortlisted
 *
 */

import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { useInjectReducer } from 'utils/redux-injectors';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';

import { messages } from './messages';
import { reducer, sliceKey } from '../../../store/candidates/slice';
import { CandidateCard } from '../../components/CandidateCard';
import { PageWrapper } from '../../components/PageWrapper';
import { selectHome } from '../../../store/candidates/selectors';

export function Shortlisted() {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  const home = useSelector(selectHome);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Shortlisted</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <PageWrapper>
        <CardsWrapper>
          {home.shortlist
            .filter(
              item =>
                item.name
                  .toLowerCase()
                  .indexOf(home.searchText.toLowerCase()) >= 0,
            )
            .map(candidate => (
              <CandidateCard
                key={candidate.id}
                {...{ candidate }}
              ></CandidateCard>
            ))}
        </CardsWrapper>
      </PageWrapper>
    </>
  );
}

const CardsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;
