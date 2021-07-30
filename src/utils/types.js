//List of possible types for Pokemon
const types = [
    'normal',
    'fire',
    'water',
    'electric',
    'grass',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy',
];

//Types as option elements for Select input
const typeOptions = types.map((type) => (
    <option key={type} value={type}>
        {type[0].toUpperCase() + type.slice(1)}
    </option>
));
typeOptions.unshift(<option key='null' value='null'></option>);

export { types, typeOptions };
