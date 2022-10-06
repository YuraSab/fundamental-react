import React, {useMemo, useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import styles from "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";

const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: "JS", body: "c text"},
        {id: 2, title: "JAVA", body: "b text"},
        {id: 3, title: "C++", body: "a text"},
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

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const sortedPosts = useMemo(() => {
        console.log('worked');
        if (selectedSort) {
            return [...posts.sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))];
        }
        return posts;
    }, [selectedSort, posts]);



    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPosts])



    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }


    const sortPosts = (sort) => {
        setSelectedSort(sort);
        // мутируємо копію нового масиву, не ламаючи старий масив
        // setPosts([...posts.sort((a,b) => a[sort].localeCompare(b[sort]))])
    }



    return (
        <div className={"App"}>
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}
            {/*<PostItem/>*/}

            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    placeholder={"search"}
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />



                <MySelect
                    defaultValue={"sort by..."}
                    options={[
                        {value: 'title', name: "By title"},
                        {value: 'body', name: "By description"}
                    ]}
                    value={selectedSort}
                    onChange={sort => sortPosts(sort)}
                />
            </div>
            {
                sortedAndSearchPosts.length !== 0
                ? <PostList remove={removePost} posts={sortedAndSearchPosts} title={"List of posts"}/>
                    //{/*<PostList posts={posts2} title={"List of posts 2"}/>*/}
                : <h1 style={{textAlign: 'center'}}>No items found!</h1>
            }



        </div>
    );
};

export default App;