import React from 'react';
import { IntlProvider } from 'react-intl';
import messages from '@i18n/strings';
import { connectAutoDispatch } from '@utils/connectAutoDispatch';
import PropTypes from 'prop-types';

export function LanguageProvider({ locale, children }) {
  console.log(locale);
  return (
    <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
      {React.Children.only(children)}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  locale: PropTypes.string
};

export default connectAutoDispatch(
  ({ appState }) => ({
    locale: appState.locale
  }),
  {}
)(LanguageProvider);
