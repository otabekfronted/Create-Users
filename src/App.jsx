import { useEffect, useState } from "react";
// components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import UserList from "./components/userlist/UserList";
import NewUserForm from "./Components/newuser/NewUserForm";

// style
import "./App.css";

function App() {
    const getIntialTasks = () => {
        const savedTasks = localStorage.getItem("users");
        return savedTasks ? JSON.parse(savedTasks) : [];
    };
    const [showModal, setShowModal] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [users, setUsers] = useState(getIntialTasks);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);
    // delete user
    // const deletUser = (id) => {
    //     setUsers(users.filter((user) => user.id !== id));
    // };

    const deletUser = (id) => {
        setUsers((prev) => {
            return prev.filter((user) => {
                return user.id !== id;
            });
        });
    };

    const closeModal = (e) => {
        console.log(e);
        if (e.target.className === "overlay") {
            setShowModal(false);
        }
        if (e.key === "Escape") {
            setShowModal(false);
        }
    };

    const addUser = (user) => {
        setUsers((prev) => {
            return [...prev, user];
        });
        setShowModal(false);
    };

    return (
        <div onClick={closeModal} onKeyDown={closeModal} className="App">
            <Navbar
                usersLength={users.length}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
            />
            <main>
                <div className="no-users">
                    {!users.length && <h2> No Users</h2>}
                </div>
                <UserList users={users} deletUser={deletUser} />
                {showModal && <NewUserForm addUser={addUser} />}
            </main>
            <button className="create-user" onClick={() => setShowModal(true)}>
                Create User
            </button>
            <Footer />
        </div>
    );
}

export default App;

// {
//     id: 1,
//     image: "https://picsum.photos/400?random=1",
//     firstName: "Otabek",
//     lastName: "Madaminov",
//     age: 22,
//     from: "Andijan",
//     job: "Frontend Devoloper",
//     gender: "Male",
// },
