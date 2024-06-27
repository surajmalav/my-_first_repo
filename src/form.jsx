import { useState } from "react"
// import logo from './logo.svg';
// import './App.css';
import { FaEdit } from "react-icons/fa";
import Table from "./table";
function Form() {

  const [formData, setFormData] = useState({})
  const [allData, setallData] = useState([])
  const [mode, setMode] = useState("Submit Information")
  const [index, setindex] = useState()


  const chnageHandle = (e) => {
    // setFormData()
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }

  const submitHandle = (e) => {
    e.preventDefault()
    if (mode === "Submit Information") {
      AddData()
    } else {
      upDateHandle()
    }
  }
  const AddData = () => {
    setallData([...allData, formData])
    setFormData({ fname: "", lname: "", email: "", mobile: "", password: "", cpassword: "", address: "" })
  }
  const upDateHandle = () => {
    let localData = [...allData]
    localData[index] = formData
    setallData(localData)
    setMode("Submit Information")
    setFormData({ fname: "", lname: "", email: "", mobile: "", password: "", cpassword: "", address: "" })

  }

  const deleteHandle = (id) => {
    let localData = [...allData]
    localData.splice(id, 1)
    setallData(localData)
  }
  const EditHandle = (e, i) => {
    setindex(i)

    setFormData({ fname: e.fname, lname: e.lname, email: e.email, mobile: e.mobile, password: e.password, cpassword: e.cpassword, address: e.address })
    setMode("Update Information")
  }
  return (
    <div className="">
      <div className='container text-start'>
        <div className='row '>
          <div className="col-md-6">
            <img className="mt-5" src={require("./img/img1.png")} width="100%" />
          </div>
          <div className="col-md-6 p-5">
            <div>
              <h1 className="text-center"><em>Form Imformation</em></h1>

            </div>
            <form className="rounded-5 p-5 bg-dark text-light" >
              <div className='row'>
                <div className='col-md-6'>
                  <label className='text-start'>Fname</label>
                  <input type='text' name="fname" value={formData.fname} onChange={chnageHandle} className='form-control' />
                </div>
                <div className='col-md-6'>
                  <label className='text-start'>Lname</label>
                  <input type='text' name="lname" value={formData.lname} onChange={chnageHandle} className='form-control' />
                </div>
                <div className='col-md-6'>
                  <label className='text-start'>email</label>
                  <input type='email' name="email" value={formData.email} onChange={chnageHandle} className='form-control' />
                </div>
                <div className='col-md-6'>
                  <label className='text-start'>mobile</label>
                  <input type='tel' maxLength={10} name="mobile" value={formData.mobile} onChange={chnageHandle} className='form-control' />
                </div>
                <div className='col-md-6'>
                  <label className='text-start'>password</label>
                  <input type='password' name="password" value={formData.password} onChange={chnageHandle} className='form-control' />
                </div>
                <div className='col-md-6'>
                  <label className='text-start'>cPassword</label>
                  <input type='password' name="cpassword" value={formData.cpassword} onChange={chnageHandle} className='form-control' />
                </div>
                <div className='col-md-12'>
                  <label className='text-start'>address</label>
                  <textarea className="form-control" value={formData.address} name="address" onChange={chnageHandle} ></textarea>
                </div>
                <div className='col-md-12 mt-3'>
                  <button className="btn btn-outline-light w-100" onClick={submitHandle}>{mode}</button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>

      <Table data={allData} deleteHandle={deleteHandle} EditHandle={EditHandle} />
    </div>
  );
}

export default Form;