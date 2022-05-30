import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface PropType {
    component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
    const isAuthenticated = window.localStorage.getItem('TOKEN'); //window.localStorage.getItem('TOKEN')
    if (isAuthenticated !== null) return <Component />;
    return <Navigate to='/' />;
};

export default PrivateRoute;