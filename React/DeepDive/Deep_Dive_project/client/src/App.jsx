import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Search from "./components/Search.jsx"
import Pagination from "./components/Pagination.jsx"
import UserList from "./components/UserList.jsx"
import CreateUserModal from "./components/CreateUserModal.jsx"
import { useState, useEffect } from "react"

function App() {
  const[users, setUsers] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:3030/jsonstore/users')
          .then(response => response.json())
          .then(result => {
            setUsers(Object.values(result));
          })
          .catch((err)=> alert(err.message));
  }, []);

  const [showCreateUser, setShowCreateUser] = useState(false);
  
  const addUserClickHandler = ()=>{
    console.log('Add User');
    setShowCreateUser(true);
  }
  const closeUserModalHandler = ()=>{
    setShowCreateUser(false);
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


    //Todo fix address
    //Todo fix createdAt and updatedAt
    
    // Create new user request
    fetch('http:localhost:3030/jsonstore/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userData)
    })
    .then(response=>response,json())
    .then(result=>{
      console.log(result)
    });
  }

  return (
   <div>
      <Header/>

      <main className="main">
        <section className="card users-container">
          
          <Search/>

          <UserList users={users}/>

           {/* <!-- New user button  --> */}
          <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

          <Pagination/>
        
        </section>

        {showCreateUser && 
          <CreateUserModal 
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
