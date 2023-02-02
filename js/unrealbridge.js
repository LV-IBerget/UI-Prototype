
    function PlayLoop(id,segment){

      
      LottieInteractivity.create({
      player:'#'+id,
      mode:"chain",
      actions: [
          {
              state: 'loop',
              transition: 'none',
              frames: segment
          }
      ]
    });

    }

    function GetFramesFromString(state)
    {
      let listeningFrames = [0, 100];
      let  speakingFrames= [101, 200];
      let waitingFrames = [201, 300];
      let thinkingFrames = [301, 400];
      switch(state) {
      case "Think":
        return thinkingFrames;
        break;
      case "Listen":
        return listeningFrames;
        break;
      case "Speak":
        return speakingFrames;
        break;
      default:
        return waitingFrames;
    }
    }
     
    function PlayBotMindLoop(state){
      PlayLoop('BotMind',GetFramesFromString(state))
      console.log(state);
    }
