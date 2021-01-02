import PropTypes from 'prop-types'
import { useContext } from 'react'
import ThemeContext from 'context/ThemeContext'

export default function EnterCommand ({ size, ...props }) {
  const { theme } = useContext(ThemeContext)
  return (
    <svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 0a4 4 0 00-4 4v2.875H4a4 4 0 00-4 4v3.25a4 4 0 004 4h12a4 4 0 004-4V4a4 4 0 00-4-4h-4.5z"
        fill={theme.title === 'dark' ? 'var(--gray-200)' : 'var(--gray-900)'}
      />
      <path
        d="M6.771 13.479l-.853-.854h7.207c.786 0 1.375-.589 1.375-1.375v-2.5c0-.074-.022-.097-.025-.1-.003-.003-.026-.025-.1-.025-.074 0-.097.022-.1.025-.003.003-.025.026-.025.1v2.5c0 .301-.103.59-.318.807a1.124 1.124 0 01-.807.318H5.918l.853-.854.813-.812c.034-.034.041-.064.041-.084 0-.02-.007-.05-.041-.084a.318.318 0 00-.045-.037h0-.002l-.003-.002A.18.18 0 007.5 10.5a.18.18 0 00-.034.002l-.004.001H7.46l-.01.007a.318.318 0 00-.035.031l-1.875 1.875c-.034.034-.041.064-.041.084 0 .02.007.05.041.084l1.875 1.875c.034.034.065.041.084.041.02 0 .05-.007.084-.041s.041-.064.041-.084c0-.02-.007-.05-.041-.084l-.813-.812z"
        fill={theme.title === 'dark' ? 'var(--gray-400)' : 'var(--gray-500)'}
        stroke={theme.title === 'dark' ? 'var(--gray-400)' : 'var(--gray-500)'}
      />
    </svg>
  )
}

EnterCommand.propTypes = {
  size: PropTypes.number
}

EnterCommand.defaultProps = {
  size: 21
}
