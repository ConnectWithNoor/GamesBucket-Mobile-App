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

export { toastConfig };
