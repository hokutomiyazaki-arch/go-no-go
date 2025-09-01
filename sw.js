// Service Worker for Go/No-Go Task Training App
const CACHE_NAME = 'gonogo-fnt-v1.0.0';
const urlsToCache = [
  './',
  './index.html',
  './FNT512.png',
  './FNT512-transparent.png',
  './manifest.json'
];

// Install event - キャッシュの作成
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) // すぐにアクティブ化
  );
});

// Activate event - 古いキャッシュの削除
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // すぐにコントロールを取得
  );
});

// Fetch event - キャッシュファースト戦略
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // キャッシュがあればそれを返す
        if (response) {
          return response;
        }
        
        // なければネットワークから取得
        return fetch(event.request).then(response => {
          // 有効なレスポンスでない場合はそのまま返す
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // レスポンスをクローンしてキャッシュに保存
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
      .catch(() => {
        // オフライン時のフォールバック
        return caches.match('./index.html');
      })
  );
});

// バックグラウンド同期（オプション）
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

// プッシュ通知（将来の拡張用）
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'トレーニングの時間です！',
    icon: './FNT512.png',
    badge: './FNT512.png',
    vibrate: [200, 100, 200]
  };
  
  event.waitUntil(
    self.registration.showNotification('Go/No-Go Task', options)
  );
});

// 通知クリック処理
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('./')
  );
});

// データ同期関数
async function syncData() {
  // 将来的にトレーニングデータの同期処理を実装
  console.log('Syncing data...');
}
