import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (authentication && !authStatus) {
            navigate("/login");
        } else if (!authentication && authStatus) {
            navigate("/");
        } else {
            setLoading(false);
        }
    }, [authStatus, navigate, authentication]);

    if (loading) {
        return (
            <h1>Wait for a moment....</h1>
        );
    }

    return <>{children}</>;
}
