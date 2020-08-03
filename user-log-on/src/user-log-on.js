import React , {UseState} from 'react';

export default function UserLogOn(props){
    const {userName , setUserName, password, setPassword} =props;
  
    function SaveUser(e){
        const un = document.querySelector('.UserName');
        const unval=un.value;
        setUserName(unval);
        const ps = document.querySelector('.Password');
        const psval=ps.value;
        setPassword(psval);
       
    }

    return (
        <>
            <input type="text" placeholder="Enter UserName" className="UserName" value={userName}></input>
            <input type="text" placeholder="Enter Password" className="Password" value={password}></input>

            <button onClick={SaveUser}>Save</button>
        </>
    )
}