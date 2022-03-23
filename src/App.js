import { useState, useEffect } from 'react';
import Table from './components/Table';
// import { Display } from "./components/Display";

function App() {
  var baseURL = 'https://reqres.in/api/users';

  const [users, setUsers] = useState([]);
  const [datas, setDatas] = useState(null);  

  useEffect(() => {
    fetch(`${baseURL}?page=2`)
    .then(response => {
      if(!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then(result => {
      var data = result.data;
      // console.log(data);
      setUsers(data);
    })
    .catch(err => console.log('Error Message: ' +  err));
  }, []);

  const handleClick = (id) => {
    console.log(id);
    setDatas(null);
    fetch(`${baseURL}/${id}`)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.data);
        var userDetail = result.data;
        setDatas(userDetail);

      })
      .catch(err => console.log("Error MSG: " + err))
  }

  return (
    <div className="App">
      <div className="container m-5 fw-bold"> Person Blog </div>
      <Table users={users} handleClick={handleClick} datas={datas} />
      {/* <Display datas = {datas}  /> */}
    </div>
  );
}

export default App;
