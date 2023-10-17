import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            This is navbar
            <Outlet></Outlet>
        </div>
    );
};

export default Root;