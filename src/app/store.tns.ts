import * as appSettings from 'tns-core-modules/application-settings';

export const Store = {
  save: (data: any) => {
    appSettings.setString('data', JSON.stringify(data));
  },
  load: () => {
    if (appSettings.hasKey('data')) {
      return JSON.parse(appSettings.getString('data'));
    }

    return [];
  }
};
