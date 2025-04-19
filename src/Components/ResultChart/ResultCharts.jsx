import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
      "student_id": 1,
      "name": "Alice",
      "physics": 75,
      "chemistry": 90,
      "math": 88
    },
    {
      "student_id": 2,
      "name": "Bob",
      "physics": 62,
      "chemistry": 85,
      "math": 71
    },
    {
      "student_id": 3,
      "name": "Charlie",
      "physics": 78,
      "chemistry": 62,
      "math": 80
    },
    {
      "student_id": 4,
      "name": "David",
      "physics": 88,
      "chemistry": 86,
      "math": 92
    },
    {
      "student_id": 5,
      "name": "Eva",
      "physics": 65,
      "chemistry": 51,
      "math": 63
    },
    {
      "student_id": 6,
      "name": "Frank",
      "physics": 50,
      "chemistry": 68,
      "math": 65
    },
    {
      "student_id": 7,
      "name": "Grace",
      "physics": 71,
      "chemistry": 94,
      "math": 70
    },
    {
      "student_id": 8,
      "name": "Hank",
      "physics": 70,
      "chemistry": 72,
      "math": 75
    },
    {
      "student_id": 9,
      "name": "Ivy",
      "physics": 77,
      "chemistry": 60,
      "math": 78
    },
    {
      "student_id": 10,
      "name": "Jack",
      "physics": 69,
      "chemistry": 67,
      "math": 90
    }
  ]

function ResultCharts() {
  return (
    <div>
      <LineChart width={800} height={400} data={resultData}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey={'chemistry'} stroke='red'></Line>
        <Line dataKey={'physics'} stroke='blue'></Line>
      </LineChart>
    </div>
  );
}

export default ResultCharts;