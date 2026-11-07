#!/bin/sh
cd "$(dirname "$0")" || exit 1
echo "Trener: http://127.0.0.1:8765"
exec python3 -c '
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

ThreadingHTTPServer(("127.0.0.1", 8765), Handler).serve_forever()
'
