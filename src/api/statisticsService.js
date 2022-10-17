import statisticsData from './fake/statistics';

export default class statisticalDataService {
  static getStatisticsByCode(code) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(statisticsData[code]);
      }, 1000);
    });
  }
}
