import { connect } from 'react-redux';
import styled from 'styled-components';

import { convertTemp, enums, colors, borderRadius } from '../helpers';

const MessageMain = styled.div`
    padding: 20px;
    margin: 20px;
    color: ${props => props.error ? 'red' : colors.darkBlue};
    border: 1px solid ${props => props.error ? 'red' : colors.darkBlue};
    border-radius: ${borderRadius.large};
`;

const Message = ({ weather, tempUnit, criteria }) => (
    <MessageMain error={weather.hasErrors}>
        {weather.data ?
            <>
                <div>
                    Current temp: <strong>{convertTemp(weather.data.main.temp, tempUnit)}</strong>
                </div>
                <div>
                    General weather: <strong>{weather.data.weather[0].description}</strong>
                </div>
            </>
            : weather.isLoading ?
                'Loading...'
                : weather.hasErrors ?
                    weather.hasErrors
                    : criteria === enums.BY_CITY ?
                        <>Enter the <strong>city name</strong> please</>
                        : <>Enter the <strong>coordinates</strong> please</>
        }
    </MessageMain>
);

const mapStateToProps = state => ({
    weather: state.weather,
    tempUnit: state.tempUnit,
    criteria: state.criteria
});

export default connect(mapStateToProps)(Message);
