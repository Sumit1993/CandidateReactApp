import * as React from 'react';
import { render } from '@testing-library/react';

import { CandidateCard } from '..';

describe('<CandidateCard  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <CandidateCard
        candidate={{
          Image:
            'https://s3-ap-southeast-1.amazonaws.com/he-public-data/user14b9a23c.png',
          name: 'User1',
          id: '1001',
        }}
      />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
