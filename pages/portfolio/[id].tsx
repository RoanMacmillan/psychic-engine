import { GetStaticPaths, GetStaticProps } from 'next';
import { Todos, fetchData } from '../text';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '@/components/nav';


interface TodoDetailProps {

    todo: Todos;
}

const Detail: React.FC<TodoDetailProps> = ({todo}) => {


    
    
    return (
        <div className="">

<Nav />

      <h1 className="text-3xl font-bold mb-4">{todo.title}</h1>
      <p>ID: {todo.id}</p>
      <img src={todo.url} alt={todo.title} className="rounded" />


      


    </div>
    );
};

export default Detail;


export const getStaticPaths: GetStaticPaths = async () => {

    const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
  const todos: Todos[] = response.data.slice(1, 20);

    const paths = todos.map((todo) => ({

        params: {id: todo.id.toString()},

    }))

    return {paths, fallback: false}

}

export const getStaticProps: GetStaticProps = async (context) => {


    const {id} = context.params!;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
    const todo = response.data;


    return {

        props: {

            todo,
        },
    }

}