import * as C from './InputStyles'

type Props = {
  type: string,
  placeholder: string,
  value: number | string,
  onChange: React.ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
}

export const Input = ({type, placeholder, value, onChange, disabled} :Props) => {
  return (
    <C.Input type={type} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled}/>
  )
}