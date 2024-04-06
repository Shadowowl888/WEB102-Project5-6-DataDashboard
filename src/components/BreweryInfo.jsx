import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BreweryInfo = ({ id, name, city, state, type, link }) => {
    const [label, setLabel] = useState(null);

    useEffect(() => {
        const getBreweryInfo = async () => {
            const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_state=${state}`);
            const json = await response.json();
            setLabel(json);
        };
        getBreweryInfo().catch(console.error);
    }, [state])

    return (
        <div>
            {label ? (
                <div>
                    <tr key={id}>
                        <td>
                            <Link
                                style={{ color: "#cbaa75", textAlign: "left" }}
                                to={`/BreweryDetail/${id}`}
                            >
                            {name}
                            </Link>
                        </td>
                        <td>{city}</td>
                        <td>{state}</td>
                        <td>{type}</td>
                    </tr>
                </div>
            ) :
            null
            }
        </div>
    );
};

export default BreweryInfo;