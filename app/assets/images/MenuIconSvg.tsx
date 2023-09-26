import { TIcon } from '@/app/ts/types'

const MenuIconSvg = ({ className, active, width, height, onClick }: TIcon) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
      >
        <path
          d="M36.08 19.8H7.91998C6.70558 19.8 6.59998 20.7834 6.59998 22C6.59998 23.2166 6.70558 24.2 7.91998 24.2H36.08C37.2944 24.2 37.4 23.2166 37.4 22C37.4 20.7834 37.2944 19.8 36.08 19.8ZM36.08 28.6H7.91998C6.70558 28.6 6.59998 29.5834 6.59998 30.8C6.59998 32.0166 6.70558 33 7.91998 33H36.08C37.2944 33 37.4 32.0166 37.4 30.8C37.4 29.5834 37.2944 28.6 36.08 28.6ZM7.91998 15.4H36.08C37.2944 15.4 37.4 14.4166 37.4 13.2C37.4 11.9834 37.2944 11 36.08 11H7.91998C6.70558 11 6.59998 11.9834 6.59998 13.2C6.59998 14.4166 6.70558 15.4 7.91998 15.4Z"
          fill="white"
        />
      </svg>
    </svg>
  )
}

export default MenuIconSvg
