export const mockResult = [
  {
    id: 'd1',
    title: 'Revenue',
    value: 'Rp 2.000.000',
    percentage: '2.5%',
    indicator: 'plus',
    image: '/assets/images/dashboards/wave-revenue.svg',
  },
  {
    id: 'd2',
    title: 'Sales',
    value: '1,429',
    percentage: null,
    indicator: null,
    image: '/assets/images/dashboards/wave-sales.svg',
  },
  {
    id: 'd3',
    title: 'Views',
    value: '190.000',
    percentage: '2%',
    indicator: 'minus',
    image: '/assets/images/dashboards/wave-views.svg',
  },
  {
    id: 'd4',
    title: 'Liked',
    value: '19.000',
    percentage: '2%',
    indicator: 'plus',
    image: '/assets/images/dashboards/wave-liked.svg',
  },
]

export const mockBarData = [
  {
    day: 'Monday',
    degress: 59,
    color: 'teal',
  },
  {
    day: 'Tuesday',
    degress: 61,
    color: 'pink',
  },
  {
    day: 'Wednesday',
    degress: 55,
    color: 'gray',
  },
  {
    day: 'Thursday',
    degress: 78,
    color: 'aqua',
  },
  {
    day: 'Friday',
    degress: 71,
    color: 'orange',
  },
  {
    day: 'Saturday',
    degress: 56,
    color: 'gold',
  },
  {
    day: 'Sunday',
    degress: 67,
    color: 'purple',
  },
]

export const mockPie = [
  { id: 'A', label: 'Category A', value: 300 },
  { id: 'B', label: 'Category B', value: 500 },
  { id: 'C', label: 'Category C', value: 200 },
]

export const mockLineData = [
  {
    id: 'japan',
    color: 'aqua',
    data: [
      {
        x: 'plane',
        y: 101,
      },
      {
        x: 'helicopter',
        y: 75,
      },
      {
        x: 'boat',
        y: 36,
      },
      {
        x: 'train',
        y: 216,
      },
      {
        x: 'subway',
        y: 35,
      },
      {
        x: 'bus',
        y: 236,
      },
      {
        x: 'car',
        y: 88,
      },
    ],
  },
  {
    id: 'france',
    color: 'coral',
    data: [
      {
        x: 'plane',
        y: 212,
      },
      {
        x: 'helicopter',
        y: 190,
      },
      {
        x: 'boat',
        y: 270,
      },
      {
        x: 'train',
        y: 9,
      },
      {
        x: 'subway',
        y: 75,
      },
      {
        x: 'bus',
        y: 175,
      },
      {
        x: 'car',
        y: 33,
      },
    ],
  },
  {
    id: 'us',
    color: 'teal',
    data: [
      {
        x: 'plane',
        y: 191,
      },
      {
        x: 'helicopter',
        y: 136,
      },
      {
        x: 'boat',
        y: 91,
      },
      {
        x: 'train',
        y: 190,
      },
      {
        x: 'subway',
        y: 211,
      },
      {
        x: 'bus',
        y: 152,
      },
      {
        x: 'car',
        y: 189,
      },
    ],
  },
]

export const mockProduct = {
  id: 'asddwases121',
  name: 'Samsung Galaxy S21 Ultra 12/256 Gb Garansi Resmi',
  slug: 'samsung-galaxy-s21-ultra-12256-gb-garansi-resmi',
  categories: 'Smarphone',
  imgUrl:
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQuLVh_u2K7yX0nx9HAvFZDDjbV_k0UOZcOtpBrTCf6j-1i4P1ZUcOFZncy-54_LjRxxVJFGRNYXwS2mnxUQQemOavKmhYLT9LVwFqKOpT1-FVeM91rnfapxw&usqp=CAE',
  price: 19000000,
  priceDiscount: 17000000,
  priceString: 'Rp 19.000.000',
  priceDiscountString: 'Rp. 17.000.000',
  discountPrecentage: 15,
  label: [
    {
      id: 'wow1',
      name: 'Cashback',
      position: 'promo',
    },
    {
      id: 'wow2',
      name: 'Terjual 200',
      position: 'integrity',
    },
  ],
  rating: '4.7',
  isRating: true,
  isWishList: true,
}

export const mockDataProfile = {
  fullname: 'Natashia Milla A',
  username: '@natassia_12',
  profileImage: '/assets/images/profile1.jpg',
  bannerImage: '/assets/images/banner_profile.jpg',
  about: 'Non esse quis est occaecat tempor ut cupidatat laborum sunt laborum. Aute ea eu culpa tempor.',
}

export const mockDataAutocomplate = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
]

export const mockDataSimpleTable = [
  {
    id: 1,
    name: 'Pate Staries',
    email: 'pstaries0@360.cn',
    phone: '926-501-3719',
  },
  {
    id: 2,
    name: 'Paloma Colwill',
    email: 'pcolwill1@mozilla.org',
    phone: '722-878-2147',
  },
  {
    id: 3,
    name: 'Kimmie Micklewicz',
    email: 'kmicklewicz2@macromedia.com',
    phone: '120-732-3070',
  },
  {
    id: 4,
    name: 'Scottie Christescu',
    email: 'schristescu3@nbcnews.com',
    phone: '110-554-6952',
  },
  {
    id: 5,
    name: 'Lucius Heijnen',
    email: 'lheijnen4@webs.com',
    phone: '196-282-4510',
  },
  {
    id: 6,
    name: 'Gill Bremond',
    email: 'gbremond5@omniture.com',
    phone: '129-404-4720',
  },
  {
    id: 7,
    name: 'Brew Zanussii',
    email: 'bzanussii6@yale.edu',
    phone: '713-230-0869',
  },
  {
    id: 8,
    name: 'Atlanta Zamboniari',
    email: 'azamboniari7@blogtalkradio.com',
    phone: '593-703-9610',
  },
  {
    id: 9,
    name: 'Cathee Culham',
    email: 'cculham8@soundcloud.com',
    phone: '270-866-0988',
  },
  {
    id: 10,
    name: 'Evanne Terlinden',
    email: 'eterlinden9@illinois.edu',
    phone: '580-485-1476',
  },
]
