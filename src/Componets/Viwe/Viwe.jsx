import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router';


//     const navigate = useNavigate();
//     const location = useLocation();
//     const [inputValue, setInputValue] = useState(location.state.single)
//     const ndata = getData();

//  return ndata[location.state.index] = inputValue;
// }
function Viwe() {

    
    const location = useLocation();

    const ndata = location.state.single;

  return (
<Container>




<div className="col-12 mt-5">
        <div className="card shadow-sm">
          <div className="card-header bg-transparent border-0">
            <h3 className="mb-0"><i className="far fa-clone pr-1 pe-3"></i>Student Information</h3>
          </div>
          <div className="card-body pt-0">
            <table className="table table-bordered">
              <tr>
                <th width="30%">Name</th>
                <td width="2%">:</td>
                <td>{ndata.fname + " " + ndata.lname}</td>
              </tr>
              <tr>
                <th width="30%">Email</th>
                <td width="2%">:</td>
                <td>{ndata.email}</td>
              </tr>
              <tr>
                <th width="30%">Password</th>
                <td width="2%">:</td>
                <td>{ndata.password}</td>
              </tr>
              <tr>
                <th width="30%">Contact</th>
                <td width="2%">:</td>
                <td>{ndata.contact}</td>
              </tr>
              <tr>
                <th width="30%">Gender</th>
                <td width="2%">:</td>
                <td>{ndata.gender}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
 

 </Container>
  )
}

export default Viwe