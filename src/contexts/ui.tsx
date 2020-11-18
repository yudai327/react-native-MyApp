import React from 'react';

export enum Status {
  LOADING = 'loading',
  FIRST_OPEN = 'firstOpen',
  UN_AUTHORIZED = 'unAuthorized',
  AUTHORIZED = 'authorized',
}
export function crearteApplicationInitialState(): Status {
  return Status.LOADING;
}
export const Context = React.createContext({
  applicationState: crearteApplicationInitialState(),
  setApplicationState: (_: Status) => {},
});
