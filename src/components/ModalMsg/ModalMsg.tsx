import s from './ModalMsg.module.scss'

// import ModalBack from 'src/components/ModalBack/ModalBack';
// import greenCheck from 'src/assets/images/green_check.png'
// import warning from 'src/assets/images/warning.png'

interface ModalMsgProps {
  title: string
  isWarning?: boolean
}

const ModalMsg = ({
  title
} // handleCloseModal,
// isWarning
: ModalMsgProps) => {
  return (
    <>
      {/* <ModalBack handleCloseModal={handleCloseModal}> */}
      {/* <img
        src={isWarning ? warning : greenCheck}
        alt={isWarning ? 'warning' : 'green click'}
        className={s.img}
      /> */}
      <h2 className={s.title}>{title}</h2>
      {/* </ModalBack> */}
    </>
  )
}

export default ModalMsg
