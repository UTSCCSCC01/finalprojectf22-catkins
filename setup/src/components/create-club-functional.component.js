import CreateClub from './create-club.component';
import { useSelector } from 'react-redux';

function CreateClubFunctional() {
    let currentUser = useSelector(state => state.login.userName);
    return <CreateClub currentUser={currentUser}/>
}

export default CreateClubFunctional