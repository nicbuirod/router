/*const getAllCaracters = () => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((response) => {
        //cuando ya hay un result

        return response.json();
      })
      .then((data) => {
        setCharacters(data.results);
        context.rickAndMorty.characters = data.results;
        context.redirectDetailsRoute = "/rickandmorty";
      })
      .catch((error) => {
        //reject
        console.log(error);
      });
    setLoader(false);
  };*/

export const getAllCaracters = async () => {
  const url = "https://rickandmortyapi.com/api/character";
  try {
    const request = await fetch(url);
    const data = await (await request).json();
    return data.results;
  } catch (error) {
    return error;
  }
};

export const getOneCharacter = async (id) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  try {
    const request = await fetch(url);
    const data = await request.json();
    console.log("DATA", data);
    return data;
  } catch (error) {
    return error;
  }
};
