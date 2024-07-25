import { useMediaQuery as useQuery } from 'react-responsive'

export const useMediaQuery = () => {
  const isMobile = useQuery({ query: '(max-width: 743px)' })
  const isTablet = useQuery({ query: '(min-width: 744px) and (max-width: 1279px)' })
  const isDesktop = useQuery({ query: '(min-width: 1440px)' })
  return {
    isTablet,
    isDesktop,
    isMobile
  }
}

export default useMediaQuery
