import React from 'react'
import GameContextProvider from './contexts/GameContext'
import GameWrapper from './components/GameWrapper'


export default function App() {
  return (
    <GameContextProvider>
      <GameWrapper />
    </GameContextProvider>
  );
}
