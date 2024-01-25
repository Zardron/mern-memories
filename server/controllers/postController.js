import Post from "../models/post.js";

export const getPost = async (req, res) => {
  try {
    const post = await Post.find();

    console.log(post);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
