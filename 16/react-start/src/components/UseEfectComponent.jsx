import React, {useState, useEffect} from 'react';

function UseEfectComponent(props) {
    // useEffect(()=>{}) Виконується після кожного рендеру компоненту
    // useEffect(()=>{},[]) Виконується один раз при монтуванні елементу на сторінці
    // useEffect(()=>{},[value]) Виконується один раз при монтуванні елементу на сторінці
    let [count, setCount] = useState(0);
    // useEffect(()=>{
    //     document.title = `Count ${count}`
    //     return()=>{
    //         console.log('Виконується після кожного рендеру компоненту');
    //     }
    // });
    useEffect(()=>{
        document.title = `Count ${count}`
        return()=>{
            console.log('Виконується після кожного рендеру компоненту');
        }
    },[]);
    // useEffect(()=>{
    //     document.title = `Count ${count}`
    //     return()=>{
    //         console.log('Виконується після кожного рендеру компоненту');
    //     }
    // },[count]);
    return (
        <div>
            <p>
                {count}
                <button onClick={()=>{setCount(count=>count+1)}} className="btn btn-primary">
                    +1
                </button>
            </p>
        </div>
    );
}

export default UseEfectComponent;