import PostMessage from "../models/postMessage.js";
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
    try 
    {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages); //ok
    } 
    catch (error) 
    {
        res.status(404).json({message: error.message}) //not found
    }
};

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try 
    {
        await newPost.save();
        res.status(201).json(newPost); //created
    } 
    catch (error) 
    {
        res.status(409).json({ message: error.message }); //conflict
    }
};

export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    };

    await PostMessage.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    };

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true});
    res.json(updatedPost);
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, repoUrl, selectedFile, tags } = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    };

    const updatedPost = { repoUrl, title, message, tags, selectedFile, _id: id };
    await PostMessage.findByIdAndUpdate(id, updatedPost, {new: true});

    res.json(updatedPost);
}