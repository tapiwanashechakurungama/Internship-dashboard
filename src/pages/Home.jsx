import Banner from "../components/Banner"
import Cards from "../components/Cards"
import Navbar from "../components/Navbar"
import StudentTable from "../components/StudentTable"


const Home = () => {
  return (
   <main className="container bg-black min-h-[100vh] shadow-lg rounded-2xl p-3">
    <Navbar/>
    <Banner/>
    <Cards/>
    <StudentTable/>
   </main>
  )
}

export default Home