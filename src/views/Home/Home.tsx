import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const StyledPage = styled(Page)`
  padding-top: 0px;
`

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    height: 165px;
    padding-top: 0;
  }
`

const TVL = styled.div`
  
`;

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <StyledPage>
      <Hero>
        <Heading as="h1" size="xl" color="white">
          {TranslateString(576, 'NON-FUNGIBLE DEFI')}
        </Heading>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TVL>
            <TotalValueLockedCard />
            <CakeStats />
          </TVL>
        </Cards>
      </div>
    </StyledPage>
  )
}

export default Home
