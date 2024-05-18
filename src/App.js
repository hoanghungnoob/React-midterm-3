import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import Search from './components/users/Search';
function App() {
  const [users,setUsers] = useState([]);
  // dùng useEffect để handle axios get api 
  useEffect(()=>{
    // dùng hàm xử lý bất đồng bộ asynchronous để xử lý việc get api từ github
    const fetchData = async ()=>{
        try {
          // dùng phương thức get của thư viện axios để lấy data từ api user của github
          const response = await axios.get("https://api.github.com/users");
          // dùng log để thực hiện debugger 
          setUsers(response.data)
        } catch (error) {
          // log lỗi nếu có lỗi trong khi get data
          console.error("Error fetching data", error);
        }
    }
    // gọi lại hàm fetchData để thực thi hàm dã được định nghĩa trên
    fetchData();
  },[])
  return (
    <div className='App' >
      <Navbar />
      <div className='container'>
        <h1>Github Users Data</h1>
        <Search />
      </div>
    </div>
  )
}

export default App;
