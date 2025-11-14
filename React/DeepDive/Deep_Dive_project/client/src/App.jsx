import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Search from "./components/Search.jsx"
import Pagination from "./components/Pagination.jsx"
import UserList from "./components/UserList.jsx"
import UserSaveModal from "./components/UserSaveModal.jsx"
import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([]);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [refresh, setRefresh] = useState(true);
  
  useEffect(()=>{
    fetch('http://localhost:3030/jsonstore/users')
          .then(response => response.json())
          .then(result => {
            setUsers(Object.values(result));
          })
          .catch((err)=> alert(err.message));
  }, [refresh]);

  const forceUserRefresh = () => {
    setRefresh(state=>!state);
  }
  
  const addUserClickHandler = ()=>{
    console.log('Add User');
    setShowCreateUser(true);
  }
  const closeUserModalHandler = ()=>{
    setShowCreateUser(false);
  }

  const sortUsersHandler = () => {
    console.log('sort users');
    setUsers(state => [...state].sort((a,b)=>new Date(b.createdAt)- new Date(a.createdAt)));
  }


// Stop page refresh
  const AddUserSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    //Transform formdata to userData
    const {country, city, street, streetNumber, ...userData} = Object.fromEntries(formData);
    userData.address={
      country, 
      city, 
      street, 
      streetNumber
    };

    userData.createdAt= new Date().toISOString();
    userData.updatedAt= new Date().toISOString();


    //Todo fix address
    //Todo fix createdAt and updatedAt

    // Create new user request
    fetch('http://localhost:3030/jsonstore/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(result =>{
      console.log(result);
      closeUserModalHandler();
      forceUserRefresh();
    })
    .catch(err => alert(err.message));
  }

  return (
   <div>
      <Header/>

      <main className="main">
        <section className="card users-container">
          
          <Search/>

          <UserList users={users} forceUserRefresh={forceUserRefresh} onSort={sortUsersHandler}/>

           {/* <!-- New user button  --> */}
          <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

          <Pagination/>
        
        </section>

        {showCreateUser && 
          <UserSaveModal 
            onClose={closeUserModalHandler}
            onSubmit={AddUserSubmitHandler}
            />
            }

      </main>

      <Footer/>
   </div>
  )
}

export default App
