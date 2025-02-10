import Maya from './assets/maya-logo.png';
import mayaChip from './assets/chip.jpg';
import blackM from './assets/black-m.png';
import masterCard from './assets/master-card.png';
import mayaChipConnection from './assets/chip-connection.png';

function Card() {

    const card = {
        width: '500px',
        backgroundColor: 'black',
        borderRadius: '10px',
    }

    const label = {
        fontSize: '.8rem',
    }

    const mayaLogo = {
        width: '150px',
    }

    const chip = {
        width: '50px',
        marginRight: '5px',
    }

    const styleMasterCard = {
        width: '100px',
    }


    return (
        <div className="card shadow text-white" style={card}>
            <div className="card-header px-5 d-flex justify-content-between align-items-center">
                <label style={label}>@alfonso_christian</label>
                <img src={Maya} style={mayaLogo} alt="maya logo" />
            </div>
            <div className="card-body px-5">
                <img src={mayaChip} style={chip} alt="maya chip" />
                <img src={mayaChipConnection} alt="" />
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center mt-3">
                <img src={blackM} alt="" />
                <img src={masterCard} style={styleMasterCard} alt="" />
            </div>
        </div>
    );

}

export default Card;