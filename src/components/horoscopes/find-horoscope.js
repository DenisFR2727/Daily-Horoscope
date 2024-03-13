import { useState, 
         useEffect, 
         useRef, 
         useMemo, 
         useCallback } from "react";
import "./horoscopestyle.scss";
import { useHoroscopeValues } from "../context/context";
import { months } from "../data/months";

const FindYourHoroscope = () => {
    const days = Array.from({ length: 31 }, (_, index) => index + 1);
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedDay, setSelectedDay] = useState("");
    const [dateHoroscope, setDateHoroscope] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { horoscopes } = useHoroscopeValues();

    const currentMonth  = useRef(null);
    const currentDay  = useRef(null);

    const clickFindHoroscope = () => {
        setIsLoading(true); // Set isLoading to true when the button is clicked
        // Simulate loading for 2 seconds
        setTimeout(() => {
            setIsLoading(false); 
        }, 500);
    };
    const findHoroscope = (e) => {
        e.preventDefault();
        const month = currentMonth.current.value;
        const day = currentDay.current.value;
        const currentValue = `${month} ${day}`;
              setDateHoroscope(currentValue);
        if(month || day !== currentValue){
           return;
        };
    };
    const changeMonth = (e) => {
        const month = e.target.value;
        setSelectedMonth(month);
    }
    const changeDay = (e) => {
        const day = e.target.value;
        setSelectedDay(day);
    }
    const filterHoroscopeDate = useCallback((date) => {
        const filteredHoroscopes = [];

        const [currentMonth, currentDay] = date.split(" ");
    
        for (let horoscope of horoscopes) {
            const [startMonth, endMonth] = horoscope.date.split(" - ");
    
            const [startMonthName, startDay] = startMonth.split(" ");
            const [endMonthName, endDay] = endMonth.split(" ");
    
            if ((currentMonth === startMonthName || currentMonth === endMonthName) &&
                ((currentMonth === startMonthName && parseInt(currentDay) >= parseInt(startDay)) ||
                (currentMonth === endMonthName && parseInt(currentDay) <= parseInt(endDay)))) {
    
                    filteredHoroscopes.push(horoscope);           
            }
        }
     
        return filteredHoroscopes;
    },[horoscopes])
    
    const filterHoroscope = useMemo(() => {
        return filterHoroscopeDate(dateHoroscope);
    }, [dateHoroscope, filterHoroscopeDate]);
    

   useEffect(() => {
    console.log(filterHoroscope)
   },[filterHoroscope])

    return (
        <div className="current-zodiac">
            <div className="block-current-zodiac">
                 <h1>Find Your Zodiac Sign</h1>
                 <p>Don't know your zodiac sign? If you don't know it yet, enter your birth date to find your zodiac sun sign.</p>
                 <div className="select-horoscope">
                    <form onSubmit={findHoroscope}>
                        <div className="months">
                            <label htmlFor="" >Birth Month</label>
                            <select className="form-select" 
                                    aria-label="Disabled select example"
                                    value={selectedMonth}
                                    ref={currentMonth}
                                    onChange={changeMonth}
                            >   
                                <option>Select Month</option>
                                {months.map((month) => ( 
                                    <option key={month.value} 
                                            value={month.name}
                                           >{month.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="days">
                            <label htmlFor="" >Birth Day</label>
                            <select className="form-select" 
                                    aria-label="Disabled select example"
                                    value={selectedDay}
                                    ref={currentDay}
                                    onChange={changeDay}
                            >
                                <option>Select Day</option>
                                {days.map((day) => ( 
                                    <option key={day} 
                                            value={day}
                                            >{day}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" onClick={clickFindHoroscope} >
                                {isLoading ? 'Loading...' : 'Find Zodiac Sign'}
                        </button>
                    </form>
                 </div>           
            </div>
            <div className="current-horoscope">
                 {filterHoroscope.map((horoscope) => (
                        <div key={horoscope.id}>
                            <p>{horoscope.name}</p>
                            <p>{horoscope.date}</p>
                        </div>
                  ))
                 }
            </div>
    </div>
    )
}
export default FindYourHoroscope;
