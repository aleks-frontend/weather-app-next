import styled from 'styled-components';

import Form from './Form';
import { connect } from 'react-redux';
import { setCriteria } from '../actions/criteriaActions';
import { enums, colors, inputs } from '../helpers';
import { useEffect } from 'react';
import localStore from '../services/localStorage';

const TabsContainer = styled.div`
    margin: 20px;
`;

const TabsMain = styled.div`
    padding: 20px;
    border: 1px solid ${colors.darkBlue};
`;

const TabsNavigation = styled.div`
    display: flex;
`;

const TabsNavigationItem = styled.div`
    padding: 10px;
    color: ${props => props.active ? 'white' : colors.normalBlue};
    background: ${props => props.active ? colors.darkBlue : 'white'};
    opacity: ${props => props.active ? 1 : 0.5};
    border: 1px solid ${colors.darkBlue};
    border-bottom: none;
    transition: 0.3s ease-in-out;

    &:first-child { border-top-left-radius: 5px; }
    
    &:last-child { 
        border-left: none; 
        border-top-right-radius: 5px;
    }

    &:hover { cursor: pointer; }
`;

const Tabs = ({ criteria, dispatch }) => {
    const { BY_CITY, BY_LOCATION } = enums;
    
    useEffect(() => {
        const localData = localStore.get('criteria');
        
        if (localData) 
            dispatch(setCriteria(localData));        
    }, [dispatch]);

    return (
        <TabsContainer>
            <TabsNavigation>
                <TabsNavigationItem
                    active={criteria === BY_CITY}
                    onClick={() => {
                        dispatch(setCriteria(BY_CITY));
                        localStore.set('criteria', BY_CITY);
                    }}
                >By City</TabsNavigationItem>
                <TabsNavigationItem
                    active={criteria === BY_LOCATION}
                    onClick={() => {
                        dispatch(setCriteria(BY_LOCATION))
                        localStore.set('criteria', BY_LOCATION);
                    }}
                >By Location</TabsNavigationItem>
            </TabsNavigation>
            {criteria === BY_CITY &&
                <TabsMain>
                    <Form inputs={inputs.city}
                        errorMessage="Please provide at least one input." />
                </TabsMain>
            }
            {criteria === BY_LOCATION &&
                <TabsMain>
                    <Form inputs={inputs.location}
                        errorMessage="Please provide both inputs." />
                </TabsMain>
            }
        </TabsContainer>
    )
};

const mapStateToProps = state => ({
    criteria: state.criteria
});

export default connect(mapStateToProps)(Tabs);
