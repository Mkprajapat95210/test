interface SearchBoxProps {
  placeholder: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder }) => {
  return (
    <div className="position-relative">
      <div className="search-box">
        <input type="text" className="common-input common-input--lg pill shadow-sm auto-suggestion-input" placeholder={placeholder} />
        <button type="submit" className="btn btn-main btn-icon icon border-0"><img src="assets/images/icons/search.svg" alt="" /></button>
      </div>
      <ul className="auto-suggestion-list">
        <li><a href="#" className="auto-suggestion-list__item w-100 text-body">Business in HTML</a></li>
        <li><a href="#" className="auto-suggestion-list__item w-100 text-body">Business in WordPress</a></li>
        <li><a href="#" className="auto-suggestion-list__item w-100 text-body">Business in CMS</a></li>
        <li><a href="#" className="auto-suggestion-list__item w-100 text-body">Ecommerce in HTML</a></li>
        <li><a href="#" className="auto-suggestion-list__item w-100 text-body">Ecommerce in WordPress</a></li>
        <li><a href="#" className="auto-suggestion-list__item w-100 text-body">Ecommerce in CMS</a></li>
      </ul>
    </div>
  );
};
export default SearchBox;
