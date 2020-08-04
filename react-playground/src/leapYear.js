function leapYear(year)
{
  if(year<1582){return false}
  else{return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}}
    