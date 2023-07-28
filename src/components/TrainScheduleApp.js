import React, { useState } from 'react';
import TrainScheduleTable from './TrainScheduleTable';

const TrainScheduleApp = () => {
  const [trains, setTrains] = useState([]);

  // Fetch train schedule data from the backend API or any data source
  // Example: You can use the Fetch API to get data from your backend server

  // For example, assuming you have an API endpoint that returns the train schedule data in JSON format
  const fetchTrainSchedule = async () => {
    try {
      const response = await fetch('http://20.244.56.144/train/trains/2344');
      if (response.ok) {
        const data = await response.json();
        setTrains(data);
      } else {
        console.error('Failed to fetch train schedule data.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Call the fetchTrainSchedule function when the component mounts to get the data
  React.useEffect(() => {
    fetchTrainSchedule();
  }, []);

  return (
    <div>
      <h1>Train Schedule</h1>
      {trains.length > 0 ? (
        <TrainScheduleTable trains={trains} />
      ) : (
        <p>Loading train schedule...</p>
      )}
    </div>
  );
};

export default TrainScheduleApp;