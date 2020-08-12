import React from 'react';
import ReactDOM from 'react-dom';
import useSWR, { SWRConfig } from 'swr';

import { useState, useEffect } from 'react';


function useRemoteData(url,id){

  //console.log(id)

 const [mounted, setMounted] = useState(false);
  const { data,isValidating ,error } = useSWR(mounted ? url : null);

  //console.log(data,isValidating ,error )
  useEffect(() => {
    setMounted(true);
  }, [id])

  
return [data, isValidating , error];

}



function StarwarsCharacter(props) {
  const { id } = props;
  const [data, isLoading, error] = useRemoteData(`https://swapi.dev/api/people/${id}/`,[id]);
console.log(data, isLoading, error);
  if (error) {
      return <p className='error'>{error}</p>
  }

  if (isLoading) {
      return <p>Please wait, loading data...</p>
  }

  return (
    <>
    {data && 
      <div>
          <p>Character name: {data.name}</p>
      </div>
    }
    </>
  );
}

const App = () => {
  const [id, setId] = useState(1);
  
  return (
    <>
   <SWRConfig value={
      {
      fetcher: (...args) => fetch(...args).then(res => res.json())
      }
    }>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)}></input>
        <StarwarsCharacter id={id} />
    </SWRConfig>
   
    </>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
