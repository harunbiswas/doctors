import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Values from "../../../Values";

export default function RecentBlog() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  // call blogs
  useEffect(() => {
    const url = `${Values.BASE_URL}/admin/blogs`;
    axios
      .get(url)
      .then((d) => {
        setItems(d.data.reverse());
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [id]);

  return (
    <div className="widget mb-4 pb-2">
      <h5 className="widget-title">Recent Post</h5>
      <div className="mt-4">
        {items &&
          items.map(
            (item, i) =>
              item.id !== parseInt(id) &&
              i < 5 && (
                <div key={i} className="clearfix post-recent">
                  <div className="post-recent-thumb float-start">
                    {" "}
                    <Link to={`/admin/blog-detail/${item.id}`}>
                      {" "}
                      <img
                        alt="img"
                        src={item && item.thumbnail}
                        className="img-fluid rounded"
                      />
                    </Link>
                  </div>
                  <div className="post-recent-content float-start">
                    <Link to={`/admin/blog-detail/${item.id}`}>
                      {item && item.title}
                    </Link>
                    <span className="text-muted mt-2">
                      {item && moment(item.createdAt).fromNow()}
                    </span>
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
}
