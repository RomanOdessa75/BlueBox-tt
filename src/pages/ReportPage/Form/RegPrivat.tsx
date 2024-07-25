import React, { useEffect, useState } from 'react'
import { useFormik, FormikProvider, Field, ErrorMessage, Form } from 'formik'
import { InputMask } from 'primereact/inputmask'
import css from './RegistrationPage.module.scss'
import Button from '../../../components/Button/Button'
import checkboxData from '../checkboxData.json'
import { signupSchemaPrivat } from '../../../schemas/regSchema'
import './animations.scss'

type FormValues = {
  surname: string
  phone: string
  email: string
  password: string
  checkbox: string
  city: string
}

const initialValues: FormValues = {
  surname: '',
  phone: '',
  email: '',
  password: '',
  checkbox: '',
  city: ''
}

const RegPrivat: React.FC = () => {
  const [checkboxes, setCheckboxes] = useState<Array<boolean>>(
    Array(checkboxData.length).fill(false)
  )

  const [allChecked, setAllChecked] = useState<boolean>(false)

  useEffect(() => {
    const areAllCheckboxesChecked = checkboxes.every((checkbox) => checkbox === true)

    setAllChecked(areAllCheckboxesChecked)
  }, [checkboxes])

  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxes = [...checkboxes]
    updatedCheckboxes[index] = !updatedCheckboxes[index]
    setCheckboxes(updatedCheckboxes)
  }

  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: signupSchemaPrivat,
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    onSubmit: () => {
      console.log('submited')

      const isValid = formik.validateForm()

      console.log('Form values:', formik.values)
      console.log('Form touched:', formik.touched)
      console.log('Form isValid:', isValid)
    }
  })

  return (
    <>
      <FormikProvider value={formik}>
        <Form className={css.form}>
          <section className={`${css.inputs} slideInLeft`}>
            <div className={css.inputWrapper}>
              <label
                htmlFor="surname"
                className={`${
                  formik.errors.surname && formik.touched.surname ? css.errorLabel : ''
                } ${css.regLabel}`}
              >
                {' '}
                Прізвище та ім’я *
              </label>
              <Field
                className={`${
                  formik.errors.surname && formik.touched.surname ? css.errorField : ''
                } ${css.signUpField}`}
                name="surname"
                type="text"
                id="surname"
                placeholder="Петро Петрович Петров"
                required
                value={formik.values.surname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  formik.handleChange(e)
                  formik.validateField('surname')
                }}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                  formik.handleBlur(e)
                  formik.validateField('surname')
                }}
              />
              <ErrorMessage className={css.error} name="surname" component="div" />
            </div>
            <div className={css.inputWrapper}>
              <label
                htmlFor="city"
                className={`${formik.errors.city && formik.touched.city ? css.errorLabel : ''} ${
                  css.regLabel
                }`}
              >
                {' '}
                Місто *
              </label>
              <Field
                className={`${formik.errors.city && formik.touched.city ? css.errorField : ''} ${
                  css.signUpField
                }`}
                name="city"
                type="text"
                id="city"
                placeholder="Місто"
                required
                value={formik.values.city}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  formik.handleChange(e)
                  formik.validateField('city')
                }}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                  formik.handleBlur(e)
                  formik.validateField('city')
                }}
              />
              <ErrorMessage className={css.error} name="city" component="div" />
            </div>
            <div className={css.inputWrapper}>
              <label
                className={`${formik.errors.phone && formik.touched.phone ? css.errorLabel : ''} ${
                  css.regLabel
                }`}
              >
                Номер телефону *
              </label>
              <Field
                as={InputMask}
                mask="+380(99)999-99-99"
                id="phone"
                placeholder="+380(__)___-__-__"
                className={`${formik.errors.phone && formik.touched.phone ? css.errorField : ''} ${
                  css.signUpField
                }`}
                name="phone"
                required
                value={formik.values.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  formik.handleChange(e)
                  formik.validateField('phone')
                }}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                  formik.handleBlur(e)
                  formik.validateField('phone')
                }}
                error={formik.errors.phone}
              />
              <ErrorMessage className={css.error} name="phone" component="div" />
            </div>
            <div className={css.inputWrapper}>
              <label
                className={`${formik.errors.email && formik.touched.email ? css.errorLabel : ''} ${
                  css.regLabel
                }`}
              >
                Електронна адреса *
              </label>
              <Field
                className={`${formik.errors.email && formik.touched.email ? css.errorField : ''} ${
                  css.signUpField
                }`}
                name="email"
                type="email"
                id="email"
                placeholder="example@example.com"
                required
                value={formik.values.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  formik.handleChange(e)
                  formik.validateField('email')
                  if (formik.values.password) {
                    formik.validateField('password')
                  }
                }}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                  formik.handleBlur(e)
                  formik.validateField('email')
                }}
              />
              <ErrorMessage className={css.error} name="email" component="div" />
            </div>

            <div className={css.inputWrapper}>
              <label
                className={`${
                  formik.errors.password && formik.touched.password ? css.errorLabel : ''
                } ${css.regLabel}`}
              >
                Пароль*
              </label>
              <Field
                className={`${
                  formik.errors.password && formik.touched.password ? css.errorField : ''
                } ${css.signUpField}`}
                title="Пароль має містити від 8 до 64 символів (латинські літери нижнього, верхнього регістру, цифри, та @, #, $, %, ^, &, +, =, !)"
                name="password"
                // type={visible ? 'text' : 'password'}
                placeholder="Ввести пароль"
                id="password"
                required
                value={formik.values.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  formik.handleChange(e)
                  formik.validateField('password')
                  if (formik.values.password) {
                    formik.validateField('password')
                  }
                }}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                  formik.handleBlur(e)
                  formik.validateField('password')
                  if (formik.values.password) {
                    formik.validateField('password')
                  }
                }}
              />

              <ErrorMessage className={css.error} name="password" component="div" />
              <div className={css.note}>* Зірочкою позначені обов’язкові поля</div>
            </div>

            <div className={css.checkboxes}>
              {checkboxData.map((text, index) => (
                <label key={index} className={`${css.check} ${css.option}`}>
                  <Field
                    className={css.checkInput}
                    control="checkbox"
                    type="checkbox"
                    name={`checkbox[${index}]`}
                    id={`checkbox${index}`}
                    checked={checkboxes[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span className={css.checkBox}></span>

                  {text === checkboxData[0] && (
                    <span className={css.checkboxText}>
                      Даю згоду на обробку персональних даних
                    </span>
                  )}

                  {text === checkboxData[1] && (
                    <span className={css.checkboxText}>
                      Погоджуюсь з{' '}
                      <a
                        href="/*"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.docsRef}
                      >
                        Політикою конфіденційності
                      </a>{' '}
                      та{' '}
                      <a
                        href="/*"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.docsRef}
                      >
                        Правилами користування сайтом
                      </a>
                    </span>
                  )}
                </label>
              ))}
              <ErrorMessage className={css.error} name="checkbox" component="div" />
            </div>

            <div className={css.btnWrap}>
              <Button
                buttonClasses={'filledBtn'}
                type={'submit'}
                name={'Зареєструватись'}
                disabled={!formik.isValid || !allChecked}
                styleBtn={{ width: '100%' }}
              />
            </div>
          </section>
        </Form>
      </FormikProvider>
    </>
  )
}

export default RegPrivat
