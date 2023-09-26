import { TIcon } from '@/app/ts/types'

const LayoutIconSvg = ({ className, active, width, height }: TIcon) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="15.4839"
        height="15.4839"
        rx="5"
        transform="matrix(-1 0 0 1 32 0)"
        fill={active ? '#FFFFFF' : '#A8AFB9'}
      />
      <rect
        width="13.4194"
        height="13.4194"
        rx="4"
        transform="matrix(-1 0 0 1 29.9355 17.5484)"
        fill={active ? '#FFFFFF' : '#A8AFB9'}
      />
      <rect
        width="13.4194"
        height="13.4194"
        rx="4"
        transform="matrix(-1 0 0 1 14.4516 2.06451)"
        fill={active ? '#FFFFFF' : '#A8AFB9'}
      />
      <rect
        width="14.4516"
        height="14.4516"
        rx="4"
        transform="matrix(-1 0 0 1 14.4516 17.5484)"
        fill={active ? '#FFFFFF' : '#A8AFB9'}
      />
    </svg>
  )
}

export default LayoutIconSvg
