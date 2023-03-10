import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

export const InputSearch = styled.TextInput`
  width: 40%;
  height: 40px;
  border-top-left-radius: 1px;
  border-bottom-left-radius: 1px;
  border-width: 2px;
  border-color: #fff;
  padding-left: 12px;
`
export const ButtonSearch = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-bottom-right-radius: 1px;
  border-top-right-radius: 1px;
  border-left-width: 0px;
  border-width: 2px;
  border-color: #fff;
  align-items: center;
  justify-content: center;
`
