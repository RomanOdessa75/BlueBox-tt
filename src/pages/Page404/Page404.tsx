import { Link } from 'react-router-dom';
import s from './Page404.module.scss';
import errorIcon from '../../assets/images/404/404.svg';

const Page404: React.FC = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h1 className={s.title}>
          <span>Вибачте,</span>
          <span>сталася помилка!</span>
        </h1>
        <p className={s.subtitle}>Не вдається знайти сторінку, яку Ви шукали.</p>
        <div className={s.errorWrapper}>
          <img src={errorIcon} alt="404icon" className={s.errorIcon} />
        </div>
        <div className={s.errorBtn}>
          <Link className={s.link} to="/">
            Повернутись на головну
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page404;

