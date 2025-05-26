// DeliveryTimeModal.jsx
import React, { useState } from 'react';
import './DeliveryTimeModal.css';

const days = [
    { label: 'Chủ Nhật', date: '01/06' },
    { label: 'Thứ Hai', date: '02/06' },
    { label: 'Thứ Ba', date: '03/06' },
    { label: 'Thứ Tư', date: '04/06' }
];

const timeSlots = [
    '10h00 - 12h00',
    '12h00 - 14h00',
    '14h00 - 16h00',
    '16h00 - 18h00',
    '18h00 - 20h00',
    '20h00 - 22h00'
];

const DeliveryTimeModal = ({ onClose, onSave }) => {
    const [selectedDay, setSelectedDay] = useState(days[0]);
    const [selectedTime, setSelectedTime] = useState(timeSlots[0]);

    const handleSave = () => {
        onSave(`${selectedTime}, ${selectedDay.label.toLowerCase()} (${selectedDay.date})`);
        onClose();
    };

    return (
        <div className="modal-deliverytimemodal">
            <div className="submodal">
                <span className="close-btn-deliverytimemodal" onClick={onClose}>×</span>
                <h4 className='select-time'>Chọn thời gian nhận hàng:</h4>
                <div className="day-tabs">
                    {days.map(day => (
                        <button
                            key={day.date}
                            className={selectedDay.date === day.date ? 'active' : ''}
                            onClick={() => setSelectedDay(day)}
                        >
                            {day.label} ({day.date})
                        </button>
                    ))}
                </div>

                <div className="time-options">
                    {timeSlots.map(slot => (
                        <label key={slot}>
                            <input
                                type="radio"
                                name="timeSlot"
                                value={slot}
                                checked={selectedTime === slot}
                                onChange={() => setSelectedTime(slot)}
                            />
                            {slot}
                        </label>
                    ))}
                </div>

                <div className="modal-footer">
                    <button className='close-deliverytimemodal-btn' onClick={onClose}>Đóng</button>
                    <button onClick={handleSave} className="save-btn">Lưu thay đổi</button>
                </div>
            </div>
        </div>
    );
};

export default DeliveryTimeModal;
