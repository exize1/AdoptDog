import { useState } from "react"
import "./volunteering.css"
import hand from './handlogo.png'
import backgroundvideo from '../home-sections/hero/dogvideobg2.mp4'

const Volunteering = () => {

    const [volunteerList, setvolunteerList] = useState([
        {
            title: "מתן עזרה לרופאי יחידת החילוץ",
            descriptopn: "ישנם התנדבויות רבות של עולם שלם ונותן הכלת לכולם וכל עוד אתה ממשיך אין עוד מספיק ואיתו יחד כולנו שם ומתי זה יפזיק אין יודע ואים יודעים ולמה שלא נמשיך כי אפשר יותר ואז מפסיק ועוד לא נגמרת ככל שיש יותר גס בהל דכהל ד כהםד זדשלךח גךלכחדםבח קררןדה דןל כהןםדה כגםדןד גמבקררי דגטבנ גדוחי כגחהט'וש גבשקג כבקושחגד",
            activityHours: ["א'-ה' 09:00-13:00", "שישי 13:00-16:00", "שבת 12:00 -15:00"]
        },
        {
            title: "טיול עם הכלבים",
            descriptopn: "ישנם התנדבויות רבות של עולם שלם ונותן הכלת לכולם וכל עוד אתה ממשיך אין עוד מספיק ואיתו יחד כולנו שם ומתי זה יפזיק אין יודע ואים יודעים ולמה שלא נמשיך כי אפשר יותר ואז מפסיק ועוד לא נגמרת ככל שיש יותר גס בהל דכהל ד כהםד זדשלךח גךלכחדםבח קררןדה דןל כהןםדה כגםדןד גמבקררי דגטבנ גדוחי כגחהט'וש גבשקג כבקושחגד",
            activityHours: ["א'-ש' 09:00-13:00"]
        },
        {
            title: "פעילות חינוכית עם הקהילה",
            descriptopn: "ישנם התנדבויות רבות של עולם שלם ונותן הכלת לכולם וכל עוד אתה ממשיך אין עוד מספיק ואיתו יחד כולנו שם ומתי זה יפזיק אין יודע ואים יודעים ולמה שלא נמשיך כי אפשר יותר ואז מפסיק ועוד לא נגמרת ככל שיש יותר גס בהל דכהל ד כהםד זדשלךח גךלכחדםבח קררןדה דןל כהןםדה כגםדןד גמבקררי דגטבנ גדוחי כגחהט'וש גבשקג כבקושחגד",
            activityHours: ["שישי 13:00-16:00", "שבת 12:00 -15:00"]
        },
        {
            title: "לקיחת חלק בהקמת ימי אימוץ",
            descriptopn: "ישנם התנדבויות רבות של עולם שלם ונותן הכלת לכולם וכל עוד אתה ממשיך אין עוד מספיק ואיתו יחד כולנו שם ומתי זה יפזיק אין יודע ואים יודעים ולמה שלא נמשיך כי אפשר יותר ואז מפסיק ועוד לא נגמרת ככל שיש יותר גס בהל דכהל ד כהםד זדשלךח גךלכחדםבח קררןדה דןל כהןםדה כגםדןד גמבקררי דגטבנ גדוחי כגחהט'וש גבשקג כבקושחגד",
            activityHours: ["שבת 11:00 -16:00"]
        },
        {
            title: "מתן עזרה לרופאי יחידת החילוץ",
            descriptopn: "ישנם התנדבויות רבות של עולם שלם ונותן הכלת לכולם וכל עוד אתה ממשיך אין עוד מספיק ואיתו יחד כולנו שם ומתי זה יפזיק אין יודע ואים יודעים ולמה שלא נמשיך כי אפשר יותר ואז מפסיק ועוד לא נגמרת ככל שיש יותר גס בהל דכהל ד כהםד זדשלךח גךלכחדםבח קררןדה דןל כהןםדה כגםדןד גמבקררי דגטבנ גדוחי כגחהט'וש גבשקג כבקושחגד",
            activityHours: ["א'-ה' 09:00-13:00", "שישי 13:00-16:00", "שבת 12:00 -15:00"]
        },
        {
            title: "טיול עם הכלבים",
            descriptopn: "ישנם התנדבויות רבות של עולם שלם ונותן הכלת לכולם וכל עוד אתה ממשיך אין עוד מספיק ואיתו יחד כולנו שם ומתי זה יפזיק אין יודע ואים יודעים ולמה שלא נמשיך כי אפשר יותר ואז מפסיק ועוד לא נגמרת ככל שיש יותר גס בהל דכהל ד כהםד זדשלךח גךלכחדםבח קררןדה דןל כהןםדה כגםדןד גמבקררי דגטבנ גדוחי כגחהט'וש גבשקג כבקושחגד",
            activityHours: ["א'-ש' 09:00-13:00"]
        },
        {
            title: "פעילות חינוכית עם הקהילה",
            descriptopn: "ישנם התנדבויות רבות של עולם שלם ונותן הכלת לכולם וכל עוד אתה ממשיך אין עוד מספיק ואיתו יחד כולנו שם ומתי זה יפזיק אין יודע ואים יודעים ולמה שלא נמשיך כי אפשר יותר ואז מפסיק ועוד לא נגמרת ככל שיש יותר גס בהל דכהל ד כהםד זדשלךח גךלכחדםבח קררןדה דןל כהןםדה כגםדןד גמבקררי דגטבנ גדוחי כגחהט'וש גבשקג כבקושחגד",
            activityHours: ["שישי 13:00-16:00", "שבת 12:00 -15:00"]
        },
        {
            title: "לקיחת חלק בהקמת ימי אימוץ",
            descriptopn: "ישנם התנדבויות רבות של עולם שלם ונותן הכלת לכולם וכל עוד אתה ממשיך אין עוד מספיק ואיתו יחד כולנו שם ומתי זה יפזיק אין יודע ואים יודעים ולמה שלא נמשיך כי אפשר יותר ואז מפסיק ועוד לא נגמרת ככל שיש יותר גס בהל דכהל ד כהםד זדשלךח גךלכחדםבח קררןדה דןל כהןםדה כגםדןד גמבקררי דגטבנ גדוחי כגחהט'וש גבשקג כבקושחגד",
            activityHours: ["שבת 11:00 -16:00"]
        },
    ])

    return(
        <div>
            <div className="background-img-container">
            <video autoPlay loop muted id="backgroundvideo">
                <source src={backgroundvideo}  type="video/mp4"/>
            </video>
            </div>
            <div className="explaination-contianer">
                <div className="explaination">
                    <img className="mainhand" src={hand}  />
                    <h1 className="explaination-title">להתנדב</h1>
                    <h4 className="explaination-sub-title">עיזרו לנו לעזור להם</h4>
                    <p className="volunteering-text">תיואור על התתנדבות ועיוגכ דגלכ גכלח דג כגכע דגכח כמהלחחדגהג דהדלה כג מהדגלכמה גכד הלגשכ הלדכמה דצלךגככהלגצכמהל שגצהגךכתצה גכדגמ דכלה שדגך כחצהלחגכצמה לגכךכחה גככצמעה ללחזכצלךכגמהלגצ הלגדכמה םגחכהךלזגה  </p>
                    <p className="volunteering-text">תיואור על התתנדבות ועיוגכ דגלכ גכלח דג כגכע דגכח כמהלחחדגהג דהדלה כג מהדגלכמה גכד הלגשכ הלדכמה דצלךגככהלגצכמהל שגצהגךכתצה גכדגמ דכלה שדגך כחצהלחגכצמה לגכךכחה גככצמעה ללחזכצלךכגמהלגצ הלגדכמה םגחכהךלזגה  </p>
                    <p className="volunteering-text">תיואור על התתנדבות ועיוגכ דגלכ גכלח דג כגכע דגכח כמהלחחדגהג דהדלה כג מהדגלכמה גכד הלגשכ הלדכמה דצלךגככהלגצכמהל שגצהגךכתצה גכדגמ דכלה שדגך כחצהלחגכצמה לגכךכחה גככצמעה ללחזכצלךכגמהלגצ הלגדכמה םגחכהךלזגה  </p>
                    <p className="volunteering-text">לפרטים נוספים:</p>
                    <p className="volunteering-text">*4955 <a href="">example@email.com</a> או ב<a href="">טופס צרו קשר</a></p>
                </div>
            </div>
            <div className="hole"/>
            <div className="explaination-contianer">
                <h1 className="vulonteertitle">מצאו את ההתנדבות המתאימה לכם</h1>
                 <ul>
                {volunteerList.map(item => {
                    return(
                        <>
                        <ul>
                            <div className="volunteering-details-container">
                                <div className="volunteering-details">
                                <img className="handlogo"src={hand}  />
                                    <h3 className="volunteering-title">{item.title}</h3>
                                    <p className="volunteering-descriptopn">{item.descriptopn}</p>
                                </div>
                                <div className="hours">
                                    <p>ימי פעילות:</p>
                                    <p>{item.activityHours.map(item => <p>{item}</p>)}</p>
                                </div>
                            </div>
                        </ul>
                        <hr />
                        </>
                    )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Volunteering