#!/bin/bash
# Script to verify that the build was successful and the HTML was processed correctly

set -e

echo "=== Build Verification Script ==="
echo ""

# Check if dist directory exists
if [ ! -d "dist" ]; then
  echo "❌ ERROR: dist directory not found!"
  exit 1
fi

# Check if index.html exists
if [ ! -f "dist/index.html" ]; then
  echo "❌ ERROR: dist/index.html not found!"
  exit 1
fi

# Check if index.html still contains source file references
if grep -q 'src="/src/main.jsx"' dist/index.html || grep -q "src='/src/main.jsx'" dist/index.html; then
  echo "❌ ERROR: index.html still contains /src/main.jsx"
  echo "The Vite build did not process the HTML correctly."
  echo ""
  echo "Current index.html content:"
  cat dist/index.html
  exit 1
fi

# Check if assets directory exists and has files
if [ ! -d "dist/assets" ]; then
  echo "❌ ERROR: dist/assets directory not found!"
  exit 1
fi

ASSET_COUNT=$(find dist/assets -type f | wc -l)
if [ "$ASSET_COUNT" -eq 0 ]; then
  echo "❌ ERROR: No assets found in dist/assets/"
  exit 1
fi

echo "✓ Build verification passed!"
echo "✓ index.html was processed correctly"
echo "✓ Found $ASSET_COUNT asset files"
exit 0

