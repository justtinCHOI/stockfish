import {useParams} from "react-router";
import ChatComponent from "../../../components/stock/article/ChatComponent.jsx";

function ChatPage() {

    const {tno} = useParams()

    return (
        <div className="p-4 w-full bg-white  ">
            <div className="text-3xl font-extrabold">
                Todo ChatPage {tno}
            </div>
            <ChatComponent tno={tno}/>
        </div>
    );
}

export default ChatPage;