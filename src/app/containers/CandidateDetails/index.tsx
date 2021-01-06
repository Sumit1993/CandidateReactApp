/**
 *
 * CandidateDetails
 *
 */

import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

import { useInjectReducer } from 'utils/redux-injectors';
import { selectHome } from '../../../store/candidates/selectors';
import { PageWrapper } from '../../components/PageWrapper';
import { messages } from './messages';
import { reducer, sliceKey } from '../../../store/candidates/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { homeActions } from '../../../store/candidates/slice';

interface Props {}

export function CandidateDetails(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const home = useSelector(selectHome);
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const candidate = home.candidates.filter(item => item.id === id)[0];

  return (
    <>
      <PageWrapper>
        <Container>
          <ImgContainer>
            <Img alt={candidate.name} src={candidate.Image} />
          </ImgContainer>
          <DetailsContainer>
            <h4>{candidate.name}</h4>
            <BtnContainer>
              <ActionBtn
                onClick={() => dispatch(homeActions.shortlist(candidate.id))}
              >
                Shortlist
              </ActionBtn>
              <ActionBtn
                onClick={() => dispatch(homeActions.reject(candidate.id))}
              >
                Reject
              </ActionBtn>
            </BtnContainer>
          </DetailsContainer>
        </Container>
      </PageWrapper>
    </>
  );
}

const Container = styled.div`
  margin-top: 2em;
  display: flex;
`;

const ImgContainer = styled.div`
  flex-basis: 33.33%;
`;

const Img = styled.img`
  border: 2px solid grey;
  border-radius: 50%;
  flex-basis: 33.33%;
`;

const DetailsContainer = styled.div`
  flex-basis: 66.66%;
`;

const BtnContainer = styled.div`
  display: flex;
  margin: 1em;
`;

const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: grey;
  margin-right: 20px;
  background: transparent;
  border: 2px solid grey;
  border-radius: 5px;
  height: 3em;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
`;
