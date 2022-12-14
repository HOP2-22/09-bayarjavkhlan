import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SwitchHref = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    const switchLink = async () => {
      try {
        const href = await axios.get(`http://localhost:8000/${id}`);
        window.location.href = href.data.data[0].orignalLink;
      } catch (error) {
        console.log(error);
      }
    };
    switchLink();
  }, [id]);
};

export default SwitchHref;
