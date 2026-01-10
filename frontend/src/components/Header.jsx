import ThemeToggle from './ThemeToggle'
import { useTheme } from '../context/ThemeProvider'

const Header = () => {
  const { theme } = useTheme()
  return (
    <header className='flex justify-between px-4 md:px-8 py-4 border-b border-border-light items-center '>
            {/* Mobile Logo: Visible only on small screens */}
          <img 
            src="./logo-small.svg" 
            alt="Logo" 
            className="block md:hidden h-8 w-auto" 
          />

            <img
             src={theme === 'dark' ? '/logo-dark.svg' : '/logo.svg'}
              alt="Logo"
              className="hidden md:block"
               />
           
        <ThemeToggle />
    </header>
  )
}

export default Header