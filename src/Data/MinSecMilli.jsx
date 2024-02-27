export function averageTime(times) {
  // Convert time durations to milliseconds
  const totalMs = times.reduce(
    (acc, time) => acc + timeToMilliseconds(time),
    0
  );

  // Calculate the average in milliseconds
  const averageMs = totalMs / times.length;

  // Convert average milliseconds back to time format
  const averageTime = millisecondsToTime(averageMs);

  return averageTime;
}

function timeToMilliseconds(time) {
  const [minutesStr, rest] = time.split(":");
  const [secondsStr, millisecondsStr] = rest.split(".");
  const minutes = parseInt(minutesStr, 10);
  const seconds = parseInt(secondsStr, 10);
  const milliseconds = parseInt(millisecondsStr, 10);
  return minutes * 60 * 1000 + seconds * 1000 + milliseconds;
}

function millisecondsToTime(milliseconds) {
  const minutes = Math.floor(milliseconds / (60 * 1000));
  milliseconds %= 60 * 1000;
  const seconds = Math.floor(milliseconds / 1000);
  milliseconds %= 1000;

  return `${minutes}:${padZero(seconds)}:${padZero(
    Math.floor(milliseconds / 10),
    2
  )}`; // Use toFixed(2) for milliseconds
}

function padZero(num, length = 2) {
  return num.toString().padStart(length, "0");
}
