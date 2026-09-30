self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'NOTIFICAR_ENTREGA') {
        self.registration.showNotification('Recordatorio de Taller', {
            body: event.data.mensaje,
            icon: 'https://cdn-icons-png.flaticon.com/512/3050/3050239.png',
            vibrate: [200, 100, 200]
        });
    }
});
