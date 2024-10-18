import { Link } from "react-router-dom"
import SearchInput from "./SearchInput"

const Header = () => {
  return (
    <div className="flex items-center gap-20 px-4 border-b h-14">
      <div className="flex items-center space-x-2 text-sm font-medium">
      <Link to='/' className="font-bold text-lg">NPM Registry</Link>
      </div>
        <div className="w-4 max-w-xl ml-4">
        <SearchInput/>
        </div>
        
    </div>
  )
}

export default Header