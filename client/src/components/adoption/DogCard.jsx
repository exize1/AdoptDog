import './dogcard.css'
import DogModal from './DogModal'

const DogCard = ({ dog }) => {


    return(
        <div className="dog-card-container">
            <div className="card text-bg-dark">
                <img src={dog.src} className="dog-card-image card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="dog-card-title card-title">{dog.dogName}</h5>
                    <p className="dog-card-description card-text">{dog.shortDescription}</p>
                </div>
            </div>
            <DogModal dogName={dog.dogName}></DogModal>
            <div className="row">
                <div className="col">
                    {dog.gender}
                </div>
                <div className="col">
                    {dog.age}
                </div>
                <div className="col">
                    {dog.size}
                </div>
            </div>
        </div>
    )
}

export default DogCard