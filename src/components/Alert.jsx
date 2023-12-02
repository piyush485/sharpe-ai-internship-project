import PropTypes from 'prop-types';

// Alert Component displays the errors or responses when the form is submitted 
function Alert(props) {

    const cap = (sentence) => {
        const lower = sentence.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div className='h-10 w-1/2'>
            {props.alert && console.log(props.alert.type)}
            {props.alert && <div className={`alert ${props.alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'} alert-dismissible  border rounded-lg show `} role="alert">
                <strong className='text-white p-5'>{cap(props.alert.alertMsg)}</strong>
            </div>}
        </div>
    )
}
// ${ props.alert.type }
export default Alert

Alert.defaultProps = {
    alert: null
}

Alert.prototype = {
    alert: {
        type: PropTypes.string,
        alertMsg: PropTypes.string
    }
}