import { Book } from "../models/bookModel.js";

export const saveBook = async(req,res) => {
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({message: "Send all required fields: title, author, publishYear"})
        }
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(200).send(book);
    }
    catch (error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
}

export const getBooks = async(req,res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({count: books.length, data:books});
    }
    catch(err){
        console.log(err.message);
        res.status(500).send({message: err.message});
    }
}

export const getBook = async(req,res) => {
    const {id} = req.params
    try {
        const books = await Book.findById(id);
        return res.status(200).json(books);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send({message: err.message});
    }
}

export const updateBook = async(req,res) => {
    const {id} = req.params
    try{
        const result = await Book.findByIdAndUpdate(id, req.body, {new: true});
        if(!result){
            return res.status(404).json({message: "Book not found"})
        }
        else{ 
            return res.status(200).send({message: 'Book updated sucessfully', updatedBook: result});
        }
    }
    catch(err){
        console.log(err.message);
        res.status(500).send({message: err.message});
    }
}

export const deleteBook = async(req,res) => {
    const {id} = req.params;
    try{
        const result = await Book.findByIdAndDelete(id);

        if (!result){
            return res.status(404).json({message: "Book not found"});
        }
        return res.status(200).send({message: "Book deleted successfully"})
    }
    catch(err){
        console.log(err.message);
        res.status(500).send({message: err.message})
    }
}