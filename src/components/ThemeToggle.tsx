// Este componente muestra el botón para cambiar entre tema claro y oscuro
interface ThemeToggleProps{
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

function ThemeToggle({isDarkMode, onToggleTheme}: ThemeToggleProps){
  return (
    <button onClick={onToggleTheme} className="theme-toggle">
      {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  )
}

export default ThemeToggle
