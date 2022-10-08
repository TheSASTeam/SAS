var jsonData = [
  {
    id: 1,
    imdbID: "tt0096895",
    Title: "Batman",
    Year: "1989",
    gener: "Action",
    Language: "English",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_.jpg",
  },
  {
    id: 2,
    imdbID: "tt0468569",
    Title: "The Dark Knight",
    Year: "2008",
    gener: "Action",
    Language: "Telugu",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    id: 3,
    imdbID: "tt2975590",
    Title: "Batman v Superman: Dawn of Justice",
    Year: "2016",
    gener: "Action",
    Language: "English",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    id: 4,
    imdbID: "tt1345836",
    Title: "The Dark Knight Rises",
    Year: "2012",
    gener: "Action",
    Language: "English",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    id: 5,
    imdbID: "tt0372784",
    Title: "Batman Begins",
    Year: "2005",
    gener: "Action",
    Language: "English",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BYzc4ODgyZmYtMGFkZC00NGQyLWJiMDItMmFmNjJiZjcxYzVmXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    id: 6,
    imdbID: "tt4116284",
    Title: "The LEGO Batman Movie",
    Year: "2017",
    gener: "Action",
    Language: "Hindi",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    id: 7,
    imdbID: "tt0112462",
    Title: "Batman Forever",
    Year: "1995",
    gener: "Action",
    Language: "Hindi",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BNWY3M2I0YzItNzA1ZS00MzE3LThlYTEtMTg2YjNiOTYzODQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    id: 8,
    imdbID: "tt0118688",
    Title: "Batman & Robin",
    Year: "1997",
    gener: "Action",
    Language: "Hindi",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    id: 9,
    imdbID: "tt0103776",
    gener: "Action",
    Language: "Hindi",
    Title: "Batman Returns",
    Year: "1992",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    id: 10,
    imdbID: "tt0103776",
    gener: "Action",
    Language: "Hindi",
    Title: "The Lion King",
    Year: "2019",
    Runtime: "118 min",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
  },
  {
    id: 11,
    imdbID: "tt0103776",
    gener: "Comedy",
    Language: "Hindi",
    Title: "Mowgli: Legend of the Jungle",
    Year: "2018",
    Runtime: "104 min",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
  },
  {
    id: 12,
    imdbID: "tt0103776",
    gener: "Action",
    Language: "Hindi",
    Title: "Doctor Strange",
    Year: "2016",
    Runtime: "115 min",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
  },
  {
    id: 13,
    imdbID: "tt0103776",
    gener: "Romance",
    Language: "Hindi",
    Title: "John Wick",
    Year: "2014",
    Runtime: "101 min",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
  },
  {
    id: 14,
    imdbID: "tt0103776",
    gener: "Comedy",
    Language: "Hindi",
    Title: "The Notebook",
    Year: "2004",
    Runtime: "123 min",
    Poster:"https://media.istockphoto.com/vectors/coming-soon-isolated-vector-icon-paper-style-promotion-sign-start-a-vector-id1273109788?k=20&m=1273109788&s=612x612&w=0&h=JStiZA3z_OG2FmCz5ZlV4axsxGWIy6-LrdOVTuZsyKg="

  },
  {
    id: 15,
    imdbID: "tt0103776",
    gener: "Comedy",
    Language: "Hindi",
    Title: "3 idiots",
    Year: "2002",
    Runtime: "123 min",
    Poster:"https://media.istockphoto.com/vectors/coming-soon-isolated-vector-icon-paper-style-promotion-sign-start-a-vector-id1273109788?k=20&m=1273109788&s=612x612&w=0&h=JStiZA3z_OG2FmCz5ZlV4axsxGWIy6-LrdOVTuZsyKg="

  }
];

export default jsonData;
