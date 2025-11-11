import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Search from "./components/Search.jsx"
import Pagination from "./components/Pagination.jsx"
import UserList from "./components/UserList.jsx"
import CreateUser from "./components/CreateUser.jsx"
import { useState } from "react"

function App() {
  const [showCreateUser, setShowCreateUser] = useState(false);

  const addUserClickHandler = ()=>{
    console.log('Add User');
    setShowCreateUser(true);
  }

  return (
   <div>
      <Header/>

      <main className="main">
        <section className="card users-container">
          
          <Search/>

          <UserList/>

           {/* <!-- New user button  --> */}
          <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

          <Pagination/>
        
        </section>

        {showCreateUser && <CreateUser />}

      </main>

      <Footer/>
   </div>
  )
}

export default App
