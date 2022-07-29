import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleBlogBody from "../../layouts/frontend/blog/SingleBlogBody";
import Values from "../../Values";

export default function AdminBlogDetail() {
  const { id = 1 } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const url = `${Values.BASE_URL}/admin/blog/${id}`;
    axios.get();
    axios
      .get(url, {
        headers: {
          token: JSON.parse(localStorage.getItem("login")).value.token,
        },
      })
      .then((d) => {
        setData(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [id && id]);
  return (
    <>
      <SingleBlogBody data={data} />
    </>
  );
}
