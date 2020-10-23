import React from 'react';
import { FormattedMessage } from 'react-intl';

import NextLevelIntl from './NextLevelIntl';
import { render } from 'tests/TestUtils';

describe('test suit for NextLevelIntl', () => {
  it('should generate snapshot', () => {
    generateSnapshot(
      <NextLevelIntl>
        <div />
      </NextLevelIntl>,
    );
  });

  it('should render messages from messages.json', () => {
    const { getByText } = render(
      <NextLevelIntl>
        <FormattedMessage id="nonSecureHeader.login.btn" />
      </NextLevelIntl>,
    );
    const linkElement = getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
  });
});
