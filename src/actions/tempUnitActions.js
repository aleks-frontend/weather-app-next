export const TOGGLE_TEMP_UNIT = 'TOGGLE_TEMP_UNIT';

export const toggleTempUnit = (currentUnit) => ({
    type: TOGGLE_TEMP_UNIT,
    payload: currentUnit
});
