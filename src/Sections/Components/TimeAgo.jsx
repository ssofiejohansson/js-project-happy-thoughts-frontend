import React from "react";

const TimeAgo = ({ timestamp }) => {
  const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
  if (isNaN(date)) return <span>Invalid date</span>; // Rendered as a span element

  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  if (seconds < 5) return <span>just now</span>;

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, value] of Object.entries(intervals)) {
    const count = Math.floor(seconds / value);
    if (count >= 1) {
      const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
      return <span>{rtf.format(-count, unit)}</span>;
    }
  }

  return <span>just now</span>;
};

export default TimeAgo;
