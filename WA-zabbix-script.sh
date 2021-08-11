#!/bin/bash

SERVER=localhost
TO=$1
SUBJECT=$2
MESSAGE=$3
PORT=3000

generate_post_data()
{
  cat <<EOF
{
  "Subject": "$SUBJECT",
  "Message": "$MESSAGE"
}
EOF
}

curl -i \
-H "Accept: application/json" \
-H "Content-Type:application/json" \
-X POST --data "$(generate_post_data)" "http://$SERVER:$PORT/" 1> /dev/null