import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AddAsncy } from '../../services/Actions/studentsAction'
import { useNavigate } from 'react-router'

const AddForm = () => {

    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        phone: '',
        img: '',
        address: '',
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputData = (e) => {
        let { name, value } = e.target

        if (name === "phone") {
            value = value.replace(/[^0-9]/g, '');
        }
        setInputData({ ...inputData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (!inputData.name || !inputData.email || !inputData.phone) {
        //     alert("Please fill in all required fields");
        //     return;
        // }

        inputData.id = Math.floor(Math.random() * 1000).toString();

        dispatch(AddAsncy(inputData));

        navigate('/view')
    }

    return (
        <div>
            <Container>
            <h1 className="text-center mb-5 mt-4">ADD-FORM</h1>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label>First Name : </label>
                        <input type="text" placeholder="Enter Your First Name" name='name' value={inputData.name} onChange={handleInputData} className='mt-3 mb-2 form-control' required /><br />
                    </div>
                    <div className="col-md-6">
                        <label>Email : </label>
                        <input type="email" placeholder="Enter Your Email" name='email' value={inputData.email} onChange={handleInputData} className='mt-3 mb-2 form-control' required/><br />
                    </div>
                    <div className="col-md-6">
                        <label>Phone : </label>
                        <input type="tel" placeholder="Enter Your Phone Number" maxlength="10" name='phone' value={inputData.phone} onChange={handleInputData} className='mt-3 mb-2 form-control' required/><br />
                    </div>
                    <div className="col-md-6">
                        <label>Image : </label>
                        <input type="url" placeholder="Enter Your Image URL" name='img' value={inputData.img} onChange={handleInputData} className='mt-3 mb-2 form-control' required/><br />
                    </div>
                    <div className="col-12">
                        <label>Address : </label>
                        <textarea rows="4" cols="50" placeholder="Enter Your Address" name='address' value={inputData.address} onChange={handleInputData} className='mt-3 mb-2 form-control' required></textarea><br />
                    </div>
                    <div className="col-12">
                        <button type="submit" className='btn bg-black text-white mt-3'>Submit</button>
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default AddForm
