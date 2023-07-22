import React from "react";
import "../assets/styles/ImagePage.css";
import SearchPageHeader from "../components/SearchPageHeader";
import { useStateValue } from "../services/StateProvider";
import useGoogleSearch from "../services/useGoogleSearch";

function ImagePage() {
  const [{ term, indexValue }] = useStateValue();

  const { data } = useGoogleSearch(term, indexValue, true);
  console.log(data)

  return (
    <div className="ImagePage">
      <SearchPageHeader term={term} />
      <div className="ImagePage__results">
        {data?.items.map((item, index) => (
          <div key={index} className="ImagePage__result">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                className="ImagePage__image"
                src={item.link}
                alt={item.title}
              />
            </a>
          </div>
        ))}
      </div>
      {data?.queries.nextPage && (
        <div className="ImagePage__loadMore">
          {/* <button onClick={handleLoadMore}>Load more</button> */}
        </div>
      )}
    </div>
  );
}

export default ImagePage;

//   return (
//     <div className="ImagePage">
//       <SearchPageHeader term={term} />
//       <div className="ImagePage__results">
//   {data?.items.filter(item => item.pagemap?.cse_image?.length > 0).map((item, index) => (
//     <div key={index}>
//       <a href={item.link}>
//         <img
//           className="ImagePage__image"
//           src={item.pagemap?.cse_image[0]?.src}
//           alt=""
//         />
//       </a>
//     </div>
//   ))}
// </div>

//     </div>
//   );
// }

// export default ImagePage;
