

function Card() {

    const card = {
        width: '500px',
        backgroundColor: 'black',
    }

    const label = {
        fontSize: '.8rem',
    }


    return (
        <div className="card shadow text-white p-3" style={card}>
            <div className="card-header d-flex justify-content-between align-items-center">
                <label style={label}>@alfonso_christian</label>
                <h2 className="text-success">maya</h2>
            </div>
        </div>
    );

}

export default Card;