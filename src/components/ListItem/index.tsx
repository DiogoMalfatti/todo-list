import styled from 'styled-components'
import { Item } from '../../types/Item'

type Props = {
  item: Item,
  onChange: (id: number, done: boolean) => void
}

type ContainerProps = {
  done: boolean;
}

export const ListItem = ({ item, onChange }: Props) => {

  return (
    <Container done={item.done} >
      <input 
        type="checkbox" 
        checked={item.done}
        onChange={e => onChange(item.id, e.target.checked)} 
      />
      <label>{item.name}</label>
    </Container>
  )
}

const Container = styled.div(({ done }: ContainerProps) => (
  `
  display: flex;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  input {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
  label {
    color: #ccc;
    text-decoration: ${done ? 'line-through' : 'initial'};
  }
`
))