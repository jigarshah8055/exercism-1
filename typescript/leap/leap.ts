const isLeapYear = (year: number): boolean => {
    return (year%100) ? (year%4 == 0) : (year%400 == 0);
};

export default isLeapYear;