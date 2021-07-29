import Output from '../components/Output';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        action: state.activity
    }
}
export default connect(mapStateToProps)(Output);