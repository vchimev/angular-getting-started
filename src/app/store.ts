export const Store = {
  save: (data: any) => {
    window.localStorage.setItem('data', JSON.stringify(data));
  },
  load: () => {
    if ('data' in window.localStorage) {
      return JSON.parse(window.localStorage.getItem('data'));
    }

    return [];
  }
};
