import React, { useEffect, useState, useCallback } from "react";

const Countdown = () => {
  const [secondsUntilHalving, setSecondsUntilHalving] = useState(0);
  const [blockInfo, setBlockInfo] = useState({
    estimatedHalvingDate: "",
    currentBlockReward: 3.125,
    postHalvingBlockReward: 0,
    blocksRemaining: 0,
  });

  const nextHalvingBlock = 1050000;
  const averageBlockTimeSeconds = 10 * 60;
  const fetchBlockHeightAndInfo = useCallback(async () => {
    const apiKey = process.env.NEXT_PUBLIC_OKLINK_API_KEY as string;
    try {
      const response = await fetch(
        "https://www.oklink.com/api/v5/explorer/blockchain/block?chainShortName=btc",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "OK-ACCESS-KEY": apiKey,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const currentBlockHeight = data.data[0].lastHeight;
      const blocksRemaining = nextHalvingBlock - currentBlockHeight;
      const secondsUntilHalving = blocksRemaining * averageBlockTimeSeconds;

      setSecondsUntilHalving(secondsUntilHalving);

      const estimatedHalvingDate = new Date(
        Date.now() + secondsUntilHalving * 1000
      ).toLocaleDateString();

      setBlockInfo((prevInfo) => ({
        ...prevInfo,
        estimatedHalvingDate,
        postHalvingBlockReward: prevInfo.currentBlockReward / 2,
        blocksRemaining,
      }));
    } catch (error) {
      console.error("Failed to fetch block height:", error);
    }
  }, [averageBlockTimeSeconds]);

  useEffect(() => {
    fetchBlockHeightAndInfo();
    const blockHeightInterval = setInterval(fetchBlockHeightAndInfo, 600000);
    return () => clearInterval(blockHeightInterval);
  }, [fetchBlockHeightAndInfo]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSecondsUntilHalving((prevSeconds) => Math.max(0, prevSeconds - 1));
    }, 1000);
    return () => clearInterval(countdownInterval);
  }, []);

  const timeLeft = {
    days: Math.floor(secondsUntilHalving / (60 * 60 * 24)),
    hours: Math.floor((secondsUntilHalving / (60 * 60)) % 24),
    minutes: Math.floor((secondsUntilHalving / 60) % 60),
    seconds: Math.floor(secondsUntilHalving % 60),
  };

  return (
    <div className="mt-10 flex flex-wrap justify-center items-center">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="w-1/2 sm:w-auto text-center p-2 sm:p-6">
          <p className="text-8xl font-bold bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg transform hover:rotate-180 transition duration-500">
            {timeLeft[interval as keyof typeof timeLeft]}
          </p>
          <p className="text-md text-gray-500">{interval.toUpperCase()}</p>
        </div>
      ))}
      <div className="text-center mt-2 sm:mt-4 w-full flex justify-center">
        <div className="w-full sm:w-1/2 2xl:w-1/3 sm:px-4 font-bold">
          {" "}
          <div className="flex justify-between mt-2 sm:mt-2 items-center px-4">
            <span>Expected Date:</span>
            <span>{blockInfo.estimatedHalvingDate}</span>
          </div>
          <div className="flex justify-between mt-2 sm:mt-2 items-center px-4">
            <span>Current Reward:</span>
            <span>{blockInfo.currentBlockReward} BTC</span>
          </div>
          <div className="flex justify-between mt-2 sm:mt-2 items-center px-4">
            <span>Rewards After Halving:</span>
            <span>{blockInfo.postHalvingBlockReward} BTC</span>
          </div>
          <div className="flex justify-between mt-2 sm:mt-2 items-center px-4">
            <span>Remaining Blocks:</span>
            <span>{blockInfo.blocksRemaining}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
