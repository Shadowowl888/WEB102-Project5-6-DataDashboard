import { useEffect, useState } from "react";

const List = ({ setTopBrewery }) => {
    const [breweries, setBreweries] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [cityFilter, setCityFilter] = useState("");
    const [stateFilter, setStateFilter] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/?per_page=10000`);
            const data = await response.json();
            setBreweries(data);
            setTopBrewery(data[25]);
            console.log(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const results = breweries.filter((brewery) => {
            const nameMatch = brewery.name.toLowerCase().includes(searchInput.toLowerCase());
            const stateMatch = !stateFilter || (brewery.state && brewery.state.some(state => state.toLowerCase().includes(stateFilter.toLowerCase())));
            const cityMatch = !cityFilter || (brewery.city && brewery.city.some(city => city.toLowerCase().includes(cityFilter.toLowerCase())));
            return nameMatch && stateMatch && cityMatch;
        });
        setFilteredResults(results)
    },  [searchInput, cityFilter, stateFilter, breweries]);

    return (
        <div>
            <div className="search-filter">
                <input  
                    type="text"
                    placeholder="Search brewery..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="input-container"
                />
                <select value={stateFilter} onChange={(e) => setCityFilter(e.target.value)} className="input-container">
                    <option value="">Filter by city...</option>
                    {breweries.map((brewery, index) => (
                        <option key={index} value={brewery.city}>{brewery.city}</option>
                    ))}
                </select>
                <select value={stateFilter} onChange={(e) => setStateFilter(e.target.value)} className="input-container">
                    <option value="">Filter by state...</option>
                    {breweries.map((brewery, index) => (
                        <option key={index} value={brewery.state}>{brewery.state}</option>
                    ))}
                </select>
            </div>
            
            {filteredResults.map((brewery, index) => (
                <div key={index} className="main-list">
                    <h2>{brewery.name}</h2>
                    <h4>Address: {brewery.street} {brewery.city}, {brewery.state}</h4>
                    <h5>{brewery.brewery_type.toUpperCase()} Berwery</h5>
                    <p><a href={brewery.website_url} target="_blank">{brewery.name}</a></p>
                </div>
            ))}
        </div>
    );
};

export default List;