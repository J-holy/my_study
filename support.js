// 후원 버튼과 쿠팡 파트너스 추천 상품.
// 아래 SUPPORT 에 링크를 채우면 홈, 사용법, 소개 페이지 아래에 나타나요. 비어 있으면 아무것도 보이지 않아요.
var SUPPORT = {
  // 후원 링크. 쓰지 않는 칸은 '' 로 두세요.
  donate: {
    toss: '',       // 예: 'https://toss.me/아이디'
    kakaopay: '',   // 예: 'https://qr.kakaopay.com/XXXXXXXX'  (카카오페이 송금코드 링크)
    coffee: ''      // 예: 'https://www.buymeacoffee.com/아이디'
  },
  // 쿠팡 파트너스 상품 링크. 쿠팡 파트너스 > 링크 생성 에서 받은 단축 링크(https://link.coupang.com/a/...)
  coupang: [
    // { name: '중학 영단어 단어장', note: '학년별 필수 단어', url: 'https://link.coupang.com/a/XXXX' },
  ]
};

(function () {
  var box = document.getElementById('support');
  if (!box) return;
  var d = SUPPORT.donate || {}, items = (SUPPORT.coupang || []).filter(function (x) { return x && x.name && /^https:\/\//.test(x.url || ""); });
  var pays = [['toss', '토스로 후원'], ['kakaopay', '카카오페이로 후원'], ['coffee', 'Buy Me a Coffee']].filter(function (p) { return /^https:\/\//.test(d[p[0]] || ''); });
  if (!pays.length && !items.length) return;

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return '&#' + c.charCodeAt(0) + ';'; }); }
  function safe(u) { return /^https:\/\//.test(u) ? esc(u) : '#'; }

  var css = '.sp{margin-top:40px;display:grid;gap:28px}'
    + '.sp h2{font-size:15px;font-weight:700;margin:0 0 4px;letter-spacing:-.01em}'
    + '.sp p{margin:0 0 12px;color:var(--mute);font-size:13px;line-height:1.6}'
    + '.sp-btns{display:flex;flex-wrap:wrap;gap:8px}'
    + '.sp-btn{display:inline-block;padding:8px 14px;border:1px solid var(--line);border-radius:8px;background:var(--surface);color:var(--ink);font-size:14px;font-weight:500;text-decoration:none}'
    + '.sp-btn:hover{border-color:var(--ink)}'
    + '.sp-list{display:grid;gap:8px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}'
    + '.sp-item{display:block;padding:12px 14px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--ink);text-decoration:none}'
    + '.sp-item:hover{border-color:var(--ink)}'
    + '.sp-item b{display:block;font-size:14px;font-weight:500}'
    + '.sp-item span{display:block;color:var(--mute);font-size:12px;margin-top:2px}'
    + '.sp-note{font-size:12px!important;margin:10px 0 0!important}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var h = '<div class="sp">';
  if (pays.length) {
    h += '<section><h2>응원하기</h2><p>모든 도구는 무료예요. 도움이 됐다면 서버 운영비를 보태 주세요.</p><div class="sp-btns">'
      + pays.map(function (p) { return '<a class="sp-btn" href="' + safe(d[p[0]]) + '" target="_blank" rel="noopener">' + p[1] + '</a>'; }).join('')
      + '</div></section>';
  }
  if (items.length) {
    h += '<section><h2>공부에 쓰는 추천 상품</h2><div class="sp-list">'
      + items.map(function (x) { return '<a class="sp-item" href="' + safe(x.url) + '" target="_blank" rel="sponsored noopener"><b>' + esc(x.name) + '</b>' + (x.note ? '<span>' + esc(x.note) + '</span>' : '') + '</a>'; }).join('')
      + '</div><p class="sp-note">이 영역은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.</p></section>';
  }
  box.innerHTML = h + '</div>';
})();
