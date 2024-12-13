import React from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import not from '../../assets/not.jpg'

const DeleteData = () => {

    const { deleteData, isError, isLodig, errorMsg } = useSelector((state) => state.studentsReducer);

    return (
        <div>
            <Container>
                <h1 className="text-center mb-5 mt-4">DELETE-DATA</h1>
                {
                    isError ?
                        <h1>{errorMsg}</h1>
                        :
                        isLodig ?
                            <h1>Loading...</h1>
                            :
                            deleteData.length === 0 ?
                                <div className='text-center'>
                                    <img src={not} style={{ width: "500px", height: "500px" }} />
                                    <p className='fs-4'>No Data Found</p>
                                </div>
                                :
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">No.</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">First-Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            deleteData.map((rec, index) => {
                                                return (
                                                    <tr key={index} style={{verticalAlign: "middle"}}>
                                                        <th>{index + 1}</th>
                                                        <td>
                                                            <img src={rec.img} style={{width: "50px", height: "50px", borderRadius: "50%"}} />
                                                        </td>
                                                        <td>{rec.name}</td>
                                                        <td>{rec.email}</td>
                                                        <td>{rec.phone}</td>
                                                        <td>{rec.address}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                }
            </Container>
        </div>
    )
}

export default DeleteData