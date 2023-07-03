const Ndis = () => {
  return (
    <div className="px-3 md:px-[75px] w-full h-[85vh] flex justify-center items-center">
      <div className="flex  flex-1 flex-col gap-8">
        <h1 className="font-[100] text-[25px] text-gray-800 leading-10">Who is the NDIS for? </h1>
        <p className="text-[14px] font-[500] ">
          The NDIS is for Australians under 65 years old, who have a permanent
          and significant disability. Disabilities may include intellectual,
          physical, sensory, cognitive and psychosocial.{" "}
        </p>
        <p className="font-bold">
          To find out if you are eligible for the NDIS, please visit the &nbsp
          <a className="text-purple-700 ml-[2px]" href="https://www.ndis.gov.au/applying-access-ndis/am-i-eligible">
            official NDIS Eligibility Checklist.
          </a>
        </p>
        <button className="w-fit  hover:-translate-y-[5px] rounded-[5px]  py-2 px-7 bg-purple-700 text-white font-[200]">Disabilty Services</button>
      </div>
      <div className="flex-1 hidden md:flex h-full">
        <img className=" object-cover" src="https://img.freepik.com/free-photo/team-supporting-invalid-coworker_23-2148476555.jpg?w=1060&t=st=1688411445~exp=1688412045~hmac=c1bc6959666fe549f9447fb0eca78e04a383b776a07577aa8fb35fd9e9139ba5" alt="" />
      </div>
    </div>
  );
};

export default Ndis;
