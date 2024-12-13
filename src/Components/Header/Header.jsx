import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router'
import { serachName } from '../../services/Actions/studentsAction';

const Header = () => {

    const { searchTerm } = useSelector(state => state.studentsReducer); 
    
        const dispatch = useDispatch();
    const handleSearch = (e) => {
        const value = e.target.value;

        console.log("value", value);
        
        dispatch(serachName(value));
    };

    return (
        <div className='bg-dark p-4'>
            <Container>
                <div className='d-flex align-items-center justify-content-between'>
                    <h1 className='text-light'>CRUD</h1>
                    <div className='d-flex gap-3'>
                        <Link to={'/'} className='text-light text-decoration-none'>FORM</Link>
                        <Link to={'/view'} className='text-light text-decoration-none'>VIEW</Link>
                        <Link to={'/delete'} className='text-light text-decoration-none'>DELETE-REC</Link>
                    </div>
                    <div>
                        <form class="d-flex mx-auto" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm}
                                onChange={handleSearch} />
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header
