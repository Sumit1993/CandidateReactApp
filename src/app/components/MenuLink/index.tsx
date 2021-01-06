import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

interface Props {
  to: string;
  label: string;
}

export function MenuLink(props: Props) {
  const { to, label } = props;
  return (
    <MenuItem>
      <NavLink
        to={to}
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
      >
        {label}
      </NavLink>
    </MenuItem>
  );
}

const MenuItem = styled.div`
  color: ${p => p.theme.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
`;
