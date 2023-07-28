export const getHome = () => {
  return {
    hotelName: 'Hotel Miranda',
    bookings: { methods: ['POST', 'GET', 'PUT', 'DELETE'], route: '/bookings' },
    contacts: { methods: ['POST', 'GET', 'PUT', 'DELETE'], route: '/contacts' },
    users: { methods: ['POST', 'GET', 'PUT', 'DELETE'], route: '/users' },
    rooms: { methods: ['POST', 'GET', 'PUT', 'DELETE'], route: '/rooms' },
  };
};