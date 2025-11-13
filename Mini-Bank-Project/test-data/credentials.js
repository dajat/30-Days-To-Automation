//stores variables like credentials and URLs separately, keeping your code clean.
export const urls = {
    home: 'https://mini-bank.testamplify.com/',
    login: 'https://mini-bank.testamplify.com/login', 
    dashboard: 'https://mini-bank.testamplify.com/dashboard',
};

export const creds = {
  valid: { email: 'testuser2@yopmail.com', password: 'Pass2005#' },
  invalid: [
    { email: 'tes...@yopmail.com', password: 'wrong1' },
    { email: 'tes...@yopmail.com', password: 'wrong2' }
  ]
};