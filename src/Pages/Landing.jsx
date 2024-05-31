import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTaskAsync, deleteTaskAsync } from '../Redux/Slice/taskSlice';

function Landing({ id }) {
    const [data, setData] = useState('');
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const add = () => {
        dispatch(addTaskAsync({ id, data }));
    };

    const del = (id) => {
        dispatch(deleteTaskAsync(id));
    };





    return (
        <>
            <div className='container'>
                <div>
                    <h1 className='text-center'>Data</h1>
                    <div className='d-flex justify-content-center align-items-center'>
                        <input onChange={(e) => setData(e.target.value)} type="text" className='form-control mt-5 w-100' />
                        <button onClick={() => add()} className='btn btn-success mt-5 ms-2'>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    {tasks?.length > 0 ? (
                        tasks.map((task, index) => (
                            <div key={index}>
                                <div className='container'>
                                    <div className='card mt-5 p-3' style={{ width: "80em" }}>
                                        <div className='d-flex'>
                                            <h3>{task.data}</h3>
                                        </div>
                                        <div>
                                            <button onClick={() => del(task.id)} className='btn text-danger'>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div >
                            <h1 className='text-center mt-5'>no data</h1>                        
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Landing;
