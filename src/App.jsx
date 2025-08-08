
import Events from "./pages/Events";

const getEventsData = async () => {
    try {
        const response = await fetch(`https://meetup-backend-peach.vercel.app/events`, {
            method: "GET",
        });
       
        if (!response.ok) {
            throw "Failed to fetch data!";
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export const eventsData = await getEventsData();

function App() {

  return (
    <>
        <Events />
    </>
  )
}

export default App;
