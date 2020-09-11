// Find all movies where there is a metacritic field and it's value is null
  let filter = {
    $and: [
      { "metacritic": null },
      { "metacritic": {$exists: true}}
    ]
  }

let proj = {_id: 0, title: 1, metacritic: 1}


//  In this collection, watlev describes the water level at the shipwreck site and depth describes how far below sea level the ship rests. How many documents in the ships.shipwrecks collection match either of the following criteria: watlev equal to "always dry" or depth equal to 0.

let filter = {
  sections: {$all: [
    "AG1",
    "MD1",
    "OA1"
  ]}
}

let proj = {_id: 0, sections:1}

// How many documents in this collection contain exactly two elements in the sections array field?

let filter = {
  sections: {$size: 2}
}


// How many documents in the results.surveys collection contain a score of 7 for the product, "abc"?

let filter = {
  results: { $elemMatch: 
    {
      product: "abc",
      score: 7
    }
  }
}

let filter = {
  "awards.text": {
    $regex: /^Won .*/
  }
}

let proj = {_id: 0, "awards.text": 1}


// How many documents contain at least one score in the results array that is greater than or equal to 70 and less than 80?

let filter = {
  results: {$elemMatch: {
    score: {$gte: 70},
    score: {$lt: 80},
  }}
}
let filter = {
  results: {$elemMatch: {$lt: 80, $gte: 70}}
}

// How many documents in the citibike.trips collection have the key tripduration set to null? Ignore any documents that do not contain the tripduration key.

let filter = {
  $and: { 
    tripduration: {$exists: true},
    tripduration: null
  }
}


// find movies with either Jack Nicholson and John Huston, with viewerRating greater than 7 and mpaaRating equal to "R"

let filter = {
  cast: {$in:["Jack Nickolson", "John Huston"]},
  viewerRating: {$gt: 7},
  mpaaRating: "R"

};

