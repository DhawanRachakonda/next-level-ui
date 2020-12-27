type MessageEntry = {
  [key: string]: string;
};

type MessageObject = {
  [key: string]: MessageEntry;
};

const messages: MessageObject = {
  en: {
    // common
    'access.privilege.missing': `You don't have :privilegeName to view this section`,

    // header
    'nonSecureHeader.login.btn': 'Login',
    'nonSecureHeader.signUp.btn': 'Sign Up',
    'overview.label': 'Overview',

    // footer
    'footer.company.label': 'Company',
    'footer.community.label': 'Community',
    'footer.teaching.label': 'Teaching',
    'footer.support.label': 'Support',

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

    // My courses
    'myCourses.heading': 'My Courses',

    // Admin home page
    'upcomingCourses.heading': 'Upcoming Courses',
    'completedCourses.heading': 'Completed Courses',
    'toReview.heading': 'To Review',
    'listofStudents.heading': 'List of New Students',
    'listofEducators.heading': 'List of New Educators',

    // browse subjects page
    'browseSubjects.heading': 'Browse Subjects by Category',
    'browseAllSubjects.label.btn': 'Browse All Courses',

    // home page
    'appAvailabel.label': 'App is Available for free',
    'androidApp.label': 'Andrioid app',
    'iosApp.label': 'IOS app',
    'applyAsTeacher.btn': 'Apply as Teacher',
    'nextLevelTeam.btn': 'Get NextLevel for Team',

    // login page

    // sign up page

    // dashboard page

    // Topics listing page

    // Live classes page
    'liveClasses.heading': 'Live Classes',
    'upcomingClasses.heading': 'Upcoming Classes',

    // Topic details page
  },
};

export default function getMessages(language = 'en') {
  const lowerCaseLang = language.toLocaleLowerCase();
  const searchForLanguage =
    lowerCaseLang === 'en' || 'en-us' || 'en-gb' ? 'en' : language;
  return messages[searchForLanguage] || messages.en;
}
