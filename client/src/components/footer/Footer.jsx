import './footer.css'
import { Formik } from "formik";
import * as Yup from "yup";


const Footer = () => {
    return(
        <div className="footer-contianer">
            <div className="form-contact-container">
                <Formik >
                    <form>
                    <div className="">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="שם הפונה *"/>
                    </div>
                    <div className="">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="כתובת אי-מייל *"/>
                    </div>
                    <div className="">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="טלפון*"/>
                    </div>
                    <div className="">
                        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="תוכן הפנייה *"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">שליחה</button>
                    </form>
                </Formik>
            </div>
            <div className="details-container">
                <h4>פותחים את הלב לכלבי דימונה</h4>
                <div className='socials-container'>

                </div>
                <div className='location-container'>
                    <p>מיקום המכלאה</p>
                    <p>טלפון: #XXXX</p>
                </div>
                <div className='working-hours-container'>
                    <p>שעות הפעילות:</p>
                    <p>א'-ה' 10:00-15:00</p>
                    <p>שישי וערבי חג 10:00-15:00</p>
                    <p>שבת וימי חג 10:00-15:00</p>
                </div>
            </div>
        </div>
    )
}

export default Footer