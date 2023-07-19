import React, { useEffect, useState } from 'react'
import { Button, Container, Dropdown, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

const getData = () => {

    const data = localStorage.getItem("empData");

    if (data != null) {

        return JSON.parse(data);

    }
    else {

        return [];
    }

}

function ViewData() {


    const [empData, setEmpData] = useState(getData());
    const [option, setOption] = useState([]);

    const [sercgData, setSearchData] = useState({
        search: ''
    });

    const navigate = useNavigate();
    //   const [Isdelete, setDelete] = useState(false);


    const handleEdit = (id, index) => {
        const data = getData();
        const singlerecord = data.filter((d) => {
            return d.id === id;
        })
        navigate('/edit', { state: { single: singlerecord[0], index: index } });
    }

    const handleviwe = (id, index) => {
        const data = getData();
        const viwerecord = data.filter((d) => {
            return d.id == id;
        })
        navigate('/viwe', { state: { single: viwerecord[0], index: index } });
    }


    const handleDelete = (id) => {
        const data = getData();

        const deleterecord = data.filter((d) => {
            return d.id != id
        })

        localStorage.setItem("empData", JSON.stringify(deleterecord));
        setEmpData(deleterecord)


    }

    const handlefilter = (e) => {
        let value = e.target.value;

        let ndata = getData();
        if (value != -1) {
            const filterdata = ndata.filter((emp) => {
                return emp.cource == value
            })

            setEmpData(filterdata);
        }
        else {
            setEmpData(ndata);

        }
    }

    const handleSearch = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        setSearchData({ [name]: val })

        let mydata = getData();

        let serchdata = mydata.filter((data) => {
            return data.fname.toLowerCase().indexOf(val.toLowerCase()) > -1;
        })

        setEmpData(serchdata);
    }

    const handlesort = (type) => {
        let alldata = getData()

        if (type === "ase") {

            let sortdata = alldata.sort((empA, empB) => {
                return empA["fname"].localeCompare(empB["fname"])
            })
            setEmpData(sortdata)

        } else {
            let sortdata = alldata.sort((empA, empB) => {
                return empB["fname"].localeCompare(empA["fname"])
            })
            setEmpData(sortdata)
        }


    }


    useEffect(() => {
        let alldata = getData()
const allData = [...new Set(alldata.map(data => data.cource))]
setOption(allData);
    },[])


    return (

        <>
            <Container>
                <br />
                <br />


                <div className="d-flex justify-content-between">
                    <div className="col-2">
                        <label>Cource </label>
                        <select onChange={handlefilter}>
                            <option value={"-1"}>All</option>
                            {
                                option.map((opt) => {
                                    return (
                                        <>
                                            <option value={opt}>{opt}</option>
                                        </>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <br />

                    <div className="col-2">
                        <button type='button' className='btn btn-info' onClick={(e) => handlesort("ase")}>A - Z</button>
                        {
                            ' '
                        }
                        <button type='button' className='btn btn-info' onClick={(e) => handlesort("dec")}>Z - A</button>
                    </div>
                    <div className="col-3">
                        <input type="text" placeholder='Search' onChange={(e) => handleSearch(e)} />
                    </div>


                </div>

                <br />
                <br />
                <br />



                {
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Contact</th>
                                <th>cource</th>
                                <th>Gender</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                empData.map((data, index) => {

                                    return (
                                        <>
                                            <tr>
                                                <td>{
                                                    data.id
                                                }</td>
                                                <td>
                                                    {
                                                        data.fname + ' ' + data.lname
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        data.email
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        data.password
                                                    }
                                                </td>

                                                <td>{
                                                    data.contact
                                                }</td>
                                                <td>
                                                    {
                                                        data.cource
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        data.gender
                                                    }
                                                </td>
                                                <td>
                                                    <Dropdown as={ButtonGroup}>
                                                        <Button variant="light"><i class="fa-solid fa-ellipsis"></i></Button>

                                                        <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() =>  handleEdit(data.id,index)}>Edit</Dropdown.Item>
                                                            <Dropdown.Item  onClick={() =>  handleviwe(data.id,index)}>Viwe</Dropdown.Item>
                                                            <Dropdown.Item onClick={() =>  handleDelete(data.id)}>Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                        </>
                                    )

                                })
                            }
                        </tbody>
                    </Table>


                }
            </Container>
        </>
    )

}

export default ViewData