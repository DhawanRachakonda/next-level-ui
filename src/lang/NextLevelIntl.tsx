import React from 'react';

// intl
import { IntlProvider } from 'react-intl';

///////////////////////////// Local imports /////////////////////////////

// messages
import getMessages from 'lang/messages';

interface INextLevelIntlProviderProps {
  children: React.ReactNode;
}

function NextLevelIntlProvider({ children }: INextLevelIntlProviderProps) {
  return (
    <IntlProvider
      locale={navigator.language}
      messages={getMessages(navigator.language)}
      defaultLocale="en">
      {children}
    </IntlProvider>
  );
}

export default NextLevelIntlProvider;
