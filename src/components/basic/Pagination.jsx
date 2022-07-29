import { useState } from "react";

export default function Pagination({ data }) {
  const [pageNum, setPageNum] = useState(1);
  const pageNumHandler = (e) => {
    setPageNum(e);
  };
  const pageNumPrevHandler = () => {
    setPageNum(pageNum - 1);
  };
  const pageNumNextHandler = () => {
    setPageNum(pageNum + 1);
  };
  const totalPage = data && data.num && Math.ceil(data.num / 12);
  const numOfPage = [];
  for (let i = 1; i <= totalPage; i++) {
    numOfPage.push(i);
  }
  data.handler(pageNum);

  return (
    <ul className="pagination justify-content-end mb-0 list-unstyled">
      <li className="page-item">
        <a
          onClick={pageNumPrevHandler}
          className={`page-link ${pageNum === 1 && "d-none"} || ""`}
          aria-label="Previous"
        >
          Prev
        </a>
      </li>
      {numOfPage.map((item) => (
        <li key={item} className="page-item active">
          <a onClick={(e) => pageNumHandler(item)} className="page-link">
            {item}
          </a>
        </li>
      ))}

      <li className="page-item">
        <a
          onClick={pageNumNextHandler}
          className={`page-link ${(pageNum === totalPage && "d-none") || ""}`}
          aria-label="Next"
        >
          Next
        </a>
      </li>
    </ul>
  );
}
