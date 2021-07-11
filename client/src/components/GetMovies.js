import React, { useEffect } from 'react';
import { useQuery, qql } from '@apollo/client';
import { LOAD_MOVIES } from '../graphql/Queries';

function GetUser() {
  const { error, loading, data } = useQuery(LOAD_MOVIES);

  useEffect(() => {
    console.log(data, 'Data');
  }, [data]);
  return <div></div>;
}

export default GetUser;
