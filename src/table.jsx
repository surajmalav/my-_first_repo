import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";


const Table = ({data ,deleteHandle,EditHandle}) => {
    // const [mode, setMode] = useState("Submit Information")
    const [index, setindex] = useState()

 

  

     
    
    return (
        <>
            <table class="table table-dark table-striped mt-5">
                <thead>
                    <tr>
                        <th scope="col">Sr</th>

                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Password</th>
                        <th scope="col">Confirm Password</th>
                        <th scope="col">Address</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>



                    </tr>
                </thead>
                <tbody>


                    {
                        data.map((e, i) => {
                            return (
                                <>

                                    <tr  >
                                        <th scope="row">{i + 1}</th>
                                        <td>{e.fname}</td>
                                        <td>{e.lname}</td>
                                        <td>{e.email}</td>
                                        <td>{e.mobile}</td>
                                        <td>{e.password}</td>
                                        <td>{e.cpassword}</td>
                                        <td>{e.address}</td>
                                        <td><button onClick={() => deleteHandle(i)} className="btn btn-danger"><FaRegTrashAlt /></button></td>
                                        <td><button onClick={() => EditHandle(e, i)} className="btn btn-primary"><FaEdit /></button></td>



                                    </tr>
                                </>
                            )
                        })
                    }



                </tbody>
            </table>
        </>
    )
}

export default Table