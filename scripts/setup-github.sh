#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI: brew install gh"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Sign in to GitHub (browser opens):"
  gh auth login -h github.com -p ssh -w
fi

OWNER="$(gh api user -q .login)"
REPO="liliananyanka"

if ! gh repo view "$OWNER/$REPO" >/dev/null 2>&1; then
  gh repo create "$REPO" --public --source=. --remote=origin
fi

gh api -X POST "/repos/$OWNER/$REPO/pages" -f build_type=workflow 2>/dev/null \
  || gh api -X PUT "/repos/$OWNER/$REPO/pages" -f build_type=workflow

git push -u origin main

echo ""
echo "Repository: https://github.com/$OWNER/$REPO"
echo "Live site (after Actions finishes): https://$OWNER.github.io/$REPO/"
