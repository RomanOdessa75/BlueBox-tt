import * as yup from 'yup'

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,64}$/
const emailRules = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
const nameRules = /^([a-zA-z0-9\u0400-\u04FF][a-zA-z0-9\u0400-\u04FF-'./ ]*)$/
const surnameRules = /^([a-zA-Z\u0400-\u04FF][a-zA-Z\u0400-\u04FF-'./ ]*)$/
const phoneRegExp = /^\+380\(\d{2}\)\d{3}-\d{2}-\d{2}$/

export const signupSchemaStep0 = yup.object().shape({
  name: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .min(2, 'Введіть назву від 2 до 25 символів')
    .max(25, 'Введіть назву від 2 до 25 символів')
    .matches(nameRules, {
      message: 'Введіть назву організації латиницею або кирилицею!'
    }),
  surname: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .min(2, 'Введіть ім`я від 2 до 25 символів')
    .max(25, 'Введіть ім`я від 2 до 25 символів')
    .matches(surnameRules, {
      message: 'Введіть ім`я латиницею або кирилицею!'
    }),
  phone: yup
    .string()
    .required('Обов`язкове поле')
    .matches(phoneRegExp, 'Введіть коректний номер телефону')
})

export const signupSchemaStep1 = yup.object().shape({
  name: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .min(2, 'Введіть назву від 2 до 25 символів')
    .max(25, 'Введіть назву від 2 до 25 символів')
    .matches(nameRules, {
      message: 'Введіть назву організації латиницею або кирилицею!'
    }),
  surname: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .min(2, 'Введіть ім`я від 2 до 25 символів')
    .max(25, 'Введіть ім`я від 2 до 25 символів')
    .matches(surnameRules, {
      message: 'Введіть ім`я латиницею або кирилицею!'
    }),
  phone: yup
    .string()
    .required('Обов`язкове поле')
    .matches(phoneRegExp, 'Введіть коректний номер телефону'),
  email: yup
    .string()
    .max(50, 'Максимальна кількість символів 50')
    .email('Введіть коректну e-mail адресу')
    .required('Обов`язкове поле')
    .matches(emailRules, {
      message: 'Введіть коректну e-mail адресу'
    }),
  city: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .min(2, 'Введіть назву від 2 до 25 символів')
    .max(25, 'Введіть назву від 2 до 25 символів')
    .matches(nameRules, {
      message: 'Введіть назву міста латиницею або кирилицею!'
    }),
  password: yup
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

export const signupSchemaPrivat = yup.object().shape({
  surname: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .min(2, 'Введіть ім`я від 2 до 25 символів')
    .max(25, 'Введіть ім`я від 2 до 25 символів')
    .matches(surnameRules, {
      message: 'Введіть ім`я латиницею або кирилицею!'
    }),
  phone: yup
    .string()
    .required('Обов`язкове поле')
    .matches(phoneRegExp, 'Введіть коректний номер телефону'),
  email: yup
    .string()
    .max(50, 'Максимальна кількість символів 50')
    .email('Введіть коректну e-mail адресу')
    .required('Обов`язкове поле')
    .matches(emailRules, {
      message: 'Введіть коректну e-mail адресу'
    }),
  city: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .min(2, 'Введіть назву від 2 до 25 символів')
    .max(25, 'Введіть назву від 2 до 25 символів')
    .matches(nameRules, {
      message: 'Введіть назву міста латиницею або кирилицею!'
    }),
  password: yup
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
    }),
  // checkbox: yup.array().of(yup.boolean().oneOf([true], 'Будь ласка, відмітьте всі опції'))
  checkbox: yup.string().required('Обов`язкове поле')
})
