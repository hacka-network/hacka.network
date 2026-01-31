# Hacka* Network Frontend

Static frontend for [hacka.network](https://hacka.network).

## Local Development

### Quick Start

Open `index.html` in your browser. By default it uses the production API.

### Dev Mode (Local API)

To test against a local backend:

1. Start the Django dev server  - see [hackabot/README.md](https://github.com/hacka-network/hackabot/blob/main/README.md)
   ```bash
   uv run python manage.py runserver 8089
   ```

2. Open the frontend with `?dev=1`:
   ```
   file:///path/to/hacka.network/index.html?dev=1
   ```

   Or serve it locally:
   ```bash
   python -m http.server 8000
   # Then open: http://localhost:8000?dev=1
   ```

The `?dev=1` parameter switches the API to `http://localhost:8089`.

You'll see `🔧 Dev mode: using API at http://localhost:8089` in the browser console.