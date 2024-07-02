import React, { useContext, useState ,useEffect} from 'react';
import DataContext from '../context/dataContext';
import sad from "./sad.png";
import happy from "./happy.png";
const Result = () => {
    const { showResult, quizs, marks, startOver }  = useContext(DataContext);
    const [overlaydisplay,setOverlay]=useState("active");
    useEffect(()=>{
        setOverlay("active");
        setTimeout(()=>{setOverlay('in-active')},1000);
    },[showResult]);
    return (
        <section className=" text-white relative" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className={`overlay ${overlaydisplay}`}>
                <div className={`suboverlay ${marks > (quizs.length * 5 / 2) ? 'active' : 'in-active'}`}>
                    <img src={happy}></img>
                </div>
                <div className={`suboverlay ${marks > (quizs.length * 5 / 2) ? 'in-active' : 'active'}`}>
                    <img src={sad}></img>
                </div>
            </div>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > (quizs.length * 5 / 2) ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className='mb-2 fw-bold'>{marks > (quizs.length * 5 / 2) ? 'Awesome!' : 'Oops!'}</h1>
                            <h3 className='mb-3 fw-bold'>Your score is {marks} out of {quizs.length * 5}</h3>

                            <button onClick={startOver} className='btn py-2 px-4 btn-light fw-bold d-inline'>Start Over</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;