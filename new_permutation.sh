#!/bin/zsh
echo Enter name of topic
read permutation_topic 

echo Enter name of permutation
read permutation_name 

mkdir permutations/$permutation_topic/$permutation_name.js

echo "permutations.${permutation_name} = {\n  \"main\": [\n  \n]\n};" > permutations/$permutation_topic/$permutation_name.js

# Add component to array.
sed "s/<script>let permutations \= \{\};<\/script>/<script>let permutations \= \{\};<\/script>\n  <script src=\"\.\/permutations\/${permutation_topic}\/${permutation_name}.js\"><\/script>\n/" index.html | tee index.html > /dev/null

echo "${permutation_topic}/${permutation_name} created."