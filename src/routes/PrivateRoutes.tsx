import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface PropType {
    component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
    const isAuthenticated = true; //window.localStorage.getItem('TOKEN')
    if (isAuthenticated) return <Component />;
    return <Navigate to='/' />;
};

export default PrivateRoute;