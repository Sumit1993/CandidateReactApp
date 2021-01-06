import * as React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer } from '../../../utils/redux-injectors';
import { MenuLink } from '../../components/MenuLink';
import { reducer, sliceKey } from '../../../store/candidates/slice';
import { homeActions } from '../../../store/candidates/slice';

export function NavBar() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const dispatch = useDispatch();

  const [textInput, setInput] = React.useState('');

  React.useEffect(() => {
    dispatch(homeActions.setSearchText(textInput));
  }, [textInput]);

  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <h3>Search Candidates...</h3>
        </NavLeft>
        <NavCenter>
          <Input
            type="text"
            placeholder="Search"
            value={textInput}
            onKeyUp={event =>
              // @ts-ignore
              setInput(event.target.value)
            }
          />
        </NavCenter>
        <NavRight onClick={() => setInput('')}>
          <MenuLink to={'/home'} label={'Home'}></MenuLink>
          <MenuLink to={'/shortlisted'} label={'Shortlisted'}></MenuLink>
          <MenuLink to={'/rejected'} label={'Rejected'}></MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
  );
}

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;

const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;

const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;

  &:active,
  &:focus {
    text-align: left;
  }
`;

const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  justify-content: space-evenly;
  display: flex;
  svg {
    margin-right: 20px;
  }
`;
