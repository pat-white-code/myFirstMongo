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