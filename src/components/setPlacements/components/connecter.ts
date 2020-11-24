import { connect, ConnectedProps } from 'react-redux'

export const connector = connect()

export type PropsFromRedux = ConnectedProps<typeof connector>