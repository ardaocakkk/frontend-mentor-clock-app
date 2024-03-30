import './styles/App.css';
import Daytime from "./components/Daytime";
import Nighttime from "./components/Nighttime";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [ip, setIp] = useState([]);


    useEffect(() => {
        const fetchIpAddress = async () => {
            try {
                const response = await axios.get('https://ipapi.co/json/');
                setIp(response.data);
            } catch (error) {
                console.error('Error fetching IP address:', error);
            }
        };

        fetchIpAddress();
    }, []);


    const [time, setTime] = useState(null);
    const[quote, setQuote] = useState(null);

    useEffect(() => {
        const fetchTime = async () => {
            try {
                const response = await axios.get('https://worldtimeapi.org/api/ip/' + ip);
                setTime(response.data);
            } catch (error) {
                console.error('Error fetching time:', error);
            }
        };
        fetchTime();

        const intervalId = setInterval(fetchTime, 30000);
        return () => clearInterval(intervalId);

    },[]);




    const fetchQuote = async () => {
        try {
            const response = await axios.get('https://api.quotable.io/random');
            setQuote(response.data)
        } catch (e) {
            console.error('Error fetching quote:', e);
        }
    }

    useEffect(() => {
        fetchQuote();
    }, []);





    const [isDay, setIsDay] = useState(true);

    useEffect( () => {
        if( parseInt(time?.datetime.substring(11,13)) > 5 && parseInt(time?.datetime.substring(11,13)) < 18){
                setIsDay(true)
        } else {
            setIsDay(false)
        }
    })



  return (


    <div className="App">
        {
            isDay ? (
                <Daytime content={quote?.content}
                         fetchQuote={fetchQuote}
                         author={quote?.author}
                         clock={time?.datetime.substring(11,16)}
                         day_of_w={time?.day_of_week}
                         day_of_y={time?.day_of_year}
                         location={time?.timezone}
                         country={ip.country}
                         city={ip.region}
                         week_num={time?.week_number}/>
            ) : (
                <Nighttime content={quote?.content}
                           fetchQuote={fetchQuote}
                           author={quote?.author}
                           clock={time?.datetime.substring(11,16)}
                           day_of_w={time?.day_of_week}
                           day_of_y={time?.day_of_year}
                           location={time?.timezone}
                           country={ip.country}
                           city={ip.region}
                           week_num={time?.week_number}   />
            )
        }
      {/*<Daytime content={quote?.content}*/}
      {/*         author={quote?.author}*/}
      {/*         clock={time?.datetime.substring(11,16)}*/}
      {/*         day_of_w={time?.day_of_week}*/}
      {/*         day_of_y={time?.day_of_year}*/}
      {/*         location={time?.timezone}*/}
      {/*         country={ip.country}*/}
      {/*         city={ip.region}*/}
      {/*         week_num={time?.week_number}/>*/}

        {/*<Nighttime content={quote?.content}*/}
        {/*           author={quote?.author}*/}
        {/*           clock={time?.datetime.substring(11,16)}*/}
        {/*           day_of_w={time?.day_of_week}*/}
        {/*           day_of_y={time?.day_of_year}*/}
        {/*           location={time?.timezone}*/}
        {/*           country={ip.country}*/}
        {/*           city={ip.region}*/}
        {/*           week_num={time?.week_number}   />*/}
    </div>
  );
}

export default App;
