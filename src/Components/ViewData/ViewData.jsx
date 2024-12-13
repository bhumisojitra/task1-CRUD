import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsncy, singleAsncy } from '../../services/Actions/studentsAction';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import not from '../../assets/not.jpg'

const ViewData = () => {

    const { students, isError, isLodig, errorMsg, student, searchTerm, serachData } = useSelector((state) => state.studentsReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (id) => {
        dispatch(singleAsncy(id))
    }
    const handleDelete = (id) => {
        dispatch(deleteAsncy(id))
    }

    const filteredStudents = searchTerm
        ? serachData.filter((student) =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : students;

    useEffect(() => {
        if (student) {
            navigate('/edit')
        }
    }, [student])

    return (
        <div>
            <Container>
                <h1 className="text-center mb-5 mt-4">VIEW-DATA</h1>
                {
                    isError ?
                        <h1>{errorMsg}</h1>
                        :
                        isLodig ?
                            <h1>Loading...</h1>
                            :
                            filteredStudents.length === 0 ?
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
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filteredStudents.map((rec, index) => {
                                                return (
                                                    <tr key={index} style={{ verticalAlign: "middle" }}>
                                                        <th>{index + 1}</th>
                                                        <td>
                                                            <img src={rec.img} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                                                        </td>
                                                        <td>{rec.name}</td>
                                                        <td>{rec.email}</td>
                                                        <td>{rec.phone}</td>
                                                        <td>{rec.address}</td>
                                                        <td><button className='me-3 btn bg-dark text-light' onClick={() => handleEdit(rec.id)}><i className="bi bi-pen-fill"></i></button>
                                                            <button className='btn bg-dark text-light' onClick={() => handleDelete(rec.id)}><i className="bi bi-archive-fill"></i></button>
                                                        </td>
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

export default ViewData
