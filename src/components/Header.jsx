import icon from './icon.png'

export default function Header() {
  return (
    <header className="page-header">
      <img src={icon} alt="chef-icon" className="page-icon"></img>
      <span className="page-name">Recipe Generator</span>
    </header>
  )
}