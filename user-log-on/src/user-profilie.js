import React , {UseState} from 'react';

export default function UserProfile(props){
    const {userName ,  password, selectedCountry ,selectedCity} =props;
    return (
        <>
        <h1>Hi {userName}</h1>
        <h2>your password is: {password}</h2>
    <    h3>You live in the city of {selectedCity} in {selectedCountry}   </h3>
        </>
    )
    
}