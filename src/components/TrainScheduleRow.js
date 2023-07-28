import React from 'react';

const TrainScheduleRow = ({ train }) => {
  const { trainNumber, departureTime, arrivalTime, origin, destination } = train;

  return (
    <tr>
      <td>{trainNumber}</td>
      <td>{departureTime}</td>
      <td>{arrivalTime}</td>
      <td>{origin}</td>
      <td>{destination}</td>
    </tr>
  );
};

export default TrainScheduleRow;