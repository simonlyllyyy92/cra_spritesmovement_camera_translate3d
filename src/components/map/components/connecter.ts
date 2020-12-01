import { stat } from 'fs'
import { connect, ConnectedProps } from 'react-redux'
import {RootReducers} from '../../../store/root-reducer'


const mapState = (state: RootReducers) => ({
  mapState: state.mapReducer.maps.mapSource,
  peopleState: state.mapReducer.maps.people,
  wallState: state.mapReducer.maps.walls
})


export const connector = connect(
  mapState,
)

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
export type PropsFromRedux = ConnectedProps<typeof connector>