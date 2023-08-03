import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/SearchPage.css";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Header from "../components/Header";
import { useStateValue } from "../services/StateProvider";

function SearchPageHeader() {
  const [{ term }, dispatch] = useStateValue();

  useEffect(() => {
    const searchTerm = localStorage.getItem("searchTerm");
    if (searchTerm && !term) {
      dispatch({
        type: "SET_SEARCH_TERM",
        term: searchTerm,
      });
    }
  }, [term, dispatch]);

  useEffect(() => {
    localStorage.setItem("searchTerm", term);
  }, [term]);

  return (
    <div>
      <div className="searchPage__header">
        <div className="searchPage__mainHeader">
          <Link to="/">
            <img
            // style={{height: 100}}
              className="searchPage__logo"
              src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg"
              // src="./images/zoozle.png"
              alt=""
            />
          </Link>
          <Search hideButtons defaultVal={term} />
          <Header searchpage />
        </div>

        <div className="searchPage__headerBody">
          <div className="searchPage__rightHeader"></div>
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Videos</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPageHeader;
