#!/bin/bash
echo "=== Puerto asignado por Railway: $PORT ==="
php -S 0.0.0.0:${PORT:-8000} -t public