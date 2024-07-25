import React, { useEffect, useState } from 'react'
// import s from './RegPageIndex.module.scss'
import AuthButton from '../../components/AuthButton/AuthButton'
import Button from '../../components/Button/Button'
import RegPrivat from './Form/RegPrivat'

const ReportPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const [action, setAction] = useState('Фізична особа')

  return (
    <div className={s.wrapper}>
      <div className={s.pageTitle}>
        <span className={s.titleLeft}>Головна</span>
        <span className={s.titleDot}>&#183;</span>
        <span className={s.titleRight}>Реєстрація</span>
        <span className={s.actionHidden}>{action}</span>
      </div>
      <main className={s.main}>
        <div className={s.mainGreetings}>
          <div className={s.logoWrap}>{/* <LogoGreeting /> */}</div>
          <p className={s.greetingsText}>Раді бачити Вас на нашій платформі!</p>
        </div>
        <div className={s.mainTitle}>
          <h2>Зареєструватись</h2>
        </div>

        <div className={s.switchWrap}>
          <div
            className={action === 'Фізична особа' ? `${s.activeSwitch} ${s.blue}` : s.activeSwitch}
            onClick={() => {
              setAction('Фізична особа')
            }}
          >
            Фізична особа
          </div>
          <div
            className={action === 'Організація' ? `${s.activeSwitch} ${s.blue}` : s.activeSwitch}
            onClick={() => {
              setAction('Організація')
            }}
          >
            Організація
          </div>
        </div>

        <div className={s.mainForm}>
          {action === 'Організація' ? <ReportPage /> : <RegPrivat />}
        </div>

        <div className={s.loginAlt}>
          <div className={s.loginAlternative}>
            <span className={s.loginAlernatLine}></span>
            <span>або зареєструйтесь за допомогою</span>
            <span className={s.loginAlernatLine}></span>
          </div>
        </div>

        <div className={s.signinLink}>
          <div className={s.isProfile}>Маєте профіль?</div>
          <div className={s.btnWrap}>
            <Button
              component="link"
              type="button"
              buttonClasses={'link'}
              to={''}
              name="Увійти"
              onClick={() => (window.location.href = '/login')}
              handleMouseEnter={() => {}}
              handleMouseLeave={() => {}}
              styleBtn={{ width: '100%' }}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default ReportPage
