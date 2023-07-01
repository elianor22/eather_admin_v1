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
