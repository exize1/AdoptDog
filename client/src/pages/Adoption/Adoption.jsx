import './adoption.css'
import { useEffect, useState } from "react"
import DogCard from "../../components/adoption/DogCard"
import FilterSection from "../../components/adoption/FilterSection"
import axios from 'axios'
import DogModal from '../../components/adoption/ModalDog'
import NewDogModal from '../../components/adoption/NewModalGod'


const Adoption = () => {
    const [searchGender, setSearchGender] = useState("");
    const [searchAge, setSearchAge] = useState("");
    const [searchSize, setSearchSize] = useState("");

    const getDogs = () => {
        axios.get('/api/dogs')
            .then((res) => {
                res.data && setDogs(res.data)
            })
            .catch((err) => console.log(err));
    }

    const [dogs, setDogs] = useState([])
    
    useEffect(()=>{
        getDogs()
    },[])

    return(
        <div className="adoption-container">
            <FilterSection 
                setSearchGender={setSearchGender} 
                setSearchAge={setSearchAge}
                setSearchSize={setSearchSize}
            />
            <div className="cards-container">
                {dogs.filter((val) => {
                    if(searchGender == ""){
                        return val;
                    }else if(val.gender.includes(searchGender)){
                        return val;
                    }
                }).filter((val) => {
                    if(searchAge == ""){
                        return val;
                    }else if(val.age.includes(searchAge)){
                        return val;
                    }
                }).filter((val) => {
                    if(searchSize == ""){
                        return val;
                    }else if(val.size.includes(searchSize)){
                        return val;
                    }
                }).map( (dog) => <DogCard dog={dog}/>)}

            </div>
            
        </div>
    )
}

export default Adoption