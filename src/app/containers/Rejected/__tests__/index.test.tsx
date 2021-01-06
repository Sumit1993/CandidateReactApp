import * as React from 'react';
import { render } from '@testing-library/react';

import { Rejected } from '..';

const renderComponent = () =>
  render(
        <Rejected  />
  );

describe('<Rejected />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
