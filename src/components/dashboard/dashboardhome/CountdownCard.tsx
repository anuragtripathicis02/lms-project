'use client';
import React from 'react';
import Countdown from 'react-countdown';

interface CountdownCardProps {
  title: string;
  subtitle: string;
  endDate: string;
  color: string;
  className?: string; // 👈 add this line
}

const CountdownCard: React.FC<CountdownCardProps> = ({ title, subtitle, endDate, color, className }) => {
  const renderDigits = (num: number) =>
    num
      .toString()
      .padStart(2, '0')
      .split('')
      .map((digit, i) => (
        <span key={i} className="digit">
          {digit}
        </span>
      ));

  const renderer = ({ days, hours, minutes }: any) => (
    <div className="time-container">
      <div className="time-box">
        <div className="digit-group">{renderDigits(days)}</div>
        <small>Days</small>
      </div>
      <span className="dots">:</span>
      <div className="time-box">
        <div className="digit-group">{renderDigits(hours)}</div>
        <small>Hours</small>
      </div>
      <span className="dots">:</span>
      <div className="time-box">
        <div className="digit-group">{renderDigits(minutes)}</div>
        <small>Minutes</small>
      </div>
    </div>
  );

  return (
    <div className={`countdown-card stamp ${className || ''}`} style={{ backgroundColor: color }}>
      <div  className='countdown-inner'>
      <h4>{title}</h4>
      <h3>{subtitle}</h3>
      <Countdown date={new Date(endDate)} renderer={renderer} />
      </div>
    </div>
  );
};

export default CountdownCard;
