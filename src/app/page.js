import axios from 'axios'

const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/api/example");
    return res.data.data; 
};

const Home = async () => {
    const data = await fetchData();

    return (
        <div>
            <ul>
                {data.map((item) => (
                    <li key={item._id}>{item.name}: {item.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
