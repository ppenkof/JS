import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Search from "./components/Search.jsx"
import Pagination from "./components/Pagination.jsx"
import UserList from "./components/UserList.jsx"

function App() {
  return (
   <div>
      <Header/>

    <main className="main">
      <section className="card users-container">
        
        <Search/>

        <UserList/>


        <Pagination/>
       
      </section>
    </main>

      <Footer/>
   </div>
  )
}

export default App
