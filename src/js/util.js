export default function getQueryString(query) {
  const href = window.location.href;
  const reg = new RegExp( '[?&]' + query + '=([^&#]*)', 'i' );
  const string = reg.exec(href);
  return string ? string[1] : null;
}
