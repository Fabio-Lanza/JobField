import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/images/not-found.svg'
import Wrapper from '../../Styled-components/ErrorPage-styled'

function Error() {
  return (
    <Wrapper className='full-page'>
      
      <div>
        <img src={img} alt="" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find page you are looking for</p>
        <Link to='/'>Back home</Link>
      </div>
      
      </Wrapper>
  )
}

export default Error