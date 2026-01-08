import ThemeToggle from './ThemeToggle'
import { useTheme } from '../context/ThemeProvider'

const Header = () => {
  const { theme } = useTheme()
  return (
    <header className='flex justify-between pl-16 pr-8 py-4 border-b border-border-light items-center'>
             
            <img src={theme === 'dark' ? '/logo-dark.svg' : '/logo.svg'} alt="Logo" />
           
        <ThemeToggle />
    </header>
  )
}

export default Header