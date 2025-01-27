// style
import "./UserList.css";

function UserList({ users, deletUser }) {
    const getIntialTasks = () => {
        const savedTasks = localStorage.getItem("users");
        return savedTasks ? JSON.parse(savedTasks) : [];
    };
    return (
        <div className="userList">
            <div className="userList-container container">
                {users.map((user) => {
                    return (
                        <div className="card-inner" key={user.id}>
                            <img
                                src={user.image}
                                alt={user.name}
                                height={150}
                                width={150}
                            />
                            <h3>
                                {user.firstName} {user.lastName}, {user.age} age
                            </h3>
                            <p>From: {user.from}</p>
                            <p>Job: {user.job}</p>
                            <p>Gender: {user.gender}</p>
                            <button onClick={() => deletUser(user.id)}>
                                Delete
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default UserList;
