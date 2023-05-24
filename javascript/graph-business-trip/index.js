function businessTrip(graph, cities) {
  let cost = 0;

  for (let i = 0; i < cities.length - 1; i++) {
    const currentCity = cities[i];
    const nextCity = cities[i + 1];

    const directFlightCost = getDirectFlightCost(graph, currentCity, nextCity);

    if (directFlightCost === null) {
      return null; // No direct flight available
    }

    cost += directFlightCost;
  }

  return cost;
}

function getDirectFlightCost(graph, source, destination) {
  const flights = graph[source];

  if (flights) {
    const cost = flights[destination];
    if (cost) {
      return cost;
    }
  }

  return null; // No direct flight available
}

const graph = {
  Metroville: { Pandora: 82 },
  Pandora: { Metroville: 82 },
  Arendelle: { NewMonstropolis: 99, Naboo: 150 },
  NewMonstropolis: { Arendelle: 99 },
  Naboo: { Arendelle: 150, Pandora: 115 },
  Narnia: { Arendelle: 37, Naboo: 250 },
};

const trip1 = ['Metroville', 'Pandora'];
const trip2 = ['Arendelle', 'NewMonstropolis', 'Naboo'];
const trip3 = ['Naboo', 'Pandora'];
const trip4 = ['Narnia', 'Arendelle', 'Naboo'];

console.log(businessTrip(graph, trip1)); // Output: 82
console.log(businessTrip(graph, trip2)); // Output: 115
console.log(businessTrip(graph, trip3)); // Output: null
console.log(businessTrip(graph, trip4)); // Output: null
