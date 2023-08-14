const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const formatDate = (date) => {
    return `${monthNames[new Date(date).getMonth()]} ${new Date(
        date
    ).getFullYear()}`;
};

export default formatDate;
