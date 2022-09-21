import './dogcard.css'
import DogModal from './ModalDog'
import NewDogModal from './NewModalGod'

const DogCard = ({ dog }) => {


    return(
        <div className="dog-card-container">
            <div className="card text-bg-dark">
                <span className="adopted-mark">✅</span>
                <img src={dog.src} className="dog-card-image card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="dog-card-title card-title">{dog.dogName}</h5>
                    <p className="dog-card-description card-text">{dog.shortDescription}</p>
                </div>
            </div>
            <NewDogModal dog={dog}></NewDogModal>
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