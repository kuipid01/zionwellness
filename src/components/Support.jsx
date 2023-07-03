const Support = () => {
  return (
    <div className="px-3 h-fit pb-[100px] md:pb-[1px] md:px-[75px] w-full md:h-[95vh] flex  flex-col justify-center items-center">
      <h1 className="text-[30px] text-center font-[100] leading-[40px]">
        The types of supports that the NDIS may fund for participants include:
      </h1>
      <ul className="md:w-[80%] w-full list-decimal h-fit gap-4 flex flex-col  mt-10">
        <div className="flex gap-2 items-center w-full">
          <div className="w-[12px] h-[12px] rounded-full bg-purple-700 "></div>
          <li className="flex w-[90%]  h-fit items-center">
            {" "}
            Daily personal activities{" "}
          </li>
        </div>
        <div className="flex gap-2 items-center w-full">
          <div className="w-[12px] h-[12px] rounded-full bg-purple-700"></div>
          <li className="flex w-[90%]  items-center">
            Transport to enable participation in community, social, economic and
            daily life activities{" "}
          </li>
        </div>

        <div className="flex gap-2 items-center w-full">
          <div className="w-[12px] h-[12px] rounded-full bg-purple-700"></div>
          <li className="flex w-[90%]  items-center">
            {" "}
            Workplace help to allow a participant to successfully get or keep
            employment in the open or supported labour market
          </li>
        </div>
        <div className="flex gap-2 items-center w-full">
          <div className="w-[12px] h-[12px] rounded-full bg-purple-700"></div>{" "}
          <li className="flex w-[90%] tems-center">
            {" "}
            Therapeutic supports including behaviour support
          </li>
        </div>
        <div className="flex gap-2 items-center w-full">
          <div className="w-[12px] h-[12px] rounded-full bg-purple-700"></div>{" "}
          <li className="flex w-[90%] tems-center">
            {" "}
            Help with household tasks to allow the participant to maintain their
            home environment{" "}
          </li>{" "}
        </div>
        <div className="flex gap-2 items-center w-full">
          <div className="w-[12px] h-[12px] rounded-full bg-purple-700"></div>{" "}
          <li className="flex w-[90%] -fit items-center">
            {" "}
            Help to a participant by skilled personnel in aids or equipment
            assessment, set up and training
          </li>{" "}
        </div>
        <div className="flex gap-2 items-center w-full">
          <div className="w-[12px] h-[12px] rounded-full bg-purple-700"></div>{" "}
          <li className="flex w-[90%] -fit items-center">
            {" "}
            Mobility equipment, and
          </li>{" "}
        </div>
        <div  className="flex items-center">
          <div className="w-[12px] h-[12px] rounded-full bg-purple-700 mr-2"></div>{" "}
          <li className="flex items-center"> Vehicle modifications.</li>
        </div>
      </ul>
    </div>
  );
};

export default Support;
