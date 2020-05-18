find . -name "test.txt" | xargs grep -o 'hello'| grep -c 'hello'
