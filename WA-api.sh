#!/bin/bash

SERVER=
TO=$1
SUBJECT=$2
MESSAGE=$3

generate_post_data()
{
  cat <<EOF
{
  "Subject": "$2",
  "Message": "$3"
}
EOF
}

curl -i \
-H "Accept: application/json" \
-H "Content-Type:application/json" \
-X POST --data "$(generate_post_data)" "http://localhost:3000/" 1> /dev/null
# -X POST --data "$(generate_post_data)" "http://$SERVER:8081/" 1> /dev/null