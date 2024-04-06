import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BreweryDetail = () => {
    const params = useParams();
    const [breweryDetails, setBreweryDetails] = useState(null);

    useEffect(() => {
        const getBreweryDetail = async () => {
            try {
                const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/${params.id}`);
                if (!response.ok) {
                    console.error("Failed to fetch data");
                }
                const brewery = await response.json();
                setBreweryDetails(brewery);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getBreweryDetail();
    }, [params.id]);

    if (!breweryDetails) {
        return <div>Loading...</div>;
    }

    const { name, address_1, state, country, postal_code, city, website_url } = breweryDetails;

    return (
        <div>
            <h1>{name}</h1>
            <h3>{address_1}</h3>
            <h4>{city}, {state} {postal_code}</h4>
            <p><a href={website_url} target="_blank">{website_url}</a></p>
        </div>
    );
};

export default BreweryDetail;