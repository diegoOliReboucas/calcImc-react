import React, { ChangeEvent } from 'react';
import * as C from './AppStyles'
import powerImg from './assets/powered.png'
import leftArrowImage from './assets/leftarrow.png'
import { Input } from './components/Input';
import {levels, calculateIMC, Level} from './helpers/imc'
import { GridItem } from './components/gridItem/GridItem';

function App() {
  const [heightField, setHeightField] = React.useState<number>(0)
  const [weightField, setWeightField] = React.useState<number>(0)
  const [toShow, setToShow]= React.useState<Level | null>(null)

  const handleCalculate = () => {
    if(heightField && weightField){
      setToShow(calculateIMC(heightField, weightField))
    }else {
      alert('Digite todos os campos')
    }
  }

  const handleBackButton = () => {
    setToShow(null)
    setHeightField(0)
    setWeightField(0)
  }

  return (
    <C.Main>
      <C.Header>
        <C.headerContainer>
          <img src={powerImg} alt="" width={150}/>
        </C.headerContainer>
      </C.Header>
      <C.Container>
        <C.leftSide>
          <h1>Calcule seu IMC</h1>
          <p>IMC é a sigla para indice de Massa Corporea. Parametro adotado pela Organização Mundial de Saude para calcular o peso ideal de cada pessoa </p>

          <Input type='number' placeholder='Digite a sua altura. Ex: 1.5 (em metros)' value={heightField > 0 ? heightField : ''} disabled={toShow ? true : false}  onChange={(e: ChangeEvent<HTMLInputElement>) => setHeightField(parseFloat(e.target.value))}/>

          <Input type='number' placeholder='Digite o seu peso. Ex: 1.5 (em kg)' value={weightField > 0 ? weightField : ''} disabled={toShow ? true : false} onChange={(e: ChangeEvent<HTMLInputElement>) => setWeightField(parseFloat(e.target.value))}/>

          <button disabled={toShow ? true : false}  onClick={handleCalculate}>Calcular</button>
        </C.leftSide>

        <C.rightSide>
          {!toShow &&
          <C.Grid>
            {levels.map((item, key) => (
            <GridItem key={key} item={item}/>
            ))}
          </C.Grid>
          }
          {toShow &&
            <C.rightBig>
              <div className='rightArrow' onClick={handleBackButton}>
              <img src={leftArrowImage} alt="" width={25}/>
              </div>
              <GridItem item={toShow} />
            </C.rightBig>
          }
        </C.rightSide>
      </C.Container>
    </C.Main>
  )
}

export default App;
