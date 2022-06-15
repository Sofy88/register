import { useEffect } from "react"
import { GetItems } from "../components/API"
import { useOutletContext } from "react-router-dom"

const ShowItems = (props) => {
    const [userdata] = useOutletContext();
    const [items, setItems] = useState([]);

    const updateItems = async () => {
        const newItems = await GetItems()
    }
}