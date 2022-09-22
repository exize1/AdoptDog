import { Formik } from "formik"
import { useState } from "react";
import * as Yup from "yup";

const NoResoultModal = ({age, size, gender, name}) => {
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

      const [alert, setAlert] = useState(false)

      
      const [open, setOpen] = useState(false)

      const handleSubmition = () => {
        setAlert(true)
    }

      const handleOpen = () => {
          setOpen(true)
      }
      
      const handleClose = () => {
          setOpen(false)
      }
  
      return(
          <div className='modal-container'>
              <button onClick={() => handleOpen()} type="button" className="btn btn-primary">
              {name}
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
                            <div className="modal-details-container">
                                <button className="btn btn-secondary dropdown-toggle modal-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {gender ? gender: "הכל" }
                                </button>
                                <ul className="dropdown-menu">
                                    <li ><a className="dropdown-item" href="#">זכר</a></li>
                                    <li ><a className="dropdown-item" href="#">נקבה</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">הכל</a></li>
                                </ul>
                                <button className="btn btn-secondary dropdown-toggle modal-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {age ? age: "הכל"} 
                                </button>
                                <ul className="dropdown-menu">
                                    <li ><a className="dropdown-item" href="#">עד שנה</a></li>
                                    <li><a className="dropdown-item" href="#">מעל שנה</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">הכל</a></li>
                                </ul>
                                <button className="btn btn-secondary dropdown-toggle modal-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {size ? size: "הכל"}
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">גדול/ה</a></li>
                                    <li><a className="dropdown-item" href="#">בינוני/ת</a></li>
                                    <li><a className="dropdown-item" href="#">קטן/ה</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">הכל</a></li>
                                </ul>
                            </div>
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
                                      <button type="submit" className="btn btn-primary">Save changes</button>
                                  </form>
                                  )}
                              </Formik>
                          </div>
                      </div>
                      <div className='modal-footer-contianer modal-footer'>
                          <button onClick={() => handleClose()} type="button" className="btn btn-secondary close-btn">Close</button>
                      </div>
                  </div>
              </div>
              }
          </div>  
    )
}

export default NoResoultModal