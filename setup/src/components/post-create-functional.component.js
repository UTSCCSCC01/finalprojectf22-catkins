import PostCreate from './post-create.component';
import { useSelector } from 'react-redux';

function PostCreateFunctional() {
    let currentUser = useSelector(state => state.login.userName);
    return <PostCreate currentUser={currentUser}/>
}

export default PostCreateFunctional