import './App.css'
import Navbar from './component/navbar/navbar'
import SearchBar from './component/searchBar/searchBar'
import Content from './component/content/content'
function App() {
  return (
    <div id='github'>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <Content></Content>
    </div>
  )
}

export default App
