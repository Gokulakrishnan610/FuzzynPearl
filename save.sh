#!/bin/zsh
# Makes a numbered copy of the site in versions/ (v1, v2, ...). Usage: ./save.sh "what changed"
cd "$(dirname "$0")"
mkdir -p versions
n=$(( $(ls -d versions/v* 2>/dev/null | wc -l) + 1 ))
d="versions/v$n"
mkdir -p "$d"
rsync -a --exclude versions --exclude .claude --exclude save.sh --exclude CHANGELOG.md ./ "$d/"
echo "v$n  $(date '+%Y-%m-%d %H:%M')  ${1:-saved}" >> CHANGELOG.md
echo "Saved copy: $d"
