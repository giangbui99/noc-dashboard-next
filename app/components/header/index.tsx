'use client'

import React from 'react'
import UserIcon from '@/app/assets/images/UserIcon'
import Link from 'next/link'
import { Logo, NotificationIcon } from '@/app/assets/images'

type Props = {
  isMobile: boolean
}

const Header = ({ isMobile }: Props) => {
  return (
    <div
      className={`ctn-dashboard_header bg-374653 flex justify-between items-center h-25 ${
        !isMobile ? 'pl-21 pr-16' : 'px-5'
      }`}
    >
      <Link href={'/dashboard/home'}>
        <Logo />
      </Link>
      <div className="flex justify-center items-center">
        <div
          className={`flex justify-center items-center h-25 w-25 ${!isMobile ? 'mr-13.5' : 'mr-0'}`}
        >
          <NotificationIcon width={24} height={27} hasNotification />
        </div>
        <div className="flex justify-center items-center">
          {!isMobile && (
            <span className="font-medium text-right text-7 mr-6 leading-11 text-fff">
              Admin/ec2526327
            </span>
          )}
          <UserIcon width={32} height={32} />
        </div>
      </div>
    </div>
  )
}

export default Header
