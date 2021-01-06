import * as React from 'react';
import { render } from '@testing-library/react';

import { CandidateDetails } from '..';

const renderComponent = () =>
  render(
        <CandidateDetails  />
  );

describe('<CandidateDetails />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
