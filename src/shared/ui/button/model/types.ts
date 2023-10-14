
type ButtonTheme = 'primary'

type ButtonSize = 'small' | 'medium' | 'large'

export interface Props {
  theme?: ButtonTheme
  size?: ButtonSize
  leftIcon?: string
  rightIcon?: string
  loading?: boolean
  disabled?: boolean
}
