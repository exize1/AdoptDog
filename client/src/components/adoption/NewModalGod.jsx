import './modaldog.css'
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { update } from '../../FormsSlice';
import { useState } from 'react';

const NewDogModal = ({dog}) => {
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

      
      const handleSubmition = (values) => {
          const value = {
          fullName: values.fullName,
          email: values.email,
          phone: values.phone
        };
        dispatch(update(value));
    };

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    return(
        <div className='modal-container'>
            <button onClick={() => handleOpen()} type="button" className="btn btn-primary">
            😇 קצת עליי
            </button>
        { open &&
            <div className='modal-background'>
                <div className='modal-fade-container'>
                    <div className='modal-title-contianer modal-header'>
                        <h5 className="modal-title" id="exampleModalLabel">New Modal title</h5>
                        <button onClick={() => handleClose()} type="button" className="btn-close"></button>
                    </div>
                    <div className='add-overflow'>
                        <div className='modal-body-contianer'>
                            <div className='modal-dog-img-container'>
                                <img  className='modal-dog-img' src={dog.src} alt="" />
                            </div>
                            <p>{dog.description}</p>
                            <h3>רוצים לאמץ את {dog.dogName} ?</h3>
                            <p>מלאו את פרטיכם או התקשרו *4955</p>
                            <p>*אימוץ מתבצע על ידי בן משפחה בן 18 פלוס</p>
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
                                    <div className="form-floating mb-3">
                                        <input name="fullName" type="text" className="form-control" id="floatingInput" placeholder="שם ושם משפחה*" onChange={handleChange} value={values.fullName} onBlur={handleBlur}/>
                                        <label for="floatingInput">שם ושם משפחה*</label>
                                        <p className="error-message">{errors.fullName && touched.fullName && errors.fullName}</p>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input name="email" type="email" className="form-control" id="floatingInput" placeholder=">אימייל*" onChange={handleChange} value={values.email} onBlur={handleBlur} />
                                        <label for="floatingInput">אימייל*</label>
                                        <p className="error-message">{errors.email && touched.email && errors.email}</p>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input name="phone" type="text" className="form-control" id="floatingInput" placeholder="טלפון*" onChange={handleChange} value={values.phone} onBlur={handleBlur} />
                                        <label for="floatingInput">טלפון*</label>
                                        <p className="error-message">{errors.phone && touched.phone && errors.phone}</p>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea type="email" className="form-control" id="floatingInput" placeholder="הודעה אישית*"/>
                                        <label for="floatingInput">הודעה אישית*</label>
                                    </div>
                                    <button type="submit"></button>
                                </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div className='modal-footer-contianer modal-footer'>
                        <button onClick={() => handleClose()} type="button" className="btn btn-secondary close-btn">Close</button>
                        <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default NewDogModal