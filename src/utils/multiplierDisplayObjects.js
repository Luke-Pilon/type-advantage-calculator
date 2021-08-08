import parse from 'html-react-parser';

const multiplierDisplayObjects = [
    {
        multiplier: 0,
        backgroundColorCode: '#30322f',
        textColorCode: '#d6d6d6',
        displayText: parse('0&times;'),
    },
    {
        multiplier: 0.25,
        backgroundColorCode: '#e5782a',
        textColorCode: '#121212',
        displayText: parse('&frac14;&times;'),
    },
    {
        multiplier: 0.5,
        backgroundColorCode: '#f0b489',
        textColorCode: '#121212',
        displayText: parse('&frac12;&times;'),
    },
    {
        multiplier: 1,
        backgroundColorCode: '#f0f0f0',
        textColorCode: '#000000',
        displayText: parse('1&times;'),
    },
    {
        multiplier: 2,
        backgroundColorCode: '#2f6fe5',
        textColorCode: '#ffffff',
        displayText: parse('2&times;'),
    },
    {
        multiplier: 4,
        backgroundColorCode: '#0c2a64',
        textColorCode: '#f0f0f0',
        displayText: parse('4&times;'),
    },
];

export { multiplierDisplayObjects };
