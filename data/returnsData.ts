export type Product = {
  title: string
  description: string
  imgSrc: string
  href: string
  price: number
  apiId: string
  quantity: number
  selected: boolean
}

const projectsData: Product[] = [
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: 'https://dummyimage.com/400x400',
    // imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
    price: 3500,
    apiId: 'price_1KPQwsBo5n6BpyDY6xlDje8f',
    quantity: 1,
    selected: true,
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    // imgSrc: '/static/images/time-machine.jpg',
    imgSrc: 'https://dummyimage.com/400x400',
    href: '/blog/the-time-machine',
    price: 5000,
    apiId: 'price_1KPRSHBo5n6BpyDYn19hDMKZ',
    quantity: 1,
    selected: false,
  },
]

export default projectsData
