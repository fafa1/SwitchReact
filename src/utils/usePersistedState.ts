import { useState, useEffect } from "react";

function usePersitedState(key: string, initialState: any) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);
    debugger;
    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    // este state é populado pelo que vem do localstorage, neste arquivo é executado
    // primeiramente a funcao
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersitedState;
