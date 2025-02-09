import React from "react";
import BottomNav from "../components/BottomNav";
const Home = () => {
  return (
    <section className=" bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/*Left Div */}
      <div className="flex-[3] bg-red-600"></div>

      {/*Right Div */}
      <div className="flex-[1.5] bg-blue-600"></div>
      <BottomNav />
    </section>
  );
};

export default Home;
