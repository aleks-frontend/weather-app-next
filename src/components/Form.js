import { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

import { fetchWeather, getWeatherFailure } from "../actions/weatherActions";
import { colors, borderRadius } from "../helpers";
import localStore from "../services/localStorage";
import Button from "./UI/Button";

const FormMain = styled.form`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 5px;
    margin: 20px auto;
    width: 300px;
    max-width: 100%;
    
    label { 
        color: ${colors.darkBlue};
        text-align: left; 
    }

    input[type="text"] {
        border: 1px solid ${colors.darkBlue};
        border-radius: ${borderRadius.small};
    }
`;

const Form = ({ inputs, errorMessage, criteria, dispatch }) => {
    const initialState = inputs.reduce((total, input) => ({
        ...total,
        [input.name]: ''
    }), {});
    const [loginData, setLoginData] = useState(initialState);

    useEffect(() => {
        const localData = localStore.get(`inputs-${criteria}`);

        if (localData)
            setLoginData(localData);
    }, []);

    // Helper function for reseting the form
    const resetForm = () => {
        setLoginData(initialState);
        localStore.remove(`inputs-${criteria}`);
    };

    // Event handlers  
    const handleInputChange = e => {
        const { name, value } = e.target;

        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const params = Object.values(loginData).reduce((total, value) => {
            return value !== '' ? [...total, value] : total;
        }, []);

        if (params.length) {
            dispatch(fetchWeather({ params, criteria }));
            localStore.set(`inputs-${criteria}`, loginData);
        } else {
            dispatch(getWeatherFailure(errorMessage));
        }
    };

    return (
        <FormMain onSubmit={handleFormSubmit}>
            {inputs.length !== 0 && inputs.map((input, index) => (
                <Fragment key={index}>
                    <label>{input.label}: </label>
                    <input
                        type="text"
                        name={input.name}
                        value={loginData[input.name]}
                        onChange={handleInputChange}
                    />
                </Fragment>
            )
            )}
            <Button type="submit">Get Weather</Button>
            <Button
                secondary={true}
                onClick={resetForm}>Clear Form</Button>
        </FormMain >
    );
};

const mapStateToProps = state => ({
    criteria: state.criteria
});

export default connect(mapStateToProps)(Form);
