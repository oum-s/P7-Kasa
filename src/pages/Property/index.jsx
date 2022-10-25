import { Link, Outlet } from 'react-router-dom';

function Property() {    

    return (
    <>
        <div>
            <h1>La liste des biens</h1>
            <ul>
                <li><Link to="/property/1">fiche logement 1</Link></li>
                <li><Link to="/property/2">fiche logement 2</Link></li>
            </ul>
        </div>
        {/* The Outlet component is essentially a placeholder component that will render whatever our current page's content is.*/}
        <Outlet />
    </>
    )
}

export default Property;
