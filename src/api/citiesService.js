import citiesData from './fake/cities';

export default class citiesService {
  static fetchCities() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(citiesData);
      }, 1000);
    });
  }
}
