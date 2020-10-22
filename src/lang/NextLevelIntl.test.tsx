import React from 'react';

import NextLevelIntl from './NextLevelIntl';

describe('test suit for NextLevelIntl', () => {
  it('should generate snapshot', () => {
    generateSnapShot(
      <NextLevelIntl>
        <div />
      </NextLevelIntl>,
    );
  });
});
