export const roundNumberTo2DecimalPlaces = number => {
    return Math.round((number + Number.EPSILON) * 100) / 100;
}