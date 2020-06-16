export function formatNum(num) {
    return num.toLocaleString();
}

export function formatDate(num) {
    const dateString = num.toString();
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);

    const monthHash = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    };

    return `Last Updated: ${monthHash[month]} ${day}, ${year}`;
}