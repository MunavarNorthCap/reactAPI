// import React from 'react';
import { Display } from "./Display";

const Table = ({users, handleClick, datas}) => {
    // const users = props.users;

    return <>
        <div className="container">
        <div className="row">
          <div className="col-4">
            <form>
              <table className="table table-sm table-bordered table-hover">
                <thead>
                  <tr>
                    <th scope="col"># ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Email ID</th>
                  </tr>
                </thead>
                <tbody id="detail">
                    {
                        users && users.map((user, index) => (
                            <tr key={index} onClick={() => handleClick(user.id)}>
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
              </table>
            </form>
          </div>

          <Display datas={datas}/>
        </div>        
      </div>
    </>
}

export default Table;