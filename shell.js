// 앱 페이지(word-test/, odap-note/)를 주소로 바로 열었을 때, 상단 탭과 홈 버튼이 있는 첫 화면으로 옮겨요.
// 주소 뒤에 붙은 ?…#… (예: 단어 시험지의 #srv=…&tok=… 서버 연결 링크)는 그대로 앱에 넘겨요.
(function () {
  try { if (window.top !== window.self) return; } catch (e) { return; }
  var m = /\/([^\/]+)\/(index\.html)?$/.exec(location.pathname);
  if (!m) return;
  var extra = location.search + location.hash;
  location.replace('../#' + m[1] + (extra ? '&' + encodeURIComponent(extra) : ''));
})();
