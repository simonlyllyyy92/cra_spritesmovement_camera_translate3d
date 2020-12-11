import { connect, ConnectedProps } from 'react-redux'
import {RootReducers} from '../../../store/root-reducer'

const mapState = (state: RootReducers) => ({
    walls: state.mapReducer.maps.walls,
    blocks: state.mapReducer.maps.blocks
  })
  
export const connector = connect(
    mapState
)

export type PropsFromRedux = ConnectedProps<typeof connector>