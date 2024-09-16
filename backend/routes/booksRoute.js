import express from "express";
import { deleteBook, getBook, getBooks, saveBook, updateBook } from "../controllers/bookController.js";

const router = express.Router();router
//Route for saving a new book
router.post('/',saveBook)
//Route to get all books
router.get('/',getBooks)
//Route getting one book
router.get('/:id',getBook)
//Route update book
router.put('/:id',updateBook)
//Route delete boook
router.delete('/:id',deleteBook)

export default router;