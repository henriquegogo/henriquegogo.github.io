cat _post.html > index.html

for file in $(ls -c *.html)
do
  title=$(cat $file | grep "<title>" | sed "s/.title>//g" | sed "s/<$//")
  if [ "$file" != "index.html" ] && [ "$file" != "_post.html" ]
  then
    echo "<a href='$file'>$title</a>" >> index.html
  fi
done
