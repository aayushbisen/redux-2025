import { useAppDispatch, useAppSelector } from '../../app/store';
import { decrement, increment, selectCount } from './counterSlice';

export const Counter = () => {
  // selectCount is a selector function that takes the root state as an argument and returns the counter value
  const count = useAppSelector(selectCount);

  // dispatch is a function that takes an action creator or an action and sends it to the store
  const dispatch = useAppDispatch();
  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(decrement())}
        style={{
          marginRight: '10px',
        }}
      >
        -
      </button>
      <span>counter: {count}</span>
      <button
        type="button"
        onClick={() => dispatch(increment())}
        style={{
          marginLeft: '10px',
        }}
      >
        +
      </button>
    </div>
  );
};
