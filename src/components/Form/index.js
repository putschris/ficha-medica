import React from 'react';
import { useState } from 'react'
import { mask, unMask } from 'remask'

import { Container, ContactBox, Left, Right, Button } from './styles';
import medicine from '../../assets/medicine.jpg';

function Form() {

  const [value, setValue] = useState("");
  const onChange = event => {
    const origiValue = unMask(event.target.value);
    const maskedValue = mask(origiValue, [
      "99.99"
    ]);
    setValue(maskedValue);
  }

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [pressaoArt, setPressaoArt] = useState('');
  const [temperaturaCorp, setTemperaturaCorp] = useState('');
  const [sexo, setSexo] = useState('');
  const [desc, setDesc] = useState('');

  return(
    <div>
      <Container>
        <ContactBox>
          <Left>
            <div>
              <img src={medicine} alt="Profile Medicine"/>
              <h2>Triagem Virtual Salut</h2>
              <p>Olá Chris. Bem vindo ao Salut</p>
            </div>
          </Left>
          <Right>
            <h2>Ficha Médica</h2>
            <input
            id={'peso'}
            name={'peso'}
            type={'text'} 
            onChange={(event) => setPeso(event.target.value)}
            value={peso}
            />

            <input 
            id={'altura'}
            name={'altura'}
            type={'text'} 
            onChange={(event) => setAltura(event.target.value)}
            value={altura}
            />

            <input
            id={'dataNasc'}
            name={'dataNasc'} 
            type={'text'}
            onchange={(event) => setDataNasc(event.target.value)}
            value={dataNasc}
            />

            <input
            id={'pressaoArt'}
            name={'pressaoArt'}
            type={'text'}
            onchange={(event) => setPressaoArt(event.target.value)}
            value={pressaoArt}
            />

            <input
            id={'temperaturaCorp'}
            name={'temperaturaCorp'}
            type={'text'}
            onChange={(event) => setTemperaturaCorp(event.target.value)}
            value={temperaturaCorp}
            />

            <textarea 
            id={'desc'}
            name={'name'}
            onChange={(event) => setDesc(event.target.value)}
            value={desc}
            />
            <Button>Enviar</Button>
          </Right>
        </ContactBox>
      </Container>
    </div>
  );
}

export default Form;