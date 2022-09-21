import heart from './heartlogo.png'
import css from './about.css'
const About = () => {
    return(
        <div className="about-container">
            <h1 className='abouttitle'>רקע על היוזמה</h1>
            <img className='hearticon' src={heart}/> 
            <p className='abouttext'>  היוזמה ״פותחים את הלב לכלבי דימונה״ היא יוזמה שנוצרה כאשר עיירית דימונה 
                החליטה לפתור את מצוקת אימוץ הכלבים הקיימת בעיר , הבעיה העיקרית הייתה עומס ותפוסה גדולה במכלאות הכלבים 
                לאימוץ שבעיר אבל תושבי העיר אשר מעוניינים לאמץ כלב לא מודעים בכלל למכלאות העירונית שמהם ניתן לאמץ כלבים 
                מדהימים ,להציל אותם ולהרויח חבר לכל החיים קחו חלק בפרויקט ואמצו כלב לביתכם עוד היום ,לא סתם אומרים שהכלב הוא חברו הטוב ביותר של האדם 
                ,כמו כן מגיעה תודה ענקית לשאר העמותות והארגונים שלקחו חלק בהקמת המיזם ותרמו להצלחתו בעיר דימונה
            
            </p>
            <div className="Animation">
      <div className="runningLine">
        <div className="one">
          <span>
            <img src={require("./animal.png")} alt="" className="imges" />
            <img src={require("./lovepet.png")} alt="" className="imges" />
            <img src={require("./baaluhaim.png")} alt="" className="imges" />
            <img src={require("./dimona.png")} alt="" className="imges" />
            <img src={require("./logomishmar.png")} alt="" className="imges" />
            <img src={require("./animals.png")} alt="" className="imges" />
          </span>
        </div>
        <div className="one two">
          <span>
          <img src={require("./animal.png")} alt="" className="imges" />
            <img src={require("./lovepet.png")} alt="" className="imges" />
            <img src={require("./baaluhaim.png")} alt="" className="imges" />
            <img src={require("./dimona.png")} alt="" className="imges" />
            <img src={require("./logomishmar.png")} alt="" className="imges" />
            <img src={require("./animals.png")} alt="" className="imges" />
          </span>
        </div>
      </div>
    </div>
        </div>
    )
}

export default About