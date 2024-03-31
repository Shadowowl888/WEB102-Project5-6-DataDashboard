const Card = ({ info, label }) => {
    return (
        <div className="card" >
            <h3>{label}</h3>
            <p>{info}</p>
        </div>
    );
};

export default Card;