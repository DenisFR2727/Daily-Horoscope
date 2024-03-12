import "./horoscopestyle.scss";

const CurrentDay = () => {
    const currentDate = new Date();
    const weekday = { weekday: 'long' };
    const currentDayName = currentDate.toLocaleDateString('en-US', weekday);
    const month = { month: 'long' }
    const currentMonth = currentDate.toLocaleDateString('en-US', month);
    const currentDay = currentDate.getDate();

    return (
           <div className="current-day">
                 <span>{currentDayName}, </span>
                 <span>{currentMonth} {currentDay}</span>
           </div>
    )
}
export default CurrentDay;