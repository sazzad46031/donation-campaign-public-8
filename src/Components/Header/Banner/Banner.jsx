const Banner = () => {
    const handleSearch = ()=> {
        const serachField = document.getElementById('search-field')
        const searchText = serachField.value
    } 
    
    return (
        <div className="text-center">
            <h2 className="text-5xl font-bold mt-32">I Grow By Helping People In Need</h2>
            <input id="search-field" className="p-4 rounded-lg border mt-10" type="text" placeholder="Search here..."></input>
            <button onClick={handleSearch} className="bg-red-600 text-white py-4 px-6 rounded-e-lg">Search</button>
        </div>
    );
};

export default Banner;