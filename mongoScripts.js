// Find all movies where there is a metacritic field and it's value is null
  let filter = {
    $and: [
      { "metacritic": null },
      { "metacritic": {$exists: true}}
    ]
  }

let proj = {_id: 0, title: 1, metacritic: 1}