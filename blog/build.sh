cat _post.html > index.html

for file in $(ls -r [0-9]*.html)
do
  title=$(cat $file | grep "<title>" | sed "s/.title>//g" | sed "s/<$//")
  date=$(cat $file | grep \"date | sed "s/^.*date\" content=\"//" | sed "s/\">//")
  if [ "$file" != "index.html" ] && [ "$file" != "_post.html" ]
  then
    echo -n "<a href='$file'>$title</a> <small><i>($date)</i></small><hr>" >> index.html
  fi
done
