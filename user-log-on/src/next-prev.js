import React , {UseState} from 'react';

export default function NextPrevButton(props){
    const {mode, setMode} =props;
    function next()
    {
        if (mode==2)
            setMode(0)
        else
            setMode(x => x+1);
    }
    function prev()
    {
        if (mode==0)
        setMode(2)
    else
        setMode(x => x-1);
    }
    return (
        <>
        <button onClick={next}>Next</button>
        <button onClick={prev}>Prev</button>
        </>
    )
    
}