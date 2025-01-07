import { Link, useLocation } from 'react-router-dom'
import { HeaderWrap } from './style'

const Nav = () => {
  const location = useLocation()

  return (
    <HeaderWrap>
      <div>
        <h2>
          <Link to={'/'}>PORTFOLIO</Link>
        </h2>
        {location.pathname.includes('works') && (
          <h2>
            <Link to={'/'}>Back</Link>
          </h2>
        )}
      </div>
    </HeaderWrap>
  )
}

export default Nav
