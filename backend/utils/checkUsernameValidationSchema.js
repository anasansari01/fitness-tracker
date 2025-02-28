export const checkUsernameValidationSchema = {
  username: {
    notEmpty: {
      errorMessage: 'Username cannot be empty.',
    },
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage: 'Username must be between 5 and 32 characters long.',
    },
    isString: {
      errorMessage: 'Username must be a string.',
    },
  },
  password: {
    notEmpty: {
      errorMessage: 'Password cannot be empty.',
    },
    isLength: {
      options: {
        min: 8,
      },
      errorMessage: 'Password must be at least 8 characters long.',
    },
  },
};