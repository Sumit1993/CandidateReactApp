import * as React from 'react';
import { render } from '@testing-library/react';

import { Shortlisted } from '..';

const renderComponent = () =>
  render(
        <Shortlisted  />
  );

describe('<Shortlisted />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
