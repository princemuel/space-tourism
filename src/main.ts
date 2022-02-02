import data from '../data.json';

const categories = data.destinations.reduce((names, destination) => {
  if (!names.includes(destination.name)) {
    names.push(destination.name);
  }
  return names;
}, [] as string[]);

console.log(categories);
