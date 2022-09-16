import "./App.css";
import { useEffect, useState } from "react";
import FullCalendarPage from "./components/FullCalendarPage";
import Header from "./components/Header";
import DateScheduleManagement from "./DateScheduleManagement";
import { useLocation } from "react-router-dom";
function App() {
  const [scheduleList, setScheduleList] = useState<Array<any> | undefined>();
  const location = useLocation();
  
  useEffect(() => {
    const usertableid = localStorage?.getItem("usertableid");
    const getScheduleData = async () => {
      
      const scheduleData = await fetch("http://127.0.0.1:5000", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `mutation{
            getSchedule(usertableid:${usertableid}){
              schedule{
                  scheduleid
                  title
                  userId
                  description
                  end
                  start
                  color
                }
              }
            
          }`,
        }),
      });
      if (scheduleData.status === 200) {
        const jsonData = await scheduleData.json();
        removeNodeFromAPI(jsonData.data.allSchedules.edges);
      }
    };
    getScheduleData();
  }, []);

  const removeNodeFromAPI = (api: Array<any>) => {
    const newApi: Array<object> = [];
    api.map((node) => newApi.push(node?.node));

    setScheduleList(newApi);
  };

  return (
    <div className="App">
      <>
        <Header />
        {console.log(location.state)}
        <FullCalendarPage scheduleList={scheduleList} />
      </>
    </div>
  );
}

export default App;
