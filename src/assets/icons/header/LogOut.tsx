interface SvgProps {
  width?: number
  height?: number
  stroke?: string
}

const LogOut: React.FC<SvgProps> = ({ width = 32, height = 32, stroke = '#FFC700' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="15.9998"
        cy="23.3333"
        rx="9.33333"
        ry="4.66667"
        stroke="#FFC700"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <circle
        cx="15.9998"
        cy="9.33333"
        r="5.33333"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default LogOut
