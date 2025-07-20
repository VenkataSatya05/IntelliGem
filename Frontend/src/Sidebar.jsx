import "./Sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext.jsx";
import {v1 as uuidv1} from "uuid";
import blacklogo from "./assets/blacklogo.png";

function Sidebar() {
    const {allThreads, setAllThreads, currThreadId, setNewChat, setPrompt, setReply, setCurrThreadId, setPrevChats} = useContext(MyContext);

    const getAllThreads = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/thread");
            const res = await response.json();
            const filteredData = res.map(thread => ({threadId: thread.threadId, title: thread.title}));
            //console.log(filteredData);
            setAllThreads(filteredData);
        } catch(err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAllThreads();
    }, [currThreadId])


    const createNewChat = () => {
        setNewChat(true);
        setPrompt("");
        setReply(null);
        setCurrThreadId(uuidv1());
        setPrevChats([]);
    }

    const changeThread = async (newThreadId) => {
        setCurrThreadId(newThreadId);

        try {
            const response = await fetch(`http://localhost:8080/api/thread/${newThreadId}`);
            const res = await response.json();
            console.log(res);
            setPrevChats(res);
            setNewChat(false);
            setReply(null);
        } catch(err) {
            console.log(err);
        }
    }   

    const deleteThread = async (threadId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/thread/${threadId}`, {method: "DELETE"});
            const res = await response.json();
            console.log(res);

            //updated threads re-render
            setAllThreads(prev => prev.filter(thread => thread.threadId !== threadId));

            if(threadId === currThreadId) {
                createNewChat();
            }

        } catch(err) {
            console.log(err);
        }
    }

    return (
        <section className="sidebar">
            {/* Header section for app name, version, and search icon */}
            <header className="sidebar-header">
                <div className="sidebar-title" style={{display: 'flex', alignItems: 'center', gap: '12px', flexDirection: 'row'}}>
                    <img src={blacklogo} alt="Logo" className="logo" />
                    <span className="sidebar-app-name" style={{marginRight: '8px'}}>IntelliGem</span>
                    <span className="sidebar-version">2.5 </span>
                </div>
                <i className="fa-solid fa-magnifying-glass sidebar-search"></i>
            </header>

            {/* Top menu */}
            <div className="sidebar-menu">
                <button className="sidebar-btn sidebar-newchat" onClick={createNewChat} title="New chat">
                    <i className="fa-regular fa-pen-to-square"></i>
                    <span>New chat</span>
                </button>
            </div>

            {/* Recent label */}
            <div className="sidebar-section-label">Recent</div>

            {/* Chat history */}
            <ul className="history">
                {
                    allThreads?.map((thread, idx) => (
                        <li key={idx} 
                            onClick={(e) => changeThread(thread.threadId)}
                            className={thread.threadId === currThreadId ? "highlighted": " "}
                        >
                            {thread.title}
                            <i className="fa-solid fa-trash"
                                onClick={(e) => {
                                    e.stopPropagation(); //stop event bubbling
                                    deleteThread(thread.threadId);
                                }}
                            ></i>
                        </li>
                    ))
                }
            </ul>
 
            {/* Bottom section: settings/help and user info */}
            <div className="sidebar-bottom">
                <button className="sidebar-btn sidebar-settings">
                    <i className="fa-solid fa-gear"></i>
                    <span>Settings and help</span>
                </button>
                <div className="sign">
                    <p>By Venkata Satya Alajangi &hearts;</p>
                </div>
            </div>
        </section>
    )
}

export default Sidebar;