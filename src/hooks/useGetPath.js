import { useLocation } from 'react-router-dom'

export const useGetPath = () => {
  const location = useLocation()
  const path = location.pathname
  const allPath = path.split('/')
  const firstPath = allPath.slice(1)[0]
  const currentPath = allPath[allPath.length - 1]

  return {
    path,
    firstPath,
    currentPath,
  }
}
