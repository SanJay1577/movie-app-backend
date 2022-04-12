import { Movie } from "../models/movie.js";

export const getFunction = async (req, res) => {
  try {
    //finding all the movies for the user
    const movie = await Movie.find({});
    return res.status(200).send({ payload: movie });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
};
