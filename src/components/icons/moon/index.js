import PropTypes from 'prop-types'

export default function Moon ({ size }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  )
}

Moon.propTypes = {
  size: PropTypes.number
}

Moon.defaultProps = {
  size: 21
}
