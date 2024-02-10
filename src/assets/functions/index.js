import { STATIC_DATA } from '@assets/constants';

const toastConfig = type => {
  if (type === 'danger') {
    return {
      duration: 5000,
      position: 'top',
      type: 'danger',
      style: { marginTop: 40, zIndex: 100 },
      icon: 'auto',
    };
  } else if (type === 'success') {
    return {
      duration: 3000,
      position: 'top',
      type: 'success',
      style: { marginTop: 40, zIndex: 100 },
      icon: 'auto',
    };
  }
};

const getInfoMessage = type => {
  const findMessage = STATIC_DATA.infoMessage.find(item => item.type === type);

  return findMessage;
};

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const formatText = text => {
  const formattedText = text
    .replace(/"/g, '')
    .split(/\d+\./)
    .filter(instruction => instruction.trim() !== '');

  return formattedText;
};

export { toastConfig, getInfoMessage, wait, formatText };
