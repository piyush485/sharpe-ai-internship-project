import { useState } from 'react';
import Alert from './Alert';
import transaction from '../../public/transaction.jpg'

const Transaction = () => {

    // To store the data of the user 
    const [data, setData] = useState({
        walletAddress: '',
        amount: ''
    })
    const [alert, setAlert] = useState(null);
    const url = import.meta.env.VITE_FIREBASE_DATABASE_URL;

    // To call the Alert component with props and set the props 
    const showAlert = (message, type) => {
        setAlert({
            alertMsg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
            // setError('');
        }, 1500)
    }

    // On submitting the form, all the processes are done here 
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Form validation is done here 
        if (data.walletAddress.trim() === '') {
            showAlert('Wallet address cannot be empty', "danger");
            return;
        }

        if (!/^0x[a-fA-F0-9]{40}$/.test(data.walletAddress)) {
            showAlert('Please enter a valid Ethereum address (0x...)', "danger");
            return;
        }

        const amountNum = parseFloat(data.amount);
        if (isNaN(amountNum) || amountNum < 0 || amountNum > 10000) {
            showAlert('Please enter a valid amount between 0 and 10,000', "danger");
            return;
        }

        // Sending the data to the firebase realtime database 
        try {
            const { walletAddress, amount } = data
            const res = await fetch(url,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        walletAddress, amount
                    }),
                }
            );
            if (!res) {
                showAlert("Connection Failed", "danger");
                throw ("Connection Failed")
            }

            // Clear form after successful submission
            showAlert("Submission Sucessfull !!", "success");
            setData({ walletAddress: '', amount: '' });
        } catch (err) {
            showAlert('Failed to submit data. Please try again.', "danger");
        }
    };
    let name, value
    const handleOnChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setData({ ...data, [name]: value })
    }

    return (
        <>
            <Alert alert={alert} />
            <div className='h-screen'>
                <div className="flex flex-col mx-auto my-20 items-center bg-white border rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
                    <img className="object-cover w-full rounded-t-lg h-96 md:w-48 md:rounded-none md:rounded-s-lg" src={transaction} alt="NO" />
                    <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 ">
                        <form className="space-y-6" method='POST' onSubmit={handleFormSubmit}>
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Enter Wallet Details</h5>
                            <div>
                                <label htmlFor='walletAddress' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your wallet address</label>
                                <input
                                    type="text"
                                    name="walletAddress"
                                    id="walletAddress"
                                    autoComplete='off'
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                                    required
                                    value={data.walletAddress}
                                    onChange={handleOnChange} />
                            </div>
                            <div>
                                <label htmlFor='amount' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Your amount</label>
                                <input
                                    type="number"
                                    name="amount"
                                    id="amount"
                                    placeholder="0-10000"
                                    autoComplete='off'
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                    required
                                    value={data.amount}
                                    onChange={handleOnChange} />
                            </div>

                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Details</button>

                        </form>
                    </div>
                    <img src='' />
                </div>
            </div>
        </>
    );
};

export default Transaction;
