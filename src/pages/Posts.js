import React, {useEffect, useMemo, useRef, useState} from 'react';
import Counter from "../components/Counter";
import ClassCounter from "../components/ClassCounter";
import styles from "../styles/App.css";
import PostItem from "../components/PostItem";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import PostForm from "../components/PostForm";
import MySelect from "../components/UI/select/MySelect";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import {usePosts} from "../hooks/usePosts";
import axios from "axios";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount, getPagesArray} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

const Posts = () => {

    const [posts, setPosts] = useState([
        // {id: 1, title: "JS", body: "c text"},
        // {id: 2, title: "JAVA", body: "b text"},
        // {id: 3, title: "C++", body: "a text"},
    ]);
    // const [posts2, setPosts2] = useState([
    //     {id: 1, title: "TypeScript", description: "some text"},
    //     {id: 2, title: "PHP", description: "some text"},
    //     {id: 3, title: "C#", description: "some text"},
    // ]);
    // const [title, setTitle] = useState('');
    // const bodyInputRef = useRef();
    // console.log(title);
    // const [body, setBody] = useState('');

    // const [selectedSort, setSelectedSort] = useState('');
    // const [searchQuery, setSearchQuery] = useState('');

    const [filter, setFilter] = useState({
        sort: '',
        query: ''
    })

    const [modal, setModal] = useState(false);

    // const sortedPosts = useMemo(() => {
    //     // console.log('worked');
    //     if (filter.sort) {
    //         return [...posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))];
    //     }
    //     return posts;
    // }, [filter.sort, posts]);
    //
    //
    // const sortedAndSearchPosts = useMemo(() => {
    //     return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    // }, [filter.query, sortedPosts])
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);




    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
    // const [isPostsLoading, setIsPostsLoading] = useState(true);
    // const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        // console.log(response);
        const totalCount = response.headers[`x-total-count`];
        // const l =
        setTotalPages(getPageCount(totalCount, limit));
    });
    // console.log(totalPages)


    // useEffect(() => {
    //     fetchPosts()
    // }, [page]);

    useEffect(() => {
        fetchPosts(limit, page);
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }


    // const sortPosts = (sort) => {
    //     setSelectedSort(sort);
    //     // мутируємо копію нового масиву, не ламаючи старий масив
    //     // setPosts([...posts.sort((a,b) => a[sort].localeCompare(b[sort]))])
    // }


    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page)
    }


    return (
        <div className={"App"}>
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}
            {/*<PostItem/>*/}

            <MyButton onClick={() => setModal(true)} style={{marginTop: 30}}>
                Create user
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>

            {
                postError && <h1>Error: {postError}</h1>
            }
            {
                isPostsLoading
                    ?
                    <div style={{display: "flex", justifyContent: "center", marginTop: 50}}><Loader/></div>
                    :
                    <PostList remove={removePost} posts={sortedAndSearchPosts} title={"List of posts"}/>

            }

            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>

        </div>
    );
};

export default Posts;