import {validateData, writeScript} from '#3p/3p';

/**
 * @param {!Window} global
 * @param {!Object} data
 */
export function openadstream(global, data) {
  validateData(data, ['adhost', 'adtag', 'sitepage', 'pos'], ['query']);

  let url =
    'https://' +
    encodeURIComponent(data.adhost) +
    '/RealMedia/ads/' +
    data.adtag +
    data.sitepage +
    '@' +
    data.pos;

  if (data.query) {
    url = url + '?' + data.query;
  }
  writeScript(global, url);
}
