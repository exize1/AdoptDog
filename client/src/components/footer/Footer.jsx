import './footer.css'
import { Formik } from "formik";
import * as Yup from "yup";


const Footer = () => {
    return(
        <div className="footer-container">
            <div className="form-contact-container">
                <Formik >
                    <form>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="שם הפונה *"/>
                        <label for="floatingInput" className="form-label">שם הפונה *</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="כתובת אי-מייל *"/>
                        <label for="floatingInput" className="form-label">כתובת אי-מייל *</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="טלפון*"/>
                        <label for="floatingInput" className="form-label">טלפון*</label>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" id="floatingInput" rows="3"  placeholder="תוכן הפנייה *"></textarea>
                        <label for="floatingInput" className="form-label">תוכן הפנייה *</label>
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