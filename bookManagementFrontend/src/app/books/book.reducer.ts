import { createReducer, on } from "@ngrx/store";
import { AddBook, AddBookSuccess, AddBookFaliure, RemoveBook } from "./book.actions";
import { Book } from "../models/book";
import { state } from "@angular/animations";

export const initialState: Book[] = [];

export const bookReducer = createReducer(
    initialState,
    // on(AddBook, (state, {bookId, bookName, bookAuthor, bookPrice}) => [...state, {bookId, bookName, bookAuthor, bookPrice}]),
    on(AddBook, (state) => { return state }),
    on(AddBookSuccess, (state, {bookId, bookName, bookAuthor, bookPrice}) => [...state, {bookId, bookName, bookAuthor, bookPrice}]),
    on(AddBookFaliure, (state, {error}) => {
        console.error(error);
        return state;
    }),

    on(RemoveBook, (state, {bookId}) => state.filter(book => book.bookId !== bookId))
);