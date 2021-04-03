// Custom inputs for Forms
export const inputs = {
    city: [
        { label: 'City', name: 'city' },
        { label: 'State Code', name: 'stateCode' },
        { label: 'Zip Code', name: 'zipCode' }
    ],
    location: [
        { label: 'Lon', name: 'lon' },
        { label: 'Lat', name: 'lat' }
    ]
};

// Enums
export const enums = {
    BY_CITY: 'city',
    BY_LOCATION: 'location'
};

// Styling
export const colors = {
    white: '#fff',
    black: '#000',
    darkestBlue: '#182940',
    darkBlue: '#055BA6',
    normalBlue: '#0367A6',
    lightBlue: '#0D9FD9',
    lightestBlue: '#1BCBF2'
};

export const borderRadius = {
    small: '5px',
    medium: '10px',
    large: '20px'
};

// Helper function for converting temperature
export const convertTemp = (fahrenheit, unit = 'f') => {
    if (unit === 'f') {
        return `${fahrenheit.toFixed(2)} \xB0F`;
    } else {
        return `${((fahrenheit - 32) * 5 / 9).toFixed(2)} \xB0C`;
    }
};

// Helper function for inverting temperature label
export const invertTempUnitLabel = unit => unit === 'c' ? 'Fahrenheit' : 'Celsius';
