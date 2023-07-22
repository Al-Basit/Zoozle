import React from "react";
import "../assets/styles/SearchPage.css";
import { useStateValue } from "../services/StateProvider";
import useGoogleSearch from "../services/useGoogleSearch";
import SearchPageHeader from "../components/SearchPageHeader";
import PaginationButton from "../components/PaginationButton";

function SearchPage() {
  const [{ term, indexValue }] = useStateValue();

  const { data } = useGoogleSearch(term, indexValue);

  return (
    <div className="searchPage">
      <SearchPageHeader term={term} />

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            {" "}
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h3>{item.title}</h3>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}

      {data && <PaginationButton />}
    </div>
  );
}

export default SearchPage;
