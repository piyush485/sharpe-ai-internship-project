import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// Registering the chart to use its methods 
ChartJS.register(ArcElement, Tooltip, Legend);

// Data received from the API call is processed here
const Data = () => {
    const [posts, setPosts] = useState([]);
    const [chartData, setChartData] = useState(null);
    const [allPosts, setAllPosts] = useState(0);
    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            const data = await response.json();
            setAllPosts(data);
            const filteredPosts = data.filter(post => post.userId === 1);
            setPosts(filteredPosts);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // This useEffect will fetch the data from the API 
    useEffect(() => {
        fetchData();
    }, []);

    // This useEffect is responsible for the creation of Pie chart 
    useEffect(() => {
        if (posts.length > 0) {
            const postsByUser1 = posts.filter(post => post.userId === 1);
            const numOfPostsByUser1 = postsByUser1.length;

            // Prepare data for the pie chart
            const data = {
                labels: ['Posts by User ID 1', 'Other Posts'],
                datasets: [
                    {
                        data: [numOfPostsByUser1, allPosts.length - numOfPostsByUser1],
                        backgroundColor: ['#FF6384', '#36A2EB'],
                        color: ['white', 'white']
                    },
                ],
            };
            setChartData(data); // Set chart data to state
        }
    }, [posts]);

    const options = {
        plugins:
        {
            legend:
            {
                display: true,
                labels:
                {
                    color: 'white',
                }
            }
        }
    }

return (
    <div className='flex flex-col sm:flex-row justify-around'>
        {/* Tabular data is shown from here  */}
        <div className="overflow-x-auto shadow-md sm:rounded-lg m-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Body
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {post.id}
                            </th>
                            <td className="px-6 py-4">
                                {post.title}
                            </td>
                            <td className="px-6 py-4">
                                {post.body}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Pie chart data is shown from here  */}
        <div className="flex w-full flex-col mx-auto my-20 p-5items-center bg-white border rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:text-white" style={{ width: '300px', margin: '20px' }}>
            {chartData && <Pie data={chartData} options={options} />}
        </div>
    </div>
);
};

export default Data;
