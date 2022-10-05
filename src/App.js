import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import styles from "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "some text"},
        {id: 2, title: "JAVA", body: "some text"},
        {id: 3, title: "C++", body: "some text"},
    ]);
    // const [posts2, setPosts2] = useState([
    //     {id: 1, title: "TypeScript", description: "some text"},
    //     {id: 2, title: "PHP", description: "some text"},
    //     {id: 3, title: "C#", description: "some text"},
    // ]);


    const [title, setTitle] = useState('');
    // const bodyInputRef = useRef();
    // console.log(title);
    const [body, setBody] = useState('');




    const addNewPost = (e) => {
        e.preventDefault()
        // console.log(`title`, title);
        // console.log(bodyInputRef.current.value);

        const newPost = {
            id: Date.now(),
            title,
            body
        };
        console.log(newPost);

        setPosts([...posts, newPost]);
        setTitle('');
        setBody('');
    }




    return (
        <div className={"App"}>
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}
            {/*<PostItem/>*/}

            <form>
                {/* Controlled input */}
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder={"name of post"}
                />
                {/* Uncontrolled input */}
                {/*<MyInput*/}
                {/*    ref={bodyInputRef}*/}
                {/*    type={"text"}*/}
                {/*    placeholder={"name of post"}*/}
                {/*/>*/}
                <MyInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type="text"
                    placeholder={"name of post"}
                />

                <MyButton
                    onClick={addNewPost}
                >
                    Create post
                </MyButton>
            </form>

            <PostList posts={posts} title={"List of posts"}/>
            {/*<PostList posts={posts2} title={"List of posts 2"}/>*/}

        </div>
    );
};

export default App;