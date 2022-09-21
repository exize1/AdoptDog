import './dogmodal.css'
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { update } from '../../FormsSlice';

const DogModal = ({dog, index}) => {
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
    
    return(
        <div className="dog-modal-container">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                זה אני
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">    
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='modal-dog-img-container'>
                                <img  className='modal-dog-img' src={dog.src} alt="" />
                            </div>
                            <p>{dog.description}</p>
                            <h3>רוצים לאמץ את {dog.dogName}</h3>
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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DogModal