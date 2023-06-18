import { Outlet } from 'react-router-dom'
import BigSidebar from '../../components/Sidebar/BigSidebar'
import SmallSidebar from '../../components/Sidebar/SmallSidebar'
import Wrapper from '../../Styled-components/SharedLayoutPage-style'
import Navbar from '../../components/Navbar/Navbar'


function SharedLayout() {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default SharedLayout