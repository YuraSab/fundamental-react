import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import styles from "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", description: "some text"},
        {id: 2, title: "JAVA", description: "some text"},
        {id: 3, title: "C++", description: "some text"},
    ]);
    // const [posts2, setPosts2] = useState([
    //     {id: 1, title: "TypeScript", description: "some text"},
    //     {id: 2, title: "PHP", description: "some text"},
    //     {id: 3, title: "C#", description: "some text"},
    // ]);


    const [title, setTitle] = useState('');
    console.log(title);

    const addNewPost = (e) => {
        e.preventDefault()
        console.log(`title`, title);
    }




    return (
        <div className={"App"}>
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}
            {/*<PostItem/>*/}

            <form
                // onSubmit={addNewPost}
            >
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder={"name of post"}
                />
                <MyInput type="text" placeholder={"name of post"}/>

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