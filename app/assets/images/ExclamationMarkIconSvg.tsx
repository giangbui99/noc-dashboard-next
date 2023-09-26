import { TIcon } from '@/app/ts/types'

const ExclamationMarkIconSvg = ({ className, width, height }: TIcon) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4.98862" cy="4.98862" r="4.98862" fill="white" />
      <path
        d="M5 0C2.24299 0 0 2.24304 0 5.00005C0 7.75706 2.24299 10 5 10C7.75701 10 10 7.75706 10 5.00005C10 2.24304 7.75701 0 5 0ZM5 1.11115C5.53582 1.08485 5.97564 1.57616 5.94512 2.11174L5.73681 5.75924C5.71449 6.14946 5.39085 6.45517 5 6.45517C4.60914 6.45517 4.28546 6.14946 4.26314 5.75924L4.05487 2.11174C4.04015 1.85286 4.14913 1.1529 5 1.11115ZM5 8.88894C4.45706 8.88894 4.04766 8.46728 4.04766 7.90807C4.04766 7.34886 4.45706 6.9272 5 6.9272C5.5518 6.9272 5.95234 7.33971 5.95234 7.90807C5.95234 8.46728 5.54293 8.88894 5 8.88894Z"
        fill="#FF0000"
      />
    </svg>
  )
}

export default ExclamationMarkIconSvg
