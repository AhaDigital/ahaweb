function Phone({ width = '26', height = '26' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <g clipPath="url(#clip0_37_35)">
        <path
          d="M17.3333 1.08331H8.66666C6.86832 1.08331 5.41666 2.53498 5.41666 4.33331V21.6666C5.41666 23.465 6.86832 24.9166 8.66666 24.9166H17.3333C19.1317 24.9166 20.5833 23.465 20.5833 21.6666V4.33331C20.5833 2.53498 19.1317 1.08331 17.3333 1.08331ZM15.1667 22.75H10.8333V21.6666H15.1667V22.75ZM18.6875 19.5H7.31249V4.33331H18.6875V19.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_37_35">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Phone
