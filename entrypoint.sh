#!/bin/bash
test -n "$NEXT_PUBLIC_API_URL"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#PLACEHOLDER_NEXT_PUBLIC_API_URL#$NEXT_PUBLIC_API_URL#g"

test -n "$NEXT_PUBLIC_API_TOKEN"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#PLACEHOLDER_NEXT_PUBLIC_API_TOKEN#$NEXT_PUBLIC_API_TOKEN#g"
exec "$@"