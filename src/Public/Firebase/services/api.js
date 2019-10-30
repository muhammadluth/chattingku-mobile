import {setListener, pushData, initialize, Login, Register} from './firebase';
export const initApi = () => initialize();

export const getMessages = updaterFn => setListener('messages', updaterFn);
export const postMessage = message => {
  if (Boolean(message)) {
    pushData('messages', {
      incoming: false,
      message,
    });
  }
};

export {Login, Register};
