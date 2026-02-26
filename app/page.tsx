import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <div className="h-[100vh]">
        <img src={"hero-left-leaf.png"} className="relative top-20"></img>
        <img
          src={"hero-right-leaf.png"}
          className="absolute left-[84vw] bottom-[35vh] "
        ></img>
        <div className="ml-28 pb-12 pt-12">
          <p className="text-white mb-4">Cool. Crisp. Classic.</p>
          <h2 className="text-yellow-100 font-black text-5xl font-[Playpen_Sans_Deva] overflow-hidden">
            Sip the Spirit <br />
            of Summer
          </h2>
        </div>

        <div className="absolute left-[75vw] bottom-[11vh]">
          <p className="text-white mb-4 text-lg">
            Every cocktail on our menu is a<br />
            blend of premium ingredients,
            <br />
            creative flair, and timeless recipes
            <br />— designed to delight your senses.
          </p>

          <a className="view-cocktails-anchor text-white hover:text-yellow-100">View cocktails</a>
        </div>
      </div>
      <div className="bg-black h-[100vh]"></div>
    </div>
  );
}
