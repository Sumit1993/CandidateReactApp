/**
 *
 * CandidateCard
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { messages } from './messages';
import { useInjectReducer } from 'utils/redux-injectors';
import { reducer, sliceKey } from '../../../store/candidates/slice';
import { Candidate } from '../../../store/candidates/types';
import { homeActions } from '../../../store/candidates/slice';

interface Props {
  candidate: Candidate;
}

export function CandidateCard(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  let history = useHistory();

  return (
    <CardContainer>
      <CardImgContainer>
        <Img src={props.candidate.Image} />
      </CardImgContainer>
      <CardBody>{props.candidate.name}</CardBody>
      <Meta>
        <BtnContainer>
          <ActionBtn
            onClick={() => dispatch(homeActions.shortlist(props.candidate.id))}
          >
            Shortlist
          </ActionBtn>
          <ActionBtn
            onClick={() => dispatch(homeActions.reject(props.candidate.id))}
          >
            Reject
          </ActionBtn>
        </BtnContainer>
        <BtnContainer>
          <ActionBtn
            onClick={() => history.push(`/candidate/${props.candidate.id}`)}
          >
            View
          </ActionBtn>
        </BtnContainer>
      </Meta>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-basis: 100%;
  flex-basis: calc(33.333% - 20px);
  margin: 10px;
  cursor: pointer;
  transition: 0.5s all ease-in;
  max-height: 20em;
  min-height: 20em;
`;

const CardImgContainer = styled.div`
  flex: 0.8;
  overflow: hidden;
`;

const CardBody = styled.div`
  flex: 1;
  text-align: center;
`;

const BtnContainer = styled.div`
  display: flex;
  margin: 1em;
`;

const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-right: 20px;
  background: transparent;
  border: 2px solid white;
  border-radius: 5px;
  height: 3em;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
`;

const Meta = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  ${CardContainer}:hover & {
    display: flex !important;
    flex-direction: column;
  }
`;

const Img = styled.img`
  cursor: pointer;
  width: 100%;
`;
