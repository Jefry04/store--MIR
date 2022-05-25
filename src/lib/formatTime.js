// Prepend `0` for one digit numbers. For that the number has to be
// converted to string, as numbers don't have length method
const padTime = (time) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };
  
 export  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
  
    //Return combined values as string in format mm:ss
    return `${minutes}:${padTime(seconds)}`;
  };