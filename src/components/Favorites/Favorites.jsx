
import { connect } from "react-redux";

const Favorites = () => {
  return <div>
    Favorites
  </div>
}

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps)(Favorites);