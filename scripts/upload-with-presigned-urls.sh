#!/usr/bin/env bash
# Uploads built files from dist/ to S3 using pre-signed upload links.
# Usage: bash scripts/upload-with-presigned-urls.sh <links-file>
# Each line of the links file: <file in dist> <content type> <pre-signed URL>
# Lines are uploaded in order; it stops at the first failure.
set -euo pipefail
cd "$(dirname "$0")/../dist"
while read -r file ctype url; do
  [ -z "${file:-}" ] && continue
  code=$(curl -sS -o /dev/null -w "%{http_code}" -X PUT \
    -H "Content-Type: $ctype" --upload-file "$file" "$url")
  key="${url#https://s3.eu-central-1.amazonaws.com/grandeuradvisory.com/}"
  echo "$code  ${key%%\?*}"
  if [ "$code" != 200 ]; then
    echo "Upload failed (links may have expired). Ask Dev for fresh links."
    exit 1
  fi
done < "$1"
echo "All uploads finished."
