import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './slices/counter.slice';

function Counter() {
    const dispatch = useDispatch();

    const counter = useSelector((state: any) => {
        return state.counter;
    });

    const vendors = useSelector((state: any) => {
        return state.vendors;
    });
    console.log(vendors);
    return (

        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h2>Counter: {counter.value} </h2>

                    <button className='btn btn-success me-2' onClick={() => dispatch(increment({}))}>Increment</button>
                    <button className='btn btn-warning me-2' onClick={() => dispatch(decrement({}))}>Decrement</button>
                    <button className='btn btn-danger' onClick={() => dispatch(reset({}))}>Reset</button>
                </div>
            </div>


        </div>
    )


}

export default Counter;