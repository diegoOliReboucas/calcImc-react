import { Level } from "../../helpers/imc";
import * as C from './gridItemStyles'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props = {
  item: Level
}

export const GridItem = ({item} : Props) => {
  return (
    <C.Main style={{backgroundColor: item.color}}>
      <C.gridIcon>
        <img src={item.icon === 'up' ? upImage : downImage} alt="" width={30}/>
      </C.gridIcon>

      <C.gridTitle>{item.title}</C.gridTitle>
      {item.yourImc && 
        <C.yourImc>
          Seu Imc é de {item.yourImc} kg/m²
        </C.yourImc>
      }
      <C.gridInfo>
        <>
          IMC esta entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
        </>
      </C.gridInfo>
    </C.Main>
  );
}