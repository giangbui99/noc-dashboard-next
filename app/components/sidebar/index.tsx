'use client'

import {
  AdminIconSvg,
  ArchiveIconSvg,
  CamerasIconSvg,
  DashboardIconSvg,
  LayoutIconSvg,
  MapIconSvg,
  MenuIconSvg,
  RequestIconSvg
} from '@/app/assets/images'
import React, { useCallback, useState } from 'react'
import SearchBar from './SearchBar'

type Props = {
  isMobile: boolean
}

type ComponentProps = {
  isOpenSidebar: boolean
  onMenuClick: () => void
}

const navItems = [
  {
    icon: {
      active: <DashboardIconSvg width={32} height={32} active />,
      inactive: <DashboardIconSvg width={32} height={32} />
    },
    name: 'Dashboard'
  },
  {
    icon: {
      active: <CamerasIconSvg width={32} height={22} active />,
      inactive: <CamerasIconSvg width={32} height={22} />
    },
    name: 'Cameras',
    quantity: 34,
    isNew: true
  },
  {
    icon: {
      active: <RequestIconSvg width={32} height={32} active />,
      inactive: <RequestIconSvg width={32} height={32} />
    },
    name: 'Request',
    quantity: 4
  },
  {
    icon: {
      active: <LayoutIconSvg width={32} height={32} active />,
      inactive: <LayoutIconSvg width={32} height={32} />
    },
    name: 'Layouts'
  },
  {
    icon: {
      active: <AdminIconSvg width={32} height={32} active />,
      inactive: <AdminIconSvg width={32} height={32} />
    },
    name: 'Administrators',
    quantity: null
  },
  {
    icon: {
      active: <MapIconSvg width={32} height={32} active />,
      inactive: <MapIconSvg width={32} height={32} />
    },
    name: 'Map'
  },
  {
    icon: {
      active: <ArchiveIconSvg width={32} height={32} active />,
      inactive: <ArchiveIconSvg width={32} height={32} />
    },
    name: 'Archive'
  }
]

const MobileSidebar = ({ isOpenSidebar, onMenuClick }: ComponentProps) => {
  return <></>
}

const TabletNDesktopSidebar = ({ isOpenSidebar, onMenuClick }: ComponentProps) => {
  return (
    <div className="h-full bg-4C6071">
      <div className="px-4.5 flex h-full">
        <div>
          <MenuIconSvg className="my-10" width={44} height={44} onClick={onMenuClick} />
          {navItems.map((item, index) => (
            <div key={index} className="py-5">
              <div className="h-26 flex justify-center items-center">{item.icon.active}</div>
            </div>
          ))}
        </div>
        <div
          className={`${
            isOpenSidebar
              ? 'w-85 transition-all ease-linear delay-500'
              : 'w-0 transition-all ease-linear delay-500'
          }`}
        >
          <SearchBar
            className={`my-10 w-auto ${
              isOpenSidebar
                ? 'visible transition-all ease-in delay-650'
                : 'invisible transition-all ease-in-out delay-350'
            }`}
          />
          {navItems.map((item, index) => (
            <div key={index} className="py-5">
              <div className="w-full flex justify-between items-center">
                <div
                  className={`h-26 flex justify-start items-center ml-8 text-a8afb9 text-8 font-medium leading-14 ${
                    isOpenSidebar
                      ? 'visible transition-all ease-in delay-650'
                      : 'invisible transition-all ease-in-out delay-350'
                  }`}
                >
                  {item.name}
                </div>
                {item.quantity ? (
                  <span className="flex items-center justify-center text-fff text-6 font-medium leading-9 w-15 h-15 border rounded-34">
                    {item.quantity}
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Sidebar = ({ isMobile }: Props) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(true)

  const handleMenuClick = useCallback(() => {
    setIsOpenSidebar((prev) => !prev)
  }, [])

  if (isMobile) {
    return <MobileSidebar isOpenSidebar={isOpenSidebar} onMenuClick={handleMenuClick} />
  }
  return <TabletNDesktopSidebar isOpenSidebar={isOpenSidebar} onMenuClick={handleMenuClick} />
}

export default Sidebar
