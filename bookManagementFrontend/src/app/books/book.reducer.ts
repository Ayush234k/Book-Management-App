import { createReducer, on } from "@ngrx/store";
import { addBook, removeBook } from "./book.actions";
import { Book } from "../models/book";

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
    initialState
);