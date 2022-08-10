permutations.will_fix = {
  "main": [
    { 
      "branch": "subject", "then": [" ", {
        "branch": "are-doing-stuff", "then": [" ", {
          "branch": "and-stuff-will-be-better"
        }]
      }]
    } 
  ],
  "subject": ["We", "Here at Acme, we", "All of us here at Acme"],
  "are-doing-stuff": { "ps": "are (taking steps|forming a plan|following protocol) to (review|revisit|examine|measure) (how the|the way the|the details of how the) (situation|incident|adverse event) was (handled|actioned|deployed)." },
  "and-stuff-will-be-better": { "ps": "(We) (believe) (in our) (commitment) to (doing what's right)." }
};
