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
    'overview.label': 'Overview',

    // admin all courses
    'allCourses.title': 'All Courses',

    // admin add or edit course page
    'adminAddCourse.title': 'Create/Edit Course',
    'classType.label': 'Class Type',
    'topicInput.label': 'Breif about the Topic',
    'adminAddCourse.save.btn': 'Save & Continue',
    'adminAddCourse.liveClass.btn': 'Live Class',
    'classTitle.label': 'Class Title',
    'classDateTime.label': 'Schedule For',
    'preview.btn': 'Preview',

    // add course page
    'addCourse.title': 'Add Course',
    'addCourse.assignTo.label': 'Assign To',
    'courseTitle.label': 'Course Title',
    'courseTitle.helperText': 'A descriptive title which suits the best.',
    'description.label': 'Description',
    'description.helperText': 'Describe the Course shortly.',
    'previewVideo.label': 'Preview Video',
    'liveClass.label': 'Live Class',
    'url.label': 'Url:',
    'topics.label': 'Topics',
    'validUrl.label': 'Enter a valid url',
    'addCourse.submit.btn': 'Submit',
    'addCourse.cancel.btn': 'Cancel',

    // edit course page
    'editCourse.title': 'Edit Course',
    'editCourse.assignTo.label': 'Course Submitted by',
    'editCourse.submit.btn': 'Approve',
    'editCourse.cancel.btn': 'Delete',

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
