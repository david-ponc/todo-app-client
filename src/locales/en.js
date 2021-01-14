export default {
  '/': {
    hTitle: 'To do list',
    title: 'Create your daily tasks',
    subtitle: 'Give them a category',
    p: 'Keep your tasks organized',
    links: [
      { name: 'Sign in', path: '/login' }
      // { name: 'Sign up', path: '/join' }
    ],
    navbarButton: { name: 'Sign up', path: '/join' },
    landingButton: 'Get start',
    footer: 'Inspired by',
    localTasks: [
      'Make a design of application',
      'Take out sick',
      'Talk of requirements analytics',
      'Do a to-do list'
    ]
  },
  '/login': {
    hTitle: 'To do list | Sign in',
    links: [
      { name: 'Sign in', path: '/login' }
      // { name: 'Sign up', path: '/join' }
    ],
    navbarButton: { name: 'Sign up', path: '/join' },
    footer: 'Inspired by',
    title: 'Join us and organize your to-do list in a better way',
    p: 'or use email',
    phEmail: 'example@domain.com',
    phPass: 'Password',
    descPass: 'The password must be at least 8 characters long',
    chkRemember: 'Remember credentials',
    submitButton: 'Login',
    fields: [
      { name: 'email', message: 'Email must be in valid format' },
      { name: 'password', message: 'The password must contain at least a capital letter, a number, a special character and a minimum of 8 characters' }
    ],
    finalLink: 'New here? Create your account'
  },
  '/join': {
    hTitle: 'To do list | Sign up',
    links: [
      { name: 'Sign in', path: '/login' }
      // { name: 'Sign up', path: '/join' }
    ],
    navbarButton: { name: 'Sign up', path: '/join' },
    footer: 'Inspired by',
    title: 'Join us and organize your to-do list in a better way',
    subtitle: 'Fill in the requested fields to create your account and use our application.',
    phName: 'Name',
    phSurname: 'Surname',
    phUsername: 'Username',
    phEmail: 'example@domain.com',
    phPass: 'Password',
    descPass: 'The password must be at least 8 characters long',
    phConfirm: 'Confirmation',
    p: 'By registering, you are allowing the use of your data provided to be used in the application',
    submitButton: 'Sign up',
    fields: [
      { name: 'name', message: 'The name must only contain characters and a minimum of 4 characters' },
      { name: 'surname', message: 'The last name must only contain characters and a minimum of 4 characters' },
      { name: 'username', message: 'The username is a combination of characters and periods with a minimum of 3 characters' },
      { name: 'email', message: 'Email must be in valid format' },
      { name: 'password', message: 'The password must contain at least one capital letter, one number, one special character and a minimum of 8 characters' },
      { name: 'confirm', message: 'The confirmation must contain at least one capital letter, one number, one special character and a minimum of 8 characters' }
    ],
    finalLink: 'Already have an account? Sign in',
    successContent: {
      title: 'You have finished your registration successfully',
      subtitle: 'We have sent you an email, to confirm your account',
      p: 'You can now close this tab'
    }
  },
  '/confirm/[token]': {
    hTitle: 'To do list | Confirm account',
    links: [
      { name: 'Sign in', path: '/login' }
      // { name: 'Sign up', path: '/join' }
    ],
    title: '¡You have confirmed your account successfully!',
    p: 'You already have an account in this application',
    linkButton: 'Sign in',
    navbarButton: { name: 'Sign up', path: '/join' },
    footer: 'Inspired by'
  },
  '/dashboard': {
    links: [],
    navbarButton: { name: 'Sign up', path: '/join' },
    footer: 'Inspired by',
    greetings: [
      'Good early morning',
      'Good Morning',
      'Good day',
      'Good evening',
      'Good night'
    ],
    date: 'Today is weekday, month day',
    countTasks: [
      'You have',
      'tasks pending'
    ],
    phTaskCreator: [
      'Write a new task.',
      'to create'
    ],
    p: 'You have not pending tasks'
  }
}
