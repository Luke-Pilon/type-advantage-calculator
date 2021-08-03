import { typeAdvantagesArray } from './typeAdvantages';

const checkAdvantage = (attackingType, defenderType) => {
    if (attackingType) {
        let typeObject = typeAdvantagesArray.find(
            (type) => attackingType.toUpperCase() === type.name.toUpperCase()
        );
        if (typeObject) {
            if (typeObject.immunes.includes(defenderType)) {
                return 0;
            }
            if (typeObject.strengths.includes(defenderType)) {
                return 2;
            }
            if (typeObject.weaknesses.includes(defenderType)) {
                return 0.5;
            }
        }
    }
    return 1;
};

export { checkAdvantage };
