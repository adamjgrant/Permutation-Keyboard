#!/bin/zsh
echo Enter name of topic
read permutation_topic 

echo Enter name of permutation
read permutation_name 

mkdir -p permutation_topics/$permutation_topic

echo "permutations.${permutation_name} = {\n  \"main\": [\n  \n  ]\n};" > permutation_topics/$permutation_topic/$permutation_name.js

# Add component to array.
markup=$(more index.html)
echo "" > index.html;
echo $markup | sed "s/<\!\-\- Permutations \-\->/<\!\-\- Permutations \-\->\n    <script src=\"\.\/permutations\/${permutation_topic}\/${permutation_name}.js\"><\/script>\n/" >> index.html

echo "${permutation_topic}/${permutation_name} created."