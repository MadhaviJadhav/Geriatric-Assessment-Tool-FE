'use client'
import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import '../../styles/global.css'

export default function DateHandle() { 
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <>
            <div className="mt-4 px-4">
                <DatePicker  className="bg-gray-6 " selected={selectedDate} onChange={date => setSelectedDate(date)} />
            </div>
        </>
    );
}
