import './spinner.css';
import Spinner from 'react-bootstrap/Spinner';

export const SpinnerComp = () => {
    return(
        <div className='spinner-container'>
        <Spinner animation='border' role='status' className='spinner'>
            <span className='visually-hidden'>Loading...</span>
        </Spinner>
        </div>
    );
}