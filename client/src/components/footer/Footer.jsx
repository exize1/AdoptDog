import './footer.css'
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { update } from '../../FormsSlice';
import { useState } from 'react';


const Footer = () => {

    const [usersDetails, setDetails] = useState([])

    const schema = Yup.object().shape({
        fullName: Yup.string()
          .required("Pleasse enter your name"),
    
        email: Yup.string().email()
          .required("Pleasse enter password"),
    
        phone: Yup.string()
          .required("Pleasse enter your password again")
          .min(10, "Phone number should containe 10 numbers exactly")
          .max(10, "Phone number should containe 10 numbers exactly")
          .matches(/[0-9]/, "phone number can contain numbers only."),
      });

    //   const getTodos = () => {
    //     axios.get('/api/formers')
    //         .then((res) => {
    //             res.data && setDetails(res.data)
    //         })
    //         .catch((err) => console.log(err));
    //     }

    //     const postTodo = (values) => {
    //         const user = {
    //             fullName: values.fullName,
    //             email: values.email,
    //             phone            }
    //         change !== "" && 
    //         axios.post('/api/formers', user)
    //             .then((res) => {
    //                 res.data && setChange("") 
    //             })
    //             .catch((err) => console.log(err));
    //     }
      

      const handleSubmition = (values) => {
        const value = {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone
      };
      dispatch(update(value));
    //   postTodo(value)
  };
  const dispatch = useDispatch();
      
    return(
        <div className="footer-container">
            <div className="form-contact-container">
                <Formik 
                    initialValues={{
                        fullName: "",
                        email: "",
                        phone: ""
                    }}
                    onSubmit={(values) => handleSubmition(values)}
                    validationSchema={schema}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            errors,
                            touched,
                        }) => (
                            <form action="" onSubmit={handleSubmit} noValidate>
                                <div className="form-floating">
                                    <input name="fullName" type="text" className="form-control" id="floatingInput" placeholder="שם הפונה *" onChange={handleChange} value={values.fullName} onBlur={handleBlur}/>
                                    <label for="floatingInput" className="form-label">שם הפונה *</label>
                                    <p className="error-message">{errors.fullName && touched.fullName && errors.fullName}</p>
                                </div>
                                <div className="form-floating">
                                    <input name="email" type="email" className="form-control" id="floatingInput" placeholder="כתובת אי-מייל *" onChange={handleChange} value={values.email} onBlur={handleBlur}/>
                                    <label for="floatingInput" className="form-label">כתובת אי-מייל *</label>
                                    <p className="error-message">{errors.email && touched.email && errors.email}</p>
                                </div>
                                <div className="form-floating">
                                    <input name="phone" type="text" className="form-control" id="floatingInput" placeholder="טלפון*" onChange={handleChange} value={values.phone} onBlur={handleBlur}/>
                                    <label for="floatingInput" className="form-label">טלפון*</label>
                                    <p className="error-message">{errors.phone && touched.phone && errors.phone}</p>
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control" id="floatingInput" rows="3"  placeholder="תוכן הפנייה *"></textarea>
                                    <label for="floatingInput" className="form-label">תוכן הפנייה *</label>
                                </div>
                                <button type="submit" className="btn btn-primary">שליחה</button>
                            </form>
                            )}
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