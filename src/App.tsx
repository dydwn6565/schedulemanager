import "./App.css";
import { useEffect,useState } from "react";
import FullCalendarPage from "./components/FullCalendarPage";
import Header from "./components/Header";
import DateScheduleManagement from "./DateScheduleManagement";

function App() {
  const [scheduleList, setScheduleList] = useState();
  useEffect(() => {
    const getScheduleData = async () => {
      const scheduleData = await fetch("http://127.0.0.1:5000", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `{
            allSchedules{
              edges{
                node{
                  scheduleid
                  title
                  userId
                  description
                  end
                  start
                  color
                }
              }
            }
          }`,
        }),
      });
      if (scheduleData.status === 200) {
          const jsonData = await scheduleData.json();
          setScheduleList(jsonData)
          console.log(jsonData)
      }
    }
    getScheduleData();
  },[]);        

  return (
    <div className="App">
      <Header />
      <FullCalendarPage scheduleList={scheduleList} />
      {/* <ScheduleManagement /> */}
    </div>
  );
}

export default App;
