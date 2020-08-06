export function formatNum(num) {
    return num !== null ? num.toLocaleString() : '-';
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

    return `${monthHash[month]} ${day}, ${year}`;
}

export function getStateName(stateAbbr) {
    const stateHash = {
        'AK': 'Alaska',
        'AL': 'Alabama',
        'AR': 'Arkansas',
        'AS': 'American Samoa',
        'AZ': 'Arizona',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DC': 'District of Columbia',
        'DE': 'Delaware',
        'FL': 'Florida',
        'GA': 'Georgia',
        'GU': 'Guam',
        'HI': 'Hawaii',
        'IA': 'Iowa',
        'ID': 'Idaho',
        'IL': 'Illinois',
        'IN': 'Indiana',
        'KS': 'Kansas',
        'KY': 'Kentucky',
        'LA': 'Louisiana',
        'MA': 'Massachusetts',
        'MD': 'Maryland',
        'ME': 'Maine',
        'MI': 'Michigan',
        'MN': 'Minnesota',
        'MO': 'Missouri',
        'MP': 'Northern Mariana Islands',
        'MS': 'Mississippi',
        'MT': 'Montana',
        'NC': 'North Carolina',
        'ND': 'North Dakota',
        'NE': 'Nebraska',
        'NH': 'New Hampshire',
        'NJ': 'New Jersey',
        'NM': 'New Mexico',
        'NV': 'Nevada',
        'NY': 'New York',
        'OH': 'Ohio',
        'OK': 'Oklahoma',
        'OR': 'Oregon',
        'PA': 'Pennsylania',
        'PR': 'Puerto Rico',
        'RI': 'Rhode Island',
        'SC': 'South Carolina',
        'SD': 'South Dakota',
        'TN': 'Tennessee',
        'TX': 'Texas',
        'UT': 'Utah',
        'VA': 'Virginia',
        'VI': 'Virgin Islands',
        'VT': 'Vermont',
        'WA': 'Washington',
        'WI': 'Wisconsin',
        'WV': 'West Virginia',
        'WY': 'Wyoming'
    };
    return stateHash[stateAbbr];
}

export function getStateAbbr(state) {
    const stateHash = {
        'alaska': 'ak',
        'alabama': 'al',
        'arkansas': 'ar',
        'americansamoa': 'as',
        'arizona': 'az',
        'california': 'ca',
        'colorado': 'co',
        'connecticut': 'ct',
        'districtofcolumbia': 'dc',
        'delaware': 'de',
        'florida': 'fl',
        'georgia': 'ga',
        'guam': 'gu',
        'hawaii': 'hi',
        'iowa': 'ia',
        'idaho': 'id',
        'illinois': 'il',
        'indiana': 'in',
        'kansas': 'ks',
        'kentucky': 'ky',
        'louisiana': 'la',
        'massachusetts': 'ma',
        'maryland': 'md',
        'maine': 'me',
        'michigan': 'mi',
        'minnesota': 'mn',
        'missouri': 'mo',
        'northernmarianaislands': 'mp',
        'mississippi': 'ms',
        'montana': 'mt',
        'northcarolina': 'nc',
        'northdakota': 'nd',
        'nebraska': 'ne',
        'newhampshire': 'nh',
        'newjersey': 'nj',
        'newmexico': 'nm',
        'nevada': 'nv',
        'newyork': 'ny',
        'ohio': 'oh',
        'oklahoma': 'ok',
        'oregon': 'or',
        'pennsylvania': 'pa',
        'puertorico': 'pr',
        'rhodeisland': 'ri',
        'southcarolina': 'sc',
        'southdakota': 'sd',
        'tennessee': 'tn',
        'texas': 'tx',
        'utah': 'ut',
        'virginia': 'va',
        'virginislands': 'vi',
        'vermont': 'vt',
        'washington': 'wa',
        'wisconsin': 'wi',
        'westvirginia': 'wv',
        'wyoming': 'wy'
    };
    return stateHash[state];
}

export const STATE_ARRAY = [
    'Alaska',
    'Alabama',
    'Arkansas',
    'American Samoa',
    'Arizona',
    'California',
    'Colorado',
    'Connecticut',
    'District of Columbia',
    'Delaware',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Iowa',
    'Idaho',
    'Illinois',
    'Indiana',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Massachusetts',
    'Maryland',
    'Maine',
    'Michigan',
    'Minnesota',
    'Missouri',
    'Northern Mariana Islands',
    'Mississippi',
    'Montana',
    'North Carolina',
    'North Dakota',
    'Nebraska',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'Nevada',
    'New York',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Virginia',
    'Virgin Islands',
    'Vermont',
    'Washington',
    'Wisconsin',
    'West Virginia',
    'Wyoming'
];

export function newsDateFormatter(date) {
    if(date === null) return null;

    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

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

    return `${monthHash[month]} ${day}, ${year}`;
}
