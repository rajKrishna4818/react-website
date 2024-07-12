import './Button.css'

interface btnProp{
    btnText: string;
}

const Button = ({btnText}: btnProp) => {
  return (
    <>
        <button className="button-17" role="button">
          {btnText}
        </button>
    </>
  )
}

export default Button


