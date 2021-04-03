import { connect } from "react-redux";
import styled from 'styled-components';

import { toggleTempUnit } from "../actions/tempUnitActions";
import { colors, invertTempUnitLabel } from "../helpers";
import Button from "./UI/Button";

const TempConverterMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.darkBlue};
`;

const TempConverter = ({ tempUnit, dispatch }) => (
    <TempConverterMain>
        Convert temperature unit to:
        <Button
            margin="0 0 0 10px"
            onClick={() => dispatch(toggleTempUnit(tempUnit))}>
            {invertTempUnitLabel(tempUnit)}
        </Button>
    </TempConverterMain>
);

const mapStateToProps = state => ({
    tempUnit: state.tempUnit
});
export default connect(mapStateToProps)(TempConverter);
