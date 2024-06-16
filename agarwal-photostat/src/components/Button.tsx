import './Button.css'

interface btnProp{
    btnText: string;
}

const Button = ({btnText}: btnProp) => {
  return (
    <>
        <button className='custom-btn'>
            {btnText}
        </button>
    </>
  )
}

export default Button