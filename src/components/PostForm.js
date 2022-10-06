import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({
        title: '',
        body: ''
    });


    const addNewPost = (e) => {
        e.preventDefault()
        // console.log(`title`, title);
        // console.log(bodyInputRef.current.value);
        // const newPost = {
        //     id: Date.now(),
        //     title,
        //     body
        // };
        // console.log(newPost);
        // setPosts([...posts, newPost]);
        // setTitle('');
        // setBody('');

        // setPosts([ ...posts, {...post, id: Date.now()} ]);
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);

        setPost({
            title: '',
            body: ''
        })
    }

    return (
        <div>
            <form>
                {/* Controlled input */}
                <MyInput
                    // value={title}
                    value={post.title}
                    // onChange={e => setTitle(e.target.value)}
                    //                            ...post - all that had before and change field 'title'
                    onChange={e => setPost({...post, title: e.target.value})}
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
                    // value={body}
                    value={post.body}
                    // onChange={e => setBody(e.target.value)}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder={"name of post"}
                />

                <MyButton
                    onClick={addNewPost}
                >
                    Create post
                </MyButton>
            </form>

        </div>
    );
};

export default PostForm;