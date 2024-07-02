import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Start = () => {
    const {startQuiz, showStart} = useContext(DataContext);
    return (
        <section className='text-white text-center' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4'>Basic React JS Quiz</h1>
                        {/* <button  className="btn px-4 py-2 bg-light text-dark fw-bold">Start Quiz</button> */}
                        <button onClick={startQuiz}className='sylishbutton'>Start Quiz<span></span><span></span><span></span><span></span></button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;