import React, { useState, useRef } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const Option1 = useRef(null);
    const Option2 = useRef(null);
    const Option3 = useRef(null);
    const Option4 = useRef(null);

    const option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (!lock) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore((prev) => prev + 1);
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans - 1].current.classList.add("correct");
            }
        }
    };

    const next = () => {
        if (lock) {
            if (index === data.length - 1) {
                console.log("Setting result to true"); // Debug log
                setResult(true);
                return;
            }
            const nextIndex = index + 1;
            setIndex(nextIndex);
            setQuestion(data[nextIndex]);
            setImageIndex(0);
            setLock(false);
            option_array.forEach((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
            });
        }
    };

    const prevImage = () => {
        setImageIndex((prevIndex) => (prevIndex === 0 ? question.images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setImageIndex((prevIndex) => (prevIndex === question.images.length - 1 ? 0 : prevIndex + 1));
    };

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
        setImageIndex(0);
        navigate('/login'); // Uncomment if you want to navigate after reset
    };

    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            {/* Carousel for the current question */}
            {!result && (
                <div className="carousel">
                    <button onClick={prevImage}>{"<"}</button>
                    <img src={question.images[imageIndex]} alt="carousel" />
                    <button onClick={nextImage}>{">"}</button>
                </div>
            )}

            {result ? (
                <>
                    <h2>You Scored {score} out of {data.length}</h2>
                    
                </>
            ) : (
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
                        <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
                        <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
                        <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
                    </ul>
                    <button onClick={next}>Next</button>
                    <div className="index">{index + 1} of {data.length} questions</div>
                </>
            )}
        </div>
    );
};

export default Quiz;
