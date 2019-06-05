import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import logo from '../testimg.png'
import Clock from 'react-live-clock';

const Banner = styled.nav`
    background: #00aad3;
    padding: 3%;
    padding-left: 4%;
    font-size: 30px;
    border-bottom: solid black 3px;
    border-top: solid black 3px;

`

const ClockGridVert = styled.div`
  font-size: 1.3em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
`

const ClockGridHorz = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const BannerGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px
`

const StatelessFuncComponent = ({text}) => (
    <div>
        <p>-=- {text} -=-</p>
    </div>
)

const Logo = () => {
    return <img src={logo} alt="Logo" height="100px"/>;
}

class ClockComponent extends React.Component {
  render() {
    return (
      <div>
      <ClockGridHorz>
        <ClockGridVert>
          <div>PST: <Clock format={'HH:mm'} ticking={true} timezone={'US/Pacific'} /></div>
          <div>EST: <Clock format={'HH:mm'} ticking={true} timezone={'US/Eastern'} /></div>
        </ClockGridVert>
        <ClockGridVert>
          <div>CST: <Clock format={'HH:mm'} ticking={true} timezone={'US/Central'} /></div>
          <div>ACT: <Clock format={'HH:mm'} ticking={true} timezone={'Australia/Sydney'} /></div>
        </ClockGridVert>
      </ClockGridHorz>
      </div>
    );
  }
}

ReactDOM.render(
        <div>
          <Banner>
            <BannerGrid>
              <Logo />
              <ClockComponent />
            </BannerGrid>
          </Banner>
          <StatelessFuncComponent text='Heyo'/>
        </div>

    , document.getElementById('iamroot'))