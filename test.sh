#/bin/bash

curl -is http://localhost:9000/
curl -is http://localhost:9000/test -X POST -d '{"foo": "test1233}'
curl -is http://localhost:9000/test
curl -is http://localhost:9000/test -X DELETE
curl -is http://localhost:9000/test -X DELETE
echo "\n"
echo "\n"
echo "\n"
echo "\n"
echo "\n"
echo "\n"

curl -is http://localhost:9001/
curl -is http://localhost:9001/test -X POST -d '{"foo": "test1233}'
curl -is http://localhost:9001/test
curl -is http://localhost:9001/test -X DELETE
curl -is http://localhost:9001/test -X DELETE
