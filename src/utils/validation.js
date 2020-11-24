import * as Yup from 'yup';

function equalTo(ref, msg) {
  return Yup.string().test({
    name: 'equalTo',
    exclusive: false,
    message: msg || 'Passwords does not match!',
    params: {
      reference: ref.path,
    },
    test: function(value) {
      return value === this.resolve(ref);
    },
  });
}
Yup.addMethod(Yup.string, 'equalTo', equalTo);


export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required('Please enter your email address').email('Please enter a valid email address '),
  password: Yup.string().required('Please enter your password').min(8, 'Your password should be at least 8 characters in length')
})

export const signupValidationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your email address').min(2, 'Your name should contain at least 2 characters'),
  lastName: Yup.string().required('Please enter your email address').min(2, 'Your name should contain at least 2 characters'),
  email: Yup.string().required('Please enter your email address').email('Please enter a valid email address '),
  password: Yup.string().required('Please enter your password').min(8, 'Your password should be at least 8 characters in length'),
  passwordConfirmation: Yup.string().required("Required").test('equal', 'Passwords do not match',
    function(v) { // Don't use arrow functions
      const ref = Yup.ref('password');
      console.log("V")
      console.log(v)
      console.log(ref)
      console.log(this.resolve(ref))
      return v !== this.resolve(ref)
    })
  })




export const validateSingleField = (fieldName, value, validationSchema) => {
  const schema = validationSchema === 'login' ? loginValidationSchema : signupValidationSchema

  try {
     return [false, Yup.reach(schema, fieldName).validateSync(value)]
   }
   catch(err) {
    return [true, err]
   }
 }
