#### Para adicionar os links

- Utilize Link do React Router
- Configure o parametro **to**, que recebe a URL/path

```tsx
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
    </nav>
  )
}

export default NavBar
```