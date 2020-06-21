export const fetchData = async () => {
  try {
    const response = await fetch("https://run.mocky.io/v3/2d7acdd7-cf46-4659-a6b3-c0a65f1ec439");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
