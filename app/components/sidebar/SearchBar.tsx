import { SearchIconSvg } from '@/app/assets/images'
import React from 'react'

type Props = {
  className: string
}

const SearchBar = ({ className }: Props) => {
  return (
    <div className={`${className} relative h-22 flex items-center justify-center ml-6`}>
      <SearchIconSvg className="absolute left-2 top-6 bottom-0" width={29} height={29} />
      <input className="h-15 bg-374653 rounded-2" placeholder="" />
    </div>
  )
}

export default SearchBar
