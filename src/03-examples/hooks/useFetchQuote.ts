import React, { isValidElement, useEffect, useState } from 'react';
import { getQuote } from '../../api/breaking_bad/getQuotes';

export interface IUseFetchQuoteSte {
  data: any,
  isLoading: boolean,
  error: Error | null | string,
  fetchController: AbortController | null,
}

export interface IUseFetchQuoteProps {
  index: number
}

export const useFetchQuote = (props: IUseFetchQuoteProps) => {


  const [state, setState] = useState<IUseFetchQuoteSte>({
    data: {},
    isLoading: true,
    error: null,
    fetchController: null,
  });

  const getQuoteA = async () => {
    try{

      //abort previus fetch if exists
      if(state.fetchController && state.isLoading){
        state.fetchController.abort();
        setState({
          ...state,
          isLoading: true,
          fetchController: null,
        });
      }

      const abortController = new AbortController();
      setState({
        ...state,
        isLoading: true,
        fetchController: abortController,
      });

      const resp = await getQuote(props.index, abortController);
      const data = await resp.json();
      if(data.length === 0) {
        throw new Error('No Data');
      }
      console.log(data); 

      setState({
        data,
        isLoading: false,
        error: null,
        fetchController: null,
      });
    }
    catch(error){
      setState({
        data: {},
        isLoading: false,
        error: (error instanceof Error) ? error : 'error',
        fetchController: null
      });
    }
  }

  useEffect(() => {
    getQuoteA();
  }, [props.index]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
};
