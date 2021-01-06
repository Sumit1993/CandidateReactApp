/**
 *
 * Home
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from '../../../store/candidates/slice';
import { selectHome } from '../../../store/candidates/selectors';
import { homeSaga } from '../../../store/candidates/saga';
import { messages } from './messages';
import { homeActions } from '../../../store/candidates/slice';
import { PageWrapper } from '../../components/PageWrapper';
import { CandidateCard } from '../../components/CandidateCard';
import { NavBar } from '../../components/NavBar';
import { NotRecordsFound } from '../../components/NotRecordsFound/Loadable';

interface Props {}

export const Home = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homeSaga });

  const home = useSelector(selectHome);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (home.candidates.length === 0) dispatch(homeActions.loadCandidates());
  }, []);

  const getContent = () => (
    <CardsWrapper>
      {home.candidates
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
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <NavBar></NavBar>
      <PageWrapper>
        {home.candidates.length > 0 ? getContent() : <NotRecordsFound />}
      </PageWrapper>
    </>
  );
});

const CardsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;
