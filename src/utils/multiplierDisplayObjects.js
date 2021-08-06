import parse from 'html-react-parser';

const multiplierDisplayObjects = [
    {
        multiplier: 0,
        backgroundColorCode: '#30322f',
        textColorCode: 'c9c9c9',
        displayText: parse('0&times;'),
    },
    {
        multiplier: 0.25,
        backgroundColorCode: '#e91616',
        textColorCode: '#000000',
        displayText: parse('&frac14;&times;'),
    },
    {
        multiplier: 0.5,
        backgroundColorCode: '#f27878',
        textColorCode: '#ffffff',
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
