import { useEffect, useState } from "react";

export const usePagination = (charts, chartsperpage = 4) => {
  const [currpage, setCurrpage] = useState(1);
  const totalPages = Math.ceil(charts?.length / chartsperpage);
  const start = (currpage - 1) * chartsperpage;
  const end = start + chartsperpage;
  const currdata = charts?.slice(start, end);

  const nextPage = () => {
    if (currpage < totalPages) {
      setCurrpage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currpage > 1) {
      setCurrpage((prev) => prev - 1);
    }
  };

  const gotoPage = (page) => {
  if (page >= 1 && page <= totalPages) {
    setCurrpage(page);
  }
};

  useEffect(() => {
    if (totalPages === 0) {
      if (currpage !== 1) {
        setCurrpage(1);
      }
      return;
    }

    if (currpage > totalPages) {
      setCurrpage(totalPages);
    }
  }, [currpage, totalPages]);

  return {
    currpage,
    totalPages,
    nextPage,
    prevPage,
    currdata,
    gotoPage,
  };
};
