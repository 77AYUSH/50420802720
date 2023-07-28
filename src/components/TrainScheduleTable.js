import React from 'react';
import TrainScheduleRow from './TrainScheduleRow';

const TrainScheduleTable = ({ trains }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Train Number</th>
          <th>Departure Time</th>
          <th>Arrival Time</th>
          <th>Origin</th>
          <th>Destination</th>
        </tr>
      </thead>
      <tbody>
        {trains.map((train, index) => (
          <TrainScheduleRow key={index} train={train} />
        ))}
      </tbody>
    </table>
  );
};

export default TrainScheduleTable;