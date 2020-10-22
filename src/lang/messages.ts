type MessageEntry = {
  [key: string]: string;
};

type MessageObject = {
  [key: string]: MessageEntry;
};

const messages: MessageObject = {
  en: {
    // header
    'nonSecureHeader.login.btn': 'Login',
    'nonSecureHeader.signUp.btn': 'Sign Up',

    // home page

    // login page

    // sign up page

    // dashboard page

    // Topics listing page

    // Live classes page

    // Topic details page
  },
};

export default function getMessages(language = 'en') {
  const lowerCaseLang = language.toLocaleLowerCase();
  const searchForLanguage =
    lowerCaseLang === 'en' || 'en-us' || 'en-gb' ? 'en' : language;
  return messages[searchForLanguage] || messages.en;
}
