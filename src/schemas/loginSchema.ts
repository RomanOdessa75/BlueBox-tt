import * as yup from 'yup'

export const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,64}$/
const emailRules = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/

export const LoginSchema = yup.object().shape({
  loginEmail: yup
    .string()
    .max(50, 'Максимальна кількість символів 50')
    .email('Введіть коректну e-mail адресу')
    .required('Обов`язкове поле')
    .matches(emailRules, {
      message: 'Введіть коректну e-mail адресу'
    }),
  loginPassword: yup
    .string()
    .label('Введіть коректний пароль')
    .required('Обов`язкове поле')
    .min(8, 'Мінімальна кількість символів 8')
    .max(64, 'Максимальна кількість символів 64')
    .matches(passwordRules, {
      message: 'Введіть коректний пароль'
    })
    .test('no-username-in-password', 'Пароль не може містити email', function (value) {
      const loginEmail = this.parent.email
      if (loginEmail) {
        const username = loginEmail.split('@')[0].toLowerCase()
        return !value?.toLowerCase().includes(username)
      }
      return true
    })
})
