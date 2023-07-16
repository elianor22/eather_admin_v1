import { useLayoutEffect, useState } from 'react'
import { useAppSelector } from '../store'

export const useSidebarWathcer = () => {
  const [sidebarPadding, setSidebarPadding] = useState(0)
  const { isExpand } = useAppSelector((state) => state.sidebar)
  const { isLargeScreen } = useAppSelector((state) => state.mediaQuery)

  useLayoutEffect(() => {
    if (isLargeScreen) {
      setSidebarPadding(isExpand ? 216 : 70)
    } else {
      setSidebarPadding('0px')
    }

    return () => {
      isExpand
      setSidebarPadding
    }
  }, [isExpand, isLargeScreen])

  return { sidebarPadding }
}
