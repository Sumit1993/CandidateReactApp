/**
 *
 * Rejected
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useInjectReducer } from 'redux-injectors';
import styled from 'styled-components/macro';

import { CandidateCard } from '../../components/CandidateCard';
import { PageWrapper } from '../../components/PageWrapper';
import { selectHome } from '../../../store/candidates/selectors';
import { sliceKey, reducer } from '../../../store/candidates/slice';
import { messages } from './messages';
import { NavBar } from '../../components/NavBar';
import { NotRecordsFound } from '../../components/NotRecordsFound/Loadable';

export function Rejected() {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  const home = useSelector(selectHome);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const getContent = () => (
    <CardsWrapper>
      {home.rejected
        .filter(
          item =>
            item.name.toLowerCase().indexOf(home.searchText.toLowerCase()) >= 0,
        )
        .map(candidate => (
          <CandidateCard key={candidate.id} {...{ candidate }}></CandidateCard>
        ))}
    </CardsWrapper>
  );

  return (
    <>
      <Helmet>
        <title>Rejected</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <NavBar></NavBar>
      <PageWrapper>
        {home.shortlist.length > 0 ? getContent() : <NotRecordsFound />}
      </PageWrapper>
    </>
  );
}

const CardsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;
