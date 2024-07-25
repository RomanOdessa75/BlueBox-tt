import React, { useState } from 'react'
import { useFormik, FormikProvider, Field, ErrorMessage, Form } from 'formik'
import { InputMask } from 'primereact/inputmask'
import Button from '../../../components/Button/Button'
import Eye from '../../../components/Eye/Eye'
import css from './RegistrationPage.module.scss'
import { signupSchemaStep0, signupSchemaStep1 } from '../../../schemas/regSchema'
import './animations.scss'

type FormValues = {
  name: string
  surname: string
  phone: string
  email: string
  password: string
  checkbox: string
  city: string
}

const initialValues: FormValues = {
  name: '',
  surname: '',
  phone: '',
  email: '',
  password: '',
  checkbox: '',
  city: ''
}

const RegistrationPage: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)

  const getSchemaByStep = (step: number) => {
    return step === 0 ? signupSchemaStep0 : signupSchemaStep1
  }

  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: getSchemaByStep(current),
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    onSubmit: () => {
      console.log('submited')
    }
  })

  const initialValidation = async (): Promise<void> => {
    const isValid = await formik.validateForm()

    console.log('Form values:', formik.values)
    console.log('Form touched:', formik.touched)
    console.log('Form isValid:', isValid)

    if (isValid) {
      setCurrent(current + 1)
    }
  }

  const next = async (): Promise<void> => {
    if (current === 0) {
      await initialValidation()
    } else {
      const isValid = await formik.validateForm()
      if (isValid) {
        setCurrent(current + 1)
      }
    }
  }

  const prev = (): void => {
    setCurrent(current - 1)
  }

  return (
    <>
      <FormikProvider value={formik}>
        <Form className={css.form}>
          {current === 0 && (
            <>
              <div className={css.progressBar}>
                <div className={`${css.progress} animatedShort`}></div>
              </div>
              <section className={`${css.inputs} slideInLeft`}>
                <div className={css.inputWrapper}>
                  <label
                    htmlFor="name"
                    className={`${
                      formik.errors.name && formik.touched.name ? css.errorLabel : ''
                    } ${css.regLabel}`}
                  >
                    {' '}
                    Назва *
                  </label>
                  <Field
                    className={`${
                      formik.errors.name && formik.touched.name ? css.errorField : ''
                    } ${css.signUpField}`}
                    name="name"
                    type="text"
                    id="name"
                    placeholder="ГО “Місто активних людей”"
                    required
                    value={formik.values.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      formik.handleChange(e)
                      formik.validateField('name')
                    }}
                    onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                      formik.handleBlur(e)
                      formik.validateField('name')
                    }}
                  />
                  <ErrorMessage className={css.error} name="name" component="div" />
                </div>
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
                    className={`${
                      formik.errors.phone && formik.touched.phone ? css.errorLabel : ''
                    } ${css.regLabel}`}
                  >
                    Номер телефону *
                  </label>
                  <Field
                    as={InputMask}
                    mask="+380(99)999-99-99"
                    id="phone"
                    placeholder="+380(__)___-__-__"
                    className={`${
                      formik.errors.phone && formik.touched.phone ? css.errorField : ''
                    } ${css.signUpField}`}
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
                  <div className={css.note}>* Зірочкою позначені обов’язкові поля</div>
                </div>
                <div className={css.checkboxes}>
                  <label className={`${css.check} ${css.option}`}>
                    <Field
                      className={css.checkInput}
                      control="checkbox"
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      checked={formik.values.checkbox}
                    />
                    <span className={css.checkBox}></span>
                    <span className={css.checkboxText}>
                      Показувати контактний номер на сторінці
                    </span>
                  </label>
                </div>

                <div className={css.nextBtnWrapper}>
                  <Button
                    buttonClasses={'filledBtn'}
                    type={'button'}
                    name={'Далі'}
                    onClick={() => next()}
                    styleBtn={{ width: '100%' }}
                    disabled={
                      !formik.isValid ||
                      !(formik.touched.name && formik.touched.phone && formik.touched.surname)
                    }
                  />
                </div>
              </section>
            </>
          )}

          {current === 1 && (
            <>
              <div className={css.progressBar}>
                <div className={`${css.progressFull} animatedFull`}></div>
              </div>
              <section className={`${css.inputs} slideInLeft`}>
                <div className={css.inputWrapper}>
                  <label
                    className={`${
                      formik.errors.email && formik.touched.email ? css.errorLabel : ''
                    } ${css.regLabel}`}
                  >
                    Електронна адреса *
                  </label>
                  <Field
                    className={`${
                      formik.errors.email && formik.touched.email ? css.errorField : ''
                    } ${css.signUpField}`}
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
                    htmlFor="city"
                    className={`${
                      formik.errors.city && formik.touched.city ? css.errorLabel : ''
                    } ${css.regLabel}`}
                  >
                    {' '}
                    Місто *
                  </label>
                  <Field
                    className={`${
                      formik.errors.city && formik.touched.city ? css.errorField : ''
                    } ${css.signUpField}`}
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
                    type={visible ? 'text' : 'password'}
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

                  <div className={css.eye}>
                    <Eye
                      onClickShowPass={(boolean: boolean) => {
                        setVisible(boolean)
                      }}
                      onShowPass={visible}
                    />
                  </div>

                  <ErrorMessage className={css.error} name="password" component="div" />
                  <div className={css.note}>* Зірочкою позначені обов’язкові поля</div>
                </div>
                <div className={css.btnWrapper}>
                  <Button
                    buttonClasses={'filledBtn'}
                    type={'submit'}
                    name={'Зареєструватись'}
                    styleBtn={{ width: '100%' }}
                  />
                </div>
                <button
                  className={css.gobackLink}
                  type="button"
                  onClick={() => {
                    prev()
                  }}
                >
                  <div className={css.gobackBtn}>Повернутись на попередню сторінку</div>
                </button>
              </section>
            </>
          )}
        </Form>
      </FormikProvider>
    </>
  )
}

export default RegistrationPage
