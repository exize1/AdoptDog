import Footer from "../../components/footer/Footer"
import About from "../../components/home-sections/about/About"
import Hero from "../../components/home-sections/hero/Hero"
import Navbar from "../../components/navbar/Navbar"

const Home = () => {
    return(
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Footer/>
        </>
    )
}

export default Home