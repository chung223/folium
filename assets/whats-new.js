// 「這次更新」：從 App Store 的公開查詢介面抓最新版本號、日期與更新說明。
// 抓不到（離線、被擋）就整個區塊不顯示，不留空殼。
(function () {
  var box = document.getElementById('whats-new');
  if (!box || !window.fetch) return;
  var url = 'https://itunes.apple.com/lookup?id=6819547697&country=' + box.dataset.country + '&lang=' + box.dataset.lang;
  fetch(url).then(function (r) { return r.json(); }).then(function (d) {
    var app = d && d.results && d.results[0];
    if (!app || !app.version || !app.releaseNotes) return;
    box.querySelector('[data-wn-version]').textContent = box.dataset.versionLabel.replace('{v}', app.version);
    var when = new Date(app.currentVersionReleaseDate);
    if (!isNaN(when)) {
      box.querySelector('[data-wn-date]').textContent =
        when.toLocaleDateString(box.dataset.locale, { year: 'numeric', month: 'long', day: 'numeric' });
    }
    var list = box.querySelector('[data-wn-notes]');
    app.releaseNotes.split('\n').forEach(function (line) {
      var text = line.replace(/^\s*[•・\-*]\s*/, '').trim();
      if (!text) return;
      var li = document.createElement('li');
      li.textContent = text;
      list.appendChild(li);
    });
    if (list.children.length) box.hidden = false;
  }).catch(function () {});
})();
